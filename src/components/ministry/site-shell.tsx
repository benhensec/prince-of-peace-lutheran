import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  Calendar,
  Church,
  HeartHandshake,
  Home,
  Mail,
  Menu,
  Mic,
  Newspaper,
  Play,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { DamagedMark, PeaceMark } from "@/components/ministry/marks";
import type { NavItem } from "@/content/types";
import { contentFromPath, isActivePath } from "@/lib/site";
import { cn } from "@/lib/utils";

const ICONS: Record<NavItem["icon"], typeof Home> = {
  home: Home,
  watch: Play,
  listen: Mic,
  books: BookOpen,
  about: HeartHandshake,
  worship: Church,
  ministries: Users,
  events: Calendar,
  give: HeartHandshake,
  contact: Mail,
  visit: Church,
  pray: HeartHandshake,
  news: Newspaper,
};

function NavLink({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to as never} className={className}>
      {children}
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const site = contentFromPath(pathname);
  const [open, setOpen] = useState(false);
  const Mark = site.id === "pop" ? PeaceMark : DamagedMark;
  const home = "/";

  useEffect(() => {
    document.documentElement.dataset.site = site.id;
    document.title = site.name;
  }, [site.id, site.name]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <NavLink to={home} className="flex min-h-11 items-center gap-2.5">
            <Mark className="size-8 shrink-0" />
            <span className="leading-tight">
              <span className="block font-display text-base font-semibold tracking-tight">
                {site.shortName}
              </span>
              <span className="hidden text-[11px] uppercase tracking-[0.16em] text-muted sm:block">
                {site.id === "pop" ? "Lutheran Church" : "Christian Ministry"}
              </span>
            </span>
          </NavLink>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {site.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors duration-(--motion-quick)",
                  isActivePath(pathname, item.to) && "bg-surface text-fg",
                  !isActivePath(pathname, item.to) && "hover:bg-surface hover:text-fg",
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link to="/visit">
                {site.id === "pop" ? "Plan a visit" : "Request a seat"}
              </Link>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {open ? (
          <div className="border-t border-border bg-bg px-4 py-3 lg:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col gap-1" aria-label="Mobile">
              {[...site.nav, ...site.moreNav.filter((i) => !site.nav.some((n) => n.to === i.to))].map(
                (item) => (
                  <NavLink
                    key={`${item.to}-${item.label}`}
                    to={item.to}
                    className={cn(
                      "flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-muted",
                      isActivePath(pathname, item.to) && "bg-surface text-fg",
                    )}
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </nav>
          </div>
        ) : null}
      </header>

      <main id="main" className="flex-1 pb-24 lg:pb-0">
        {children}
      </main>

      <footer className="border-t border-border bg-surface pb-24 lg:pb-0">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Mark className="size-7" />
              <p className="font-display text-lg font-semibold">{site.name}</p>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted">{site.tagline}</p>
            <p className="mt-4 text-sm text-muted">
              {site.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              {site.phone ? <span className="mt-2 block">{site.phone}</span> : null}
              <span className="block">{site.email}</span>
              {site.officeHours ? <span className="mt-2 block">{site.officeHours}</span> : null}
            </p>
            {site.id === "pop" ? (
              <a
                href="https://elca.org"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-3"
              >
                <img
                  src="/images/elca-logo.png"
                  alt="Evangelical Lutheran Church in America"
                  className="size-12 rounded-md object-cover"
                  crossOrigin="anonymous"
                />
                <span className="text-xs text-muted">
                  A congregation of the ELCA
                  <br />
                  Florida-Bahamas Synod
                </span>
              </a>
            ) : null}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Explore</p>
            <ul className="mt-3 space-y-2">
              {site.nav.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className="text-sm hover:text-accent">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            {site.facebook ? (
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-sm hover:text-accent"
              >
                Facebook
              </a>
            ) : null}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Sister work</p>
            <p className="mt-3 font-display text-xl font-semibold">{site.sister.label}</p>
            <p className="mt-2 text-sm text-muted">{site.sister.hint}</p>
            {site.sister.to.startsWith("http") ? (
              <Button asChild variant="outline" className="mt-4">
                <a href={site.sister.to} target="_blank" rel="noreferrer">
                  Visit {site.sister.label}
                </a>
              </Button>
            ) : site.sister.to ? (
              <Button asChild variant="outline" className="mt-4">
                <Link to={site.sister.to as never}>Visit {site.sister.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
        <div className="border-t border-border px-4 py-4 text-center text-xs text-muted">
          © {new Date().getFullYear()} {site.legalName}. {site.location}.
          {site.id === "pop" ? " Come… be a part of peace." : null}
        </div>
      </footer>

      <nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
        aria-label="App"
      >
        <ul className="mx-auto grid max-w-lg grid-cols-5">
          {site.mobileNav.map((item) => {
            const Icon = ICONS[item.icon];
            const active = isActivePath(pathname, item.to);
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={cn(
                    "flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] font-medium",
                    active ? "text-accent" : "text-muted",
                  )}
                >
                  <Icon className="size-5" />
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
