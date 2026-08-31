import { useEffect, useRef, useState } from "react";
import { WORLD_CLIPS } from "@/lib/site";
import { setWorldProgress } from "@/lib/world-progress";

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

function lingerMap(t: number, linger: number) {
  if (linger <= 0) return t;
  return t + (linger / (2 * Math.PI)) * Math.sin(2 * Math.PI * t);
}

function clipOpacity(p: number, i: number, n: number, fade: number) {
  const start = i === 0 ? 0 : i / n - fade;
  const fullIn = i === 0 ? 0 : i / n + fade;
  const fullOut = i === n - 1 ? 1 : (i + 1) / n - fade;
  const end = i === n - 1 ? 1 : (i + 1) / n + fade;
  if (p < start || p > end) return 0;
  if (p < fullIn) return (p - start) / Math.max(0.0001, fullIn - start);
  if (p > fullOut) return 1 - (p - fullOut) / Math.max(0.0001, end - fullOut);
  return 1;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isCoarsePointer() {
  return window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 860;
}

export function WorldScrub() {
  const n = WORLD_CLIPS.length;
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const blobUrls = useRef<(string | null)[]>(Array(n).fill(null));
  const primed = useRef(false);
  const lastW = useRef(0);
  const progressRef = useRef(0);
  const [painted, setPainted] = useState<boolean[]>(() => Array(n).fill(false));
  const [reduced, setReduced] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setReduced(prefersReducedMotion());
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = () => setReduced(mq.matches);
    mq.addEventListener("change", onMq);

    let raf = 0;
    let target = 0;

    const measure = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      target = clamp(window.scrollY / max, 0, 1);
    };

    const fade = 0.055;
    const tick = () => {
      const prev = progressRef.current;
      const next = prev + (target - prev) * 0.18;
      const val = Math.abs(next - target) < 0.0004 ? target : next;
      progressRef.current = val;
      
      const idx = clamp(Math.floor(val * n), 0, n - 1);
      setActive(idx);
      setWorldProgress(val, idx);

      const coarse = isCoarsePointer();
      
      WORLD_CLIPS.forEach((clip, i) => {
        const c = containerRefs.current[i];
        if (c && !reduced) {
          c.style.opacity = clipOpacity(val, i, n, fade).toString();
        }
        const el = videoRefs.current[i];
        if (!el || !el.duration || reduced) return;
        const start = i / n;
        const end = (i + 1) / n;
        const local = clamp((val - start) / (end - start), 0, 1);
        const t = lingerMap(local, clip.linger) * (el.duration - 0.05);
        if (coarse && el.seeking) return;
        if (Math.abs(el.currentTime - t) > 0.03) {
          try {
            el.currentTime = t;
          } catch {}
        }
      });
      
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => measure();
    const onResize = () => {
      if (isCoarsePointer()) {
        const w = window.innerWidth;
        if (Math.abs(w - lastW.current) < 2) return;
        lastW.current = w;
      }
      measure();
    };

    lastW.current = window.innerWidth;
    measure();
    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      cancelAnimationFrame(raf);
      mq.removeEventListener("change", onMq);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    WORLD_CLIPS.forEach(async (clip, i) => {
      try {
        const res = await fetch(clip.clip);
        const blob = await res.blob();
        if (cancelled) return;
        const url = URL.createObjectURL(blob);
        blobUrls.current[i] = url;
        const el = videoRefs.current[i];
        if (el) {
          el.src = url;
          el.load();
        }
      } catch {
        const el = videoRefs.current[i];
        if (el) el.src = clip.clip;
      }
    });
    return () => {
      cancelled = true;
      blobUrls.current.forEach((u) => {
        if (u) URL.revokeObjectURL(u);
      });
    };
  }, [reduced]);

  useEffect(() => {
    const prime = () => {
      if (primed.current) return;
      primed.current = true;
      videoRefs.current.forEach((el) => {
        if (!el) return;
        el.muted = true;
        const play = el.play();
        if (play) play.then(() => el.pause()).catch(() => {});
      });
    };
    window.addEventListener("pointerdown", prime, { once: true });
    window.addEventListener("touchstart", prime, { once: true });
    return () => {
      window.removeEventListener("pointerdown", prime);
      window.removeEventListener("touchstart", prime);
    };
  }, []);

  const fade = 0.055;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-bg"
      aria-hidden="true"
    >
      {WORLD_CLIPS.map((clip, i) => {
        const initialOp = reduced ? (i === active ? 1 : 0) : clipOpacity(progressRef.current, i, n, fade);
        return (
          <div
            key={clip.id}
            ref={(el) => {
              containerRefs.current[i] = el;
            }}
            className="absolute inset-0"
            style={{ opacity: initialOp, transition: reduced ? "opacity 400ms ease" : undefined }}
          >
            <img
              src={clip.still}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{ opacity: painted[i] && !reduced ? 0 : 1, transition: "opacity 280ms ease" }}
            />
            {!reduced && (
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={clip.clip}
                className="absolute inset-0 h-full w-full object-cover"
                muted
                playsInline
                preload="auto"
                onSeeked={() => {
                  setPainted((prev) => {
                    if (prev[i]) return prev;
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }}
              />
            )}
          </div>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-b from-bg/55 via-bg/25 to-bg/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(14,17,20,0.55)_100%)]" />
    </div>
  );
}
