import { createRouter, Link } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

function NotFoundPage() {
  return (
    <main className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold">This page is not here.</h1>
      <p className="mt-3 text-muted">It may have moved, or it never existed. The table is still set.</p>
      <Link
        to="/"
        className="mt-8 inline-flex h-11 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
      >
        Back home
      </Link>
    </main>
  );
}

export function getRouter() {
  const rawBase = import.meta.env.BASE_URL || "/";
  const basepath = rawBase === "/" ? undefined : rawBase.replace(/\/$/, "");
  return createRouter({
    routeTree,
    basepath,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFoundPage,
  });
}
