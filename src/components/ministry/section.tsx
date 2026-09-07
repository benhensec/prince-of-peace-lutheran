import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-4 py-16", className)}>
      {children}
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{children}</p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{children}</h2>;
}
