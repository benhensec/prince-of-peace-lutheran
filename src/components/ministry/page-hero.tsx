import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  body,
  image,
  actions,
  compact,
}: {
  kicker?: string;
  title: string;
  body?: string;
  image?: string;
  actions?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={cn("relative overflow-hidden", compact ? "min-h-[42vh]" : "min-h-[78vh]")}>
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 size-full object-cover object-center"
          crossOrigin="anonymous"
        />
      ) : (
        <div className="absolute inset-0 bg-surface-2" />
      )}
      <div className="absolute inset-0 bg-bg/45" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--site-bg) 35%, transparent) 38%, var(--site-bg) 100%)",
        }}
      />
      <div className="relative mx-auto flex min-h-[inherit] max-w-6xl flex-col justify-end px-4 py-16">
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{kicker}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-fg sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {body ? <p className="mt-5 max-w-2xl text-lg text-fg/85">{body}</p> : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
