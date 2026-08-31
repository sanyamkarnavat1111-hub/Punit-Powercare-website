import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootDocument,
  notFoundComponent: () => {
    return (
      <div className="flex flex-1 flex-col items-center justify-center py-32 px-5">
        <div className="text-center">
          <h1 className="text-7xl font-bold uppercase tracking-widest text-primary mb-4 font-mono drop-shadow-[0_0_20px_var(--color-primary)]">
            404
          </h1>
          <p className="text-2xl font-semibold mb-3">Page Not Found</p>
          <p className="text-muted mb-10 max-w-sm mx-auto text-[15px]">
            The page you're looking for doesn't exist, has been removed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="btn-press inline-flex rounded-lg bg-primary px-8 py-3.5 font-bold text-primary-ink shadow-[0_5px_0_0_#b5580a]"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  },
});

import { SiteFooter, SiteHeader, ScrollRail } from "@/components/chrome";
import { WorldScrub } from "@/components/world-scrub";
import { useReveal } from "@/components/page-body";

export function AppShell({ children }: { children: React.ReactNode }) {
  useReveal();
  return (
    <div id="top" className="relative min-h-screen bg-transparent text-fg">
      <WorldScrub />
      <div className="grain" />
      <ScrollRail />
      <div className="relative z-10 flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

function RootDocument() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
