import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";
import { AppShell } from "@/routes/__root";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <AppShell>
      <div className="flex flex-1 flex-col items-center justify-center py-32 px-5 text-center">
        <span className="text-red-500 mb-6 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" aria-hidden="true">
          <TriangleAlert className="size-16 mx-auto" strokeWidth={1.5} />
        </span>
        <h1 className="text-4xl font-bold uppercase tracking-widest text-primary mb-4 font-mono">
          500 Error
        </h1>
        <p className="text-xl font-semibold mb-3">Something went wrong</p>
        <p className="text-muted mb-10 max-w-md mx-auto text-[14px] break-words">
          {error.message || "An unexpected error occurred. Please try reloading the page."}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="btn-press inline-flex rounded-lg bg-primary px-8 py-3.5 font-bold text-primary-ink shadow-[0_5px_0_0_#b5580a]"
        >
          Reload Page
        </button>
      </div>
    </AppShell>
  );
}
