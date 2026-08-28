import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootDocument,
  notFoundComponent: () => {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg text-fg">
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase tracking-widest text-primary">404</h1>
          <p className="mt-4 text-xl">Page not found</p>
          <a href="/" className="mt-8 inline-block border border-primary px-6 py-2 text-primary hover:bg-primary/10 transition-colors">
            Return Home
          </a>
        </div>
      </div>
    );
  },
});

function RootDocument() {
  return (
    <>
      <Outlet />
    </>
  );
}
