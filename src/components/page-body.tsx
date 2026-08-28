import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  Activity,
  Cable,
  CircuitBoard,
  Factory,
  Gauge,
  Mail,
  MapPin,
  Phone,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";
import { Eyebrow } from "@/components/chrome";
import { CLIENTS, FAQS, GALLERY, INDUSTRIES, SERVICES, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const ICONS = [Zap, CircuitBoard, Factory, Gauge, Shield, Wrench, Activity, Cable, CircuitBoard];

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Wrap({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-[1180px] px-5 sm:px-7", className)}>{children}</div>;
}

export function Hero() {
  return (
    <section className="relative pb-16 pt-16 sm:pb-24 sm:pt-20">
      <Wrap className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal in">
          <Eyebrow>Nashik · Since establishment · 24×7 service</Eyebrow>
          <h1 className="font-headline text-[clamp(40px,6vw,68px)] font-black uppercase">
            Fix your power factor.{" "}
            <em className="not-italic text-primary">Stop paying for power you never use.</em>
          </h1>
          <p className="mt-5 max-w-[46ch] text-lg text-muted">
            Punit Powercare designs and manufactures Thyristorised APFC panels and switchgear for
            industrial and commercial facilities — engineered in Nashik, trusted across Maharashtra.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="btn-press inline-flex items-center rounded-lg bg-primary px-6 py-3.5 text-[15px] font-bold text-primary-ink shadow-[0_6px_0_0_#b5580a]"
            >
              Request a site assessment
            </a>
            <a
              href="#problem"
              className="inline-flex items-center rounded-lg border-2 border-fg px-6 py-3.5 text-[15px] font-bold text-fg transition-colors hover:bg-fg hover:text-bg"
            >
              See how it works ↓
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-7 border-t border-white/10 pt-5">
            {[
              ["24×7", "Service backup"],
              ["0.99", "Target power factor"],
              ["3–15", "Month payback (typ.)"],
              ["10+", "Industries served"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-mono text-2xl font-semibold tabular-nums">{n}</div>
                <div className="text-xs tracking-wider text-muted uppercase">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass reveal in rounded-[20px] p-7 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]">
          <div className="mb-2.5 flex items-center justify-between font-mono text-[11.5px] tracking-[0.1em] text-muted uppercase">
            <span className="flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-lcd shadow-[0_0_8px_var(--color-lcd)]" />
              Live panel readout
            </span>
            <span>PF meter</span>
          </div>
          <div className="flex justify-center py-1">
            <svg width="220" height="130" viewBox="0 0 200 120" aria-label="Power factor gauge">
              <path
                d="M10,100 A90,90 0 0,1 190,100"
                fill="none"
                stroke="#2a343c"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M10,100 A90,90 0 0,1 78,15"
                fill="none"
                stroke="#D62828"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M78,15 A90,90 0 0,1 190,100"
                fill="none"
                stroke="#1E8E5A"
                strokeWidth="14"
                strokeLinecap="round"
                opacity="0.85"
              />
              <g className="pf-needle">
                <line x1="100" y1="100" x2="100" y2="26" stroke="#37FFA0" strokeWidth="3" strokeLinecap="round" />
                <circle cx="100" cy="100" r="7" fill="#37FFA0" />
              </g>
            </svg>
          </div>
          <div className="text-center">
            <div className="font-mono text-[38px] font-semibold text-lcd [text-shadow:0_0_18px_rgba(55,255,160,0.45)]">
              0.99
            </div>
            <div className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
              Corrected power factor
            </div>
          </div>
          <div className="mt-3.5 flex justify-between px-1.5 font-mono text-[10.5px] text-muted">
            <span>0.65 · Poor</span>
            <span>0.90 · Fair</span>
            <span>1.00 · Unity</span>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

export function Problem() {
  return (
    <section id="problem" className="relative py-20 sm:py-24">
      <Wrap>
        <div className="reveal section-head mb-11 max-w-[640px]">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,44px)]">
            Low power factor is a hidden line item on your electricity bill
          </h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal space-y-4 text-muted">
            <p>
              Power factor is the ratio of working power to total power — the working power plus the
              non-productive reactive power circulating through your facility. Technically, it's the
              cosine of the angle between voltage and current.
            </p>
            <p>
              A power factor between 0.95 and 1.0 means your electrical power is being put to maximum
              use. Anything below 0.9 means you're drawing more current than you need to deliver the
              same load — and paying for it through power factor penalties, reactive power charges, or
              surcharge fees.
            </p>
            <p>
              Equipment like transformers, motors, air conditioners, furnaces, rolling mills, spinning
              mills and variable drives all shift the phase angle between current and voltage — which
              is exactly what drives that penalty up.
            </p>
          </div>
          <div className="reveal grid grid-cols-2 gap-3.5">
            {[
              ["48%", "reduction in power losses when PF improves from 65% to 90% (losses scale with I²)"],
              ["↓ I", "Lower current draw for the same active load, once power factor is corrected"],
              ["↑ KW", "More usable working power available from the same KVA demand"],
              ["↓ ₹", "Fewer reactive-power penalties and surcharges on your monthly bill"],
            ].map(([k, d]) => (
              <div key={k} className="glass rounded-xl p-5">
                <div className="font-mono text-[26px] font-semibold text-danger">{k}</div>
                <div className="mt-1 text-[12.5px] text-muted">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
}

export function Benefits() {
  return (
    <section id="benefits" className="relative py-20 sm:py-24">
      <Wrap>
        <div className="reveal mb-11 max-w-[640px]">
          <Eyebrow>Why it pays for itself</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,44px)]">Power factor correction, in four numbers</h2>
          <p className="mt-3.5 text-[16.5px] text-muted">
            Investing in correction is an easy, economically sound decision — these systems typically
            pay back within 3 to 15 months, depending on your load profile and tariff structure.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              i: "01",
              t: "Fewer distribution losses",
              p: "Losses are proportional to the square of the current. Improving PF from 65% to 90% cuts losses by roughly 48%.",
              f: "% loss ↓ = 100 − (0.65/0.90)²",
            },
            {
              i: "02",
              t: "More usable KW",
              p: "KW = KVA × PF. A higher PF unlocks more working power from the same KVA demand — room for more motors without a bigger connection.",
              f: "KW = KVA × PF",
            },
            {
              i: "03",
              t: "Better voltage regulation",
              p: "Reduced line voltage drop means steadier voltage at your equipment — and more efficient performance from motors and other electrical loads.",
              f: null,
            },
            {
              i: "04",
              t: "Smaller cable & switchgear",
              p: "Lower current requirement means new installations can use smaller transformers, cables and switchgear — less upfront investment.",
              f: "I = (KVA×10³)/(√3·V)",
            },
          ].map((b) => (
            <div key={b.i} className="glass reveal rounded-[14px] p-5">
              <div className="font-mono text-xs font-semibold tracking-[0.1em] text-amber-ink">
                BENEFIT {b.i}
              </div>
              <h4 className="mt-2 font-sans text-xl font-bold normal-case">{b.t}</h4>
              <p className="mt-2 text-sm text-muted">{b.p}</p>
              {b.f && (
                <div className="mt-3 inline-block rounded-md bg-bg px-2.5 py-2 font-mono text-[13px] text-lcd">
                  {b.f}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="reveal mt-9 overflow-hidden rounded-[14px] bg-bg/80 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
          <div className="border-b border-white/10 px-5 py-3.5 font-mono text-xs tracking-[0.1em] text-muted uppercase">
            600 KVA demand — available KW vs. power factor
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center font-mono text-[13.5px]">
              <tbody>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-xs font-medium tracking-wider text-muted uppercase">
                    Power factor
                  </th>
                  {["60", "70", "80", "90", "100"].map((v, i) => (
                    <td key={v} className={cn("px-4 py-3", i >= 3 && "font-semibold text-lcd")}>
                      {v}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-xs font-medium tracking-wider text-muted uppercase">
                    Active power (KW)
                  </th>
                  {["360", "420", "480", "540", "600"].map((v, i) => (
                    <td key={v} className={cn("px-4 py-3", i >= 3 && "font-semibold text-lcd")}>
                      {v}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-xs font-medium tracking-wider text-muted uppercase">
                    Reactive power (KVAR)
                  </th>
                  {["480", "428", "360", "262", "0"].map((v, i) => (
                    <td key={v} className={cn("px-4 py-3", i >= 3 && "font-semibold text-lcd")}>
                      {v}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="px-4 py-3 text-xs font-medium tracking-wider text-muted uppercase">
                    Total power (KVA)
                  </th>
                  {["600", "600", "600", "600", "600"].map((v, i) => (
                    <td key={`kva-${i}`} className="px-4 py-3">
                      {v}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-5 max-w-[70ch] text-[14.5px] text-muted">
          <strong className="text-fg">Fixed capacitors vs. Thyristorised APFC:</strong> fixed
          capacitor banks can over-compensate — pushing PF into “leading” territory, which carries
          its own penalty — and stay in circuit even at low load. Punit Powercare's Thyristorised
          APFC switches capacitor steps in and out automatically, avoiding both problems.
        </p>
      </Wrap>
    </section>
  );
}

export function Advantages() {
  const outer = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = outer.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -rect.top / Math.max(1, total)));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    "Zero inrush current & surges — precise auto zero-current logic extends transformer life.",
    "Maintenance-free solid-state switching — no moving parts, chattering, or sparking, ever.",
    "Precision compensation in small steps — holds PF near unity without over-compensation.",
    "Live parameter display with RS-232 printout on demand for total load visibility.",
    "Short payback period with massive long-term running savings.",
  ];
  const activeCount = Math.round(progress * items.length);
  const inv = 1 - progress;
  const mods = [
    { id: "door", dx: -140, dy: -40, r: -14 },
    { id: "meter", dx: 150, dy: -120, r: 10 },
    { id: "breaker", dx: 160, dy: 90, r: 8 },
    { id: "cap", dx: -160, dy: 130, r: -10 },
    { id: "bus", dx: 0, dy: -170, r: 0 },
  ];

  return (
    <section ref={outer} id="advantages" className="relative h-[240vh]">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <Wrap className="flex h-full flex-col justify-end gap-3 pb-6 pt-24 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-8 lg:py-16">
          <div className="flex-shrink-0">
            <div className="mb-3 lg:mb-6">
              <Eyebrow>Inside the panel</Eyebrow>
              <h2 className="text-[clamp(26px,5.5vw,42px)] leading-[1.1] lg:leading-normal">
                What Thyristorised switching actually gives you
              </h2>
            </div>
            <div className="flex flex-col gap-1.5 lg:gap-2.5">
              {items.map((t, i) => (
                <div
                  key={t}
                  className={cn(
                    "flex items-start gap-2.5 rounded-[10px] px-3 py-1.5 text-[12.5px] leading-snug transition-all duration-300 lg:gap-3 lg:px-3.5 lg:py-2.5 lg:text-sm lg:leading-normal",
                    i < activeCount
                      ? "bg-surface/90 text-fg shadow-[0_0_0_1px_var(--color-primary)]"
                      : "bg-bg/40 text-muted opacity-40",
                  )}
                >
                  <span className="w-5 shrink-0 font-mono text-xs font-semibold text-amber-ink lg:w-6">
                    0{i + 1}
                  </span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[150px] w-full flex-1 lg:min-h-0 lg:h-[480px]">
            <svg viewBox="-100 -120 600 660" className="h-full w-full" aria-label="Exploded APFC panel">
              <rect x="60" y="30" width="280" height="360" rx="10" fill="none" stroke="#2a343c" strokeWidth="2" strokeDasharray="6 5" />
              <g style={{ transform: `translate(${mods[0].dx * inv}px, ${mods[0].dy * inv}px) rotate(${mods[0].r * inv}deg)` }}>
                <rect x="70" y="45" width="120" height="330" rx="8" fill="#EEF0F1" stroke="#12181D" strokeWidth="2" />
                <circle cx="130" cy="120" r="14" fill="#fff" stroke="#12181D" strokeWidth="2" />
                <circle cx="130" cy="120" r="4" fill="#D62828" />
                <rect x="95" y="160" width="70" height="10" rx="3" fill="#5B6570" />
                <rect x="95" y="180" width="70" height="10" rx="3" fill="#5B6570" />
              </g>
              <g style={{ transform: `translate(${mods[1].dx * inv}px, ${mods[1].dy * inv}px) rotate(${mods[1].r * inv}deg)` }}>
                <rect x="210" y="60" width="110" height="80" rx="8" fill="#12181D" />
                <rect x="222" y="72" width="86" height="30" rx="3" fill="#0E1114" />
                <text x="265" y="93" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="12" fill="#37FFA0">
                  PF 0.99
                </text>
                <circle cx="230" cy="118" r="4" fill="#1E8E5A" />
                <circle cx="248" cy="118" r="4" fill="#FF7A1A" />
                <circle cx="266" cy="118" r="4" fill="#D62828" />
              </g>
              <g style={{ transform: `translate(${mods[2].dx * inv}px, ${mods[2].dy * inv}px) rotate(${mods[2].r * inv}deg)` }}>
                <rect x="215" y="180" width="100" height="120" rx="8" fill="#fff" stroke="#12181D" strokeWidth="2" />
                <rect x="228" y="196" width="24" height="34" rx="3" fill="#D62828" />
                <rect x="258" y="196" width="24" height="34" rx="3" fill="#1E8E5A" />
                <rect x="228" y="240" width="24" height="34" rx="3" fill="#5B6570" />
                <rect x="258" y="240" width="24" height="34" rx="3" fill="#5B6570" />
              </g>
              <g style={{ transform: `translate(${mods[3].dx * inv}px, ${mods[3].dy * inv}px) rotate(${mods[3].r * inv}deg)` }}>
                <rect x="80" y="200" width="90" height="130" rx="8" fill="#12181D" />
                <circle cx="105" cy="225" r="10" fill="none" stroke="#37FFA0" strokeWidth="2" />
                <circle cx="135" cy="225" r="10" fill="none" stroke="#37FFA0" strokeWidth="2" />
                <circle cx="105" cy="255" r="10" fill="none" stroke="#37FFA0" strokeWidth="2" />
                <circle cx="135" cy="255" r="10" fill="none" stroke="#37FFA0" strokeWidth="2" />
                <circle cx="105" cy="285" r="10" fill="none" stroke="#FF7A1A" strokeWidth="2" />
                <circle cx="135" cy="285" r="10" fill="none" stroke="#FF7A1A" strokeWidth="2" />
              </g>
              <g style={{ transform: `translate(${mods[4].dx * inv}px, ${mods[4].dy * inv}px) rotate(${mods[4].r * inv}deg)` }}>
                <rect x="150" y="30" width="100" height="14" rx="3" fill="#D62828" />
                <rect x="150" y="48" width="100" height="14" rx="3" fill="#FF7A1A" />
                <rect x="150" y="66" width="100" height="14" rx="3" fill="#12181D" />
              </g>
            </svg>
          </div>
        </Wrap>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24">
      <Wrap>
        <div className="reveal mb-11 max-w-[640px]">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,44px)]">Manufacturing, supply and support — under one roof</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i] ?? Zap;
            return (
              <div key={s.title} className="glass reveal flex gap-3.5 rounded-[14px] p-5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-[9px] bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h4 className="font-sans text-[15.5px] font-bold normal-case">{s.title}</h4>
                  <p className="mt-1.5 text-[13.5px] text-muted">{s.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Wrap>
    </section>
  );
}

export function Gallery() {
  const slides = [...GALLERY, ...GALLERY];
  return (
    <section id="gallery" className="relative py-20 sm:py-24">
      <Wrap>
        <div className="reveal mb-10 max-w-[640px]">
          <Eyebrow lcd>Our work</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,44px)]">Panels built to precision</h2>
        </div>
      </Wrap>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="gallery-track flex w-max gap-7 px-4">
          {slides.map((g, i) => (
            <div
              key={`${g.src}-${i}`}
              className="relative h-[220px] w-[300px] shrink-0 overflow-hidden rounded-[14px] shadow-[0_0_0_1px_rgba(255,122,26,0.35)] sm:h-[280px] sm:w-[400px]"
            >
              <img
                src={g.src}
                alt={g.alt}
                className="h-full w-full object-cover opacity-90 transition duration-300 hover:scale-105 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section className="relative py-20 sm:py-24">
      <Wrap>
        <div className="reveal mb-10 max-w-[640px]">
          <Eyebrow>Who it's for</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,44px)]">Useful to almost any load-heavy operation</h2>
        </div>
        <div className="reveal flex flex-wrap gap-3">
          {INDUSTRIES.map((n) => (
            <span
              key={n}
              className="rounded-full bg-surface/80 px-[18px] py-2.5 text-sm font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
            >
              {n}
            </span>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

export function Clients() {
  return (
    <section id="clients" className="relative py-20 sm:py-24">
      <Wrap>
        <div className="reveal mb-11 max-w-[640px]">
          <Eyebrow>Trusted by</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,44px)]">Our valuable clients</h2>
          <p className="mt-3.5 text-muted">
            A cross-section of the manufacturing, hospitality, healthcare and industrial names we've
            worked with.
          </p>
        </div>
        <div className="reveal grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
          {CLIENTS.map((c) => (
            <div
              key={c}
              className="glass flex h-[82px] items-center justify-center rounded-xl px-2 text-center font-headline text-base font-extrabold tracking-wide text-muted uppercase"
            >
              {c}
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <Wrap className="grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow lcd>About us</Eyebrow>
          <h2 className="text-[clamp(28px,4vw,42px)]">
            Real care of customers <em className="not-italic text-lcd">and</em> equipment
          </h2>
          <p className="mt-5 text-muted">
            24×7 Punit Powercare is a well-known name in power management and electricity — one of
            the pioneers in developing Thyristorised APFC systems in the region. We're known as much
            for after-sales service as for the panels themselves, because a panel that isn't
            supported isn't really a solution.
          </p>
          <p className="mt-3.5 text-muted">
            Dedicated, knowledgeable staff are available seven days a week, twenty-four hours a day,
            to answer questions and dispatch a field service technician — during the warranty period,
            and after it, under AMC.
          </p>
          <a
            href="#contact"
            className="btn-press mt-7 inline-flex rounded-lg bg-primary px-6 py-3.5 text-[15px] font-bold text-primary-ink shadow-[0_6px_0_0_#b5580a]"
          >
            Talk to our team
          </a>
        </div>
        <div className="glass reveal rounded-[18px] p-7">
          {[
            ["Entity", "Punit Powercare"],
            ["Focus", "APFC & Switchgear Care"],
            ["Registered office", "Nashik, Maharashtra"],
            ["Workshop", "MIDC Ambad, Nashik"],
            ["Support", "24×7, 7 days/week"],
            ["Speciality", "Thyristorised APFC"],
          ].map(([k, v], i, arr) => (
            <div
              key={k}
              className={cn(
                "flex justify-between gap-4 py-3 text-sm",
                i < arr.length - 1 && "border-b border-white/10",
              )}
            >
              <span className="text-muted">{k}</span>
              <span className="font-mono text-fg">{v}</span>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = [
      `Name: ${fd.get("Name") ?? ""}`,
      `Company: ${fd.get("Company") ?? ""}`,
      `Phone: ${fd.get("Phone") ?? ""}`,
      `Message: ${fd.get("Message") ?? ""}`,
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Site assessment enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <Wrap>
        <div className="reveal mb-11 max-w-[640px]">
          <Eyebrow lcd>Get in touch</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,44px)]">Request a site assessment</h2>
          <p className="mt-3.5 text-muted">
            Tell us about your load and current power factor — we'll get back with a straightforward
            recommendation.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="glass reveal rounded-[18px] p-7">
            <div className="flex gap-3.5 border-b border-white/10 py-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-lcd" />
              <div className="text-sm text-muted">
                <strong className="mb-0.5 block text-[15px] text-fg">{SITE.contact}</strong>
                <a href={`tel:${SITE.phone}`} className="hover:text-fg">
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex gap-3.5 border-b border-white/10 py-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-lcd" />
              <div className="text-sm text-muted">
                <strong className="mb-0.5 block text-[15px] text-fg">Email</strong>
                <a href={`mailto:${SITE.email}`} className="hover:text-fg">
                  {SITE.email}
                </a>
              </div>
            </div>
            <div className="flex gap-3.5 border-b border-white/10 py-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-lcd" />
              <div className="text-sm text-muted">
                <strong className="mb-0.5 block text-[15px] text-fg">Registered office</strong>
                {SITE.office}
              </div>
            </div>
            <div className="flex gap-3.5 py-4">
              <Factory className="mt-0.5 size-5 shrink-0 text-lcd" />
              <div className="text-sm text-muted">
                <strong className="mb-0.5 block text-[15px] text-fg">Workshop</strong>
                {SITE.workshop}
              </div>
            </div>
          </div>

          <form className="reveal flex flex-col gap-3.5" onSubmit={onSubmit}>
            <label className="font-mono text-xs tracking-wider text-muted uppercase">Name</label>
            <input
              required
              name="Name"
              placeholder="Your name"
              className="rounded-lg border border-white/10 bg-surface px-3.5 py-3 text-[14.5px] text-fg outline-none placeholder:text-muted/60 focus:border-primary"
            />
            <label className="font-mono text-xs tracking-wider text-muted uppercase">Company</label>
            <input
              name="Company"
              placeholder="Your company"
              className="rounded-lg border border-white/10 bg-surface px-3.5 py-3 text-[14.5px] text-fg outline-none placeholder:text-muted/60 focus:border-primary"
            />
            <label className="font-mono text-xs tracking-wider text-muted uppercase">Phone</label>
            <input
              required
              type="tel"
              name="Phone"
              placeholder="Contact number"
              className="rounded-lg border border-white/10 bg-surface px-3.5 py-3 text-[14.5px] text-fg outline-none placeholder:text-muted/60 focus:border-primary"
            />
            <label className="font-mono text-xs tracking-wider text-muted uppercase">
              What do you need?
            </label>
            <textarea
              name="Message"
              rows={4}
              placeholder="e.g. APFC panel for a 500 KVA load, current PF around 0.75"
              className="rounded-lg border border-white/10 bg-surface px-3.5 py-3 text-[14.5px] text-fg outline-none placeholder:text-muted/60 focus:border-primary"
            />
            <label className="mt-1 flex items-start gap-2.5 text-[13px] text-muted">
              <input type="checkbox" required className="mt-1 size-4 shrink-0 accent-primary" />
              <span>
                I agree to the website opening my email client to send this enquiry. We do not store
                your data anywhere.
              </span>
            </label>
            <button
              type="submit"
              className="btn-press mt-1 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-[15px] font-bold text-primary-ink shadow-[0_6px_0_0_#b5580a]"
            >
              {sent ? "Opening email…" : "Send enquiry"}
            </button>
          </form>
        </div>
      </Wrap>
    </section>
  );
}

export function SeoContent() {
  return (
    <section id="about-apfc" className="relative py-20 sm:py-24" aria-label="About APFC panels">
      <Wrap>
        <div className="reveal mb-8 max-w-[640px]">
          <Eyebrow>Nashik's power factor experts</Eyebrow>
          <h2 className="text-[clamp(28px,4vw,42px)]">
            Thyristorised APFC Panel Manufacturer in Nashik — Punit Powercare
          </h2>
        </div>
        <div className="reveal max-w-[860px] space-y-4 text-[15.5px] leading-relaxed text-muted">
          <p>
            Every industrial and commercial facility that runs motors, transformers, air-conditioning
            systems, furnaces, or variable-speed drives generates reactive power — power that
            circulates through your electrical network without doing any useful work. When{" "}
            <strong className="text-fg">power factor</strong> falls below 0.90, state utilities like
            MSEDCL impose penalties and surcharges on your electricity bill. Improving power factor
            is therefore not just good engineering — it is directly profitable.
          </p>
          <h3 className="pt-4 font-sans text-[19px] font-bold text-fg normal-case">
            What is an APFC Panel?
          </h3>
          <p>
            An <strong className="text-fg">Automatic Power Factor Correction (APFC) panel</strong>{" "}
            monitors your facility's power factor in real time and automatically switches capacitor
            banks in and out in precise steps to keep your power factor as close to unity (1.0) as
            possible — without the over-compensation of a fixed capacitor bank.
          </p>
          <h3 className="pt-4 font-sans text-[19px] font-bold text-fg normal-case">
            What Makes Punit Powercare's Thyristorised APFC Panels Different?
          </h3>
          <p>
            Punit Powercare is one of the pioneers in developing and manufacturing{" "}
            <strong className="text-fg">Thyristorised APFC panels</strong> in the Nashik region.
            Solid-state SCR thyristors fire at the precise zero-crossing point of the AC waveform:
            zero inrush current, no surge, no chattering, no sparking, and no moving parts.
          </p>
          <h3 className="pt-4 font-sans text-[19px] font-bold text-fg normal-case">
            24×7 Service Backup — Nashik & Maharashtra
          </h3>
          <p>
            We operate a <strong className="text-fg">24×7, seven-days-a-week service backup</strong>{" "}
            from our base in Nashik. A panel that isn't supported is not a solution; Punit Powercare
            ensures yours always is.
          </p>
        </div>
      </Wrap>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  return (
    <section id="faq" className="relative py-20 sm:py-24">
      <Wrap>
        <div className="reveal mb-11 max-w-[640px]">
          <Eyebrow>Common questions</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,44px)]">Frequently Asked Questions</h2>
          <p className="mt-3.5 text-muted">
            Everything you need to know about APFC panels, power factor correction, and Punit
            Powercare's products and services.
          </p>
        </div>
        <div className="reveal overflow-hidden rounded-[14px] shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
          {FAQS.map((f, i) => {
            const expanded = open === i;
            return (
              <div key={f.q} className="border-b border-white/10 last:border-b-0">
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[15.5px] font-semibold",
                    expanded ? "bg-primary/10 text-amber-ink" : "bg-surface/60 text-fg",
                  )}
                  aria-expanded={expanded}
                  aria-controls={`${base}-${i}`}
                  onClick={() => setOpen(expanded ? null : i)}
                >
                  {f.q}
                  <span className="shrink-0 text-2xl font-normal text-primary leading-none">
                    {expanded ? "–" : "+"}
                  </span>
                </button>
                {expanded && (
                  <div id={`${base}-${i}`} className="bg-primary/10 px-6 pb-5 text-[15px] leading-relaxed text-muted">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Wrap>
    </section>
  );
}

export function Legal() {
  return (
    <>
      <section id="privacy" className="relative py-16">
        <Wrap>
          <div className="reveal mb-6">
            <Eyebrow>Legal</Eyebrow>
            <h2 className="text-[clamp(28px,4vw,40px)]">Privacy Policy</h2>
          </div>
          <div className="reveal max-w-[800px] space-y-4 text-[15px] leading-relaxed text-muted">
            <h4 className="font-sans text-lg font-semibold text-fg normal-case">1. Information We Collect</h4>
            <p>
              We only collect information you voluntarily provide when you contact us for inquiries,
              such as your name, company, phone number, and email address. We do not use cookies or
              tracking technologies to collect personal data automatically.
            </p>
            <h4 className="font-sans text-lg font-semibold text-fg normal-case">2. How We Use Your Information</h4>
            <p>
              The information you provide is used strictly to respond to your inquiries, provide
              quotes, and facilitate business communications. We do not sell, rent, or share your
              personal information with third parties.
            </p>
            <h4 className="font-sans text-lg font-semibold text-fg normal-case">3. Data Storage and Security</h4>
            <p>
              When you submit an inquiry through our website, it is sent directly via your email
              client. We do not store your data in any website database.
            </p>
            <h4 className="font-sans text-lg font-semibold text-fg normal-case">4. Contact Us</h4>
            <p>
              Questions about our privacy practices: {SITE.email}.
            </p>
          </div>
        </Wrap>
      </section>
      <section id="terms" className="relative pb-20">
        <Wrap>
          <div className="reveal mb-6">
            <Eyebrow>Legal</Eyebrow>
            <h2 className="text-[clamp(28px,4vw,40px)]">Terms and Conditions</h2>
          </div>
          <div className="reveal max-w-[800px] space-y-4 text-[15px] leading-relaxed text-muted">
            <h4 className="font-sans text-lg font-semibold text-fg normal-case">1. Acceptance of Terms</h4>
            <p>
              By accessing and using this website, you accept and agree to be bound by these terms.
            </p>
            <h4 className="font-sans text-lg font-semibold text-fg normal-case">2. Intellectual Property</h4>
            <p>
              The site and its original content are owned by Punit Powercare and protected by
              applicable intellectual property laws.
            </p>
            <h4 className="font-sans text-lg font-semibold text-fg normal-case">3. Products and Services</h4>
            <p>
              We reserve the right to modify or discontinue any product or service without notice.
              Prices are subject to change without notice.
            </p>
            <h4 className="font-sans text-lg font-semibold text-fg normal-case">4. Contact Information</h4>
            <p>Questions about the Terms of Service: {SITE.email}.</p>
          </div>
        </Wrap>
      </section>
    </>
  );
}
