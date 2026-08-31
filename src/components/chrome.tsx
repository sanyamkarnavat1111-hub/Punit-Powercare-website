import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { SITE, WORLD_CLIPS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useWorldProgress } from "@/lib/world-progress";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export function Bolt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 26" fill="none" aria-hidden="true">
      <path d="M12 0L0 15h7l-2 11L20 9h-8l0-9z" fill="currentColor" />
    </svg>
  );
}

export function SceneChip() {
  const { progress, index } = useWorldProgress();
  const clip = WORLD_CLIPS[index] ?? WORLD_CLIPS[0];
  const pf = (0.72 + progress * 0.27).toFixed(2);
  return (
    <div className="hidden items-center gap-3 font-mono text-[11px] tracking-[0.12em] uppercase xl:flex">
      <span className="flex items-center gap-2 text-lcd">
        <span className="inline-block size-1.5 rounded-full bg-lcd shadow-[0_0_8px_var(--color-lcd)]" />
        0{index + 1} · {clip.label}
      </span>
      <span className="text-muted">PF</span>
      <span className="tabular-nums text-lcd">{pf}</span>
    </div>
  );
}

export function ScrollRail() {
  const { progress, index } = useWorldProgress();
  return (
    <div
      className="pointer-events-none fixed top-1/2 right-3 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 xl:flex"
      aria-hidden="true"
    >
      {WORLD_CLIPS.map((c, i) => (
        <span
          key={c.id}
          className="block w-px rounded-full transition-all duration-300"
          style={{
            height: i === index ? 22 : 10,
            background: i === index ? "var(--color-primary)" : "rgba(255,255,255,0.28)",
          }}
        />
      ))}
      <span className="mt-1 block h-16 w-px overflow-hidden rounded-full bg-white/10">
        <span className="block w-full bg-lcd" style={{ height: `${Math.round(progress * 100)}%` }} />
      </span>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background,border-color] duration-200",
        scrolled || open
          ? "border-white/10 bg-bg/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-3.5 sm:px-7">
        <a href="#top" className="flex flex-col items-start gap-1 mt-1">
          <img src="/Punit-PowerCare-Brand-Name.svg" alt="Punit Powercare" className="h-8 sm:h-10 w-auto" />
          <span className="font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.12em] sm:tracking-[0.14em] text-muted normal-case leading-none">
            Switch to Success with Punit Powercare
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-[14.5px] font-semibold md:flex">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className="text-muted transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SceneChip />
          <a
            href="#contact"
            className="btn-press inline-flex rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-ink shadow-[0_5px_0_0_#b5580a]"
          >
            Get a Quote
          </a>
          <button
            type="button"
            className="relative size-11 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="mx-auto size-6" /> : <Menu className="mx-auto size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-bg/95 px-6 py-5 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-2 py-3 text-base font-semibold text-fg"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-press mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 font-bold text-primary-ink"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-bg/90">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3 px-5 py-8 text-[13px] text-muted sm:px-7">
        <div>
          © {new Date().getFullYear()} {SITE.name}. {SITE.tagline}.{" "}
          <a href="#privacy" className="text-fg/70 hover:text-fg">
            Privacy
          </a>{" "}
          ·{" "}
          <a href="#terms" className="text-fg/70 hover:text-fg">
            Terms
          </a>
          <div className="mt-4 flex items-center gap-3 opacity-90">
            <img src="/Cropped-ISO.svg" alt="ISO Certification" className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-contain" />
            <span className="text-[13px] font-medium text-fg uppercase">AN 9001-2015 ISO CERTIFIED COMPANY</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-3">
          <a href={`tel:${SITE.phone}`} className="hover:text-fg">
            {SITE.phoneDisplay}
          </a>
          <span>·</span>
          <a href={`mailto:${SITE.email}`} className="hover:text-fg">
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

export function Eyebrow({ children, lcd }: { children: ReactNode; lcd?: boolean }) {
  return (
    <div
      className={cn(
        "mb-3.5 flex items-center gap-2.5 font-mono text-[12.5px] font-semibold tracking-[0.14em] uppercase",
        lcd ? "text-lcd" : "text-amber-ink",
      )}
    >
      <span className={cn("inline-block h-0.5 w-5", lcd ? "bg-lcd" : "bg-primary")} />
      {children}
    </div>
  );
}
