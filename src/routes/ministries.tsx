import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ministry/page-hero";
import { Kicker, Section, SectionTitle } from "@/components/ministry/section";
import { Button } from "@/components/ui/button";
import { pop, popCommittees } from "@/content/pop";

export const Route = createFileRoute("/ministries")({ component: MinistriesPage });

function MinistriesPage() {
  return (
    <>
      <PageHero
        compact
        image="/images/pop-group1.jpg"
        kicker="Ministries"
        title="Hands, voices, and a narthex full of cans."
        body="Join a ministry. Share skills with Pastor Ben, a council liaison, or the office."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {pop.ministries.map((m) => (
            <article key={m.name} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <h2 className="font-display text-2xl font-semibold">{m.name}</h2>
              {m.when ? <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent">{m.when}</p> : null}
              <p className="mt-3 text-sm text-muted">{m.summary}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <Kicker>Committees</Kicker>
        <SectionTitle>Where the work is organized.</SectionTitle>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Committees meet as needed. Next all-committee gathering: Sunday, October 4, after worship.
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {popCommittees.map((c) => (
            <div key={c.name} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-xl font-semibold">{c.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent">{c.liaison}</p>
              <p className="mt-2 text-sm text-muted">{c.summary}</p>
            </div>
          ))}
        </div>
        <Button asChild className="mt-8">
          <Link to="/contact">Talk to Pastor Ben about serving</Link>
        </Button>
      </Section>
    </>
  );
}
