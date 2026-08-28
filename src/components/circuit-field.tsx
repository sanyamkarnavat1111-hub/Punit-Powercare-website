import { useEffect, useRef } from "react";

type Pulse = { path: number; t: number; speed: number; hue: "amber" | "lcd" };

export function CircuitField() {
  const staticRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const staticCanvas = staticRef.current;
    const animCanvas = animRef.current;
    if (!staticCanvas || !animCanvas) return;
    const staticCtx = staticCanvas.getContext("2d");
    const animCtx = animCanvas.getContext("2d");
    if (!staticCtx || !animCtx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let running = true;

    const paths: { x: number; y: number }[][] = [];
    const pulses: Pulse[] = [];

    const layout = () => {
      // Force resolution scale to 1 (ignoring high-DPI/Retina screens) to massively improve GPU performance
      const dpr = 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      staticCanvas.width = Math.floor(w * dpr);
      staticCanvas.height = Math.floor(h * dpr);
      staticCanvas.style.width = `${w}px`;
      staticCanvas.style.height = `${h}px`;
      staticCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      animCanvas.width = Math.floor(w * dpr);
      animCanvas.height = Math.floor(h * dpr);
      animCanvas.style.width = `${w}px`;
      animCanvas.style.height = `${h}px`;
      animCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      paths.length = 0;
      const cols = w < 700 ? 4 : 7;
      const rows = 5;
      const padX = w * 0.06;
      const padY = h * 0.1;
      const gw = (w - padX * 2) / (cols - 1);
      const gh = (h - padY * 2) / (rows - 1);

      for (let r = 0; r < rows; r++) {
        const y = padY + r * gh;
        const row: { x: number; y: number }[] = [];
        for (let c = 0; c < cols; c++) {
          row.push({ x: padX + c * gw, y });
        }
        paths.push(row);
      }
      for (let c = 0; c < cols; c++) {
        const col: { x: number; y: number }[] = [];
        for (let r = 0; r < rows; r++) {
          col.push({ x: padX + c * gw, y: padY + r * gh });
        }
        paths.push(col);
      }

      pulses.length = 0;
      const count = w < 700 ? 8 : 14;
      for (let i = 0; i < count; i++) {
        pulses.push({
          path: i % paths.length,
          t: Math.random(),
          speed: 0.08 + Math.random() * 0.12,
          hue: i % 3 === 0 ? "lcd" : "amber",
        });
      }
      // Draw static background once per layout
      staticCtx.clearRect(0, 0, w, h);
      staticCtx.lineWidth = 1;
      staticCtx.strokeStyle = "rgba(255,122,26,0.07)";
      for (const p of paths) {
        staticCtx.beginPath();
        p.forEach((pt, i) => (i === 0 ? staticCtx.moveTo(pt.x, pt.y) : staticCtx.lineTo(pt.x, pt.y)));
        staticCtx.stroke();
      }
      for (const p of paths) {
        for (const pt of p) {
          staticCtx.fillStyle = "rgba(55,255,160,0.12)";
          staticCtx.fillRect(pt.x - 1.5, pt.y - 1.5, 3, 3);
        }
      }
    };

    layout();
    window.addEventListener("resize", layout);

    let last = performance.now();
    const draw = (now: number) => {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      // Only clear the animated canvas
      animCtx.clearRect(0, 0, w, h);

      if (!reduced && !document.hidden) {
        for (const pulse of pulses) {
          pulse.t += pulse.speed * dt;
          if (pulse.t > 1) pulse.t -= 1;
          const path = paths[pulse.path];
          if (!path || path.length < 2) continue;
          const segs = path.length - 1;
          const f = pulse.t * segs;
          const i = Math.min(segs - 1, Math.floor(f));
          const u = f - i;
          const a = path[i];
          const b = path[i + 1];
          const x = a.x + (b.x - a.x) * u;
          const y = a.y + (b.y - a.y) * u;
          const color = pulse.hue === "lcd" ? "55,255,160" : "255,122,26";
          const g = animCtx.createRadialGradient(x, y, 0, x, y, 14);
          g.addColorStop(0, `rgba(${color},0.85)`);
          g.addColorStop(1, `rgba(${color},0)`);
          animCtx.fillStyle = g;
          animCtx.beginPath();
          animCtx.arc(x, y, 14, 0, Math.PI * 2);
          animCtx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", layout);
    };
  }, []);

  return (
    <>
      <canvas
        ref={staticRef}
        className="pointer-events-none fixed inset-0 z-[1] opacity-25 mix-blend-screen"
        aria-hidden="true"
      />
      <canvas
        ref={animRef}
        className="pointer-events-none fixed inset-0 z-[1] opacity-25 mix-blend-screen"
        aria-hidden="true"
      />
    </>
  );
}
