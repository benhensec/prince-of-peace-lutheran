import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ministry/page-hero";
import { Kicker, Section, SectionTitle } from "@/components/ministry/section";
import { Button } from "@/components/ui/button";
import { pop, popBulletins, popLessons, popLivestreams } from "@/content/pop";

export const Route = createFileRoute("/worship")({ component: WorshipPage });

function WorshipPage() {
  return (
    <>
      <PageHero
        compact
        image="/images/pop-worship-live.jpg"
        kicker="Worship"
        title="Word, table, and song."
        body="Share God’s love in person — or via livestream from a computer or phone. Holy Communion every Sunday. You do not need to be Lutheran to come."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {pop.services.map((s) => (
            <div key={s.title} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <p className="text-xs uppercase tracking-[0.16em] text-accent">
                {s.day} · {s.time}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold">{s.title}</h2>
              {s.note ? <p className="mt-2 text-sm text-muted">{s.note}</p> : null}
            </div>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <Kicker>Livestream</Kicker>
        <SectionTitle>Worship from home.</SectionTitle>
        <p className="mt-4 max-w-2xl text-muted">
          Sundays at 10:00 AM we go live on Facebook. You do not need an account to watch live or
          recorded services. If the stream fails, call the office or Pastor Ben.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {pop.facebook ? (
            <Button asChild>
              <a href={pop.facebook} target="_blank" rel="noreferrer">
                Open Facebook Live
              </a>
            </Button>
          ) : null}
          {popLivestreams.map((v) => (
            <Button asChild variant="outline" key={v.href}>
              <a href={v.href} target="_blank" rel="noreferrer">
                {v.title}
              </a>
            </Button>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <Kicker>September lessons</Kicker>
        <SectionTitle>Scripture for Sunday.</SectionTitle>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {popLessons.map((l) => (
            <article key={l.date} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <p className="text-xs uppercase tracking-[0.16em] text-accent">{l.date}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">{l.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {l.readings.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <Kicker>Bulletins</Kicker>
        <SectionTitle>The order of worship.</SectionTitle>
        <ul className="mt-6 grid gap-3">
          {popBulletins.map((b) => (
            <li key={b.href}>
              <a
                href={b.href}
                className="flex min-h-11 items-center justify-between rounded-xl bg-surface px-5 py-4 text-sm shadow-[var(--shadow-border)] hover:text-accent"
              >
                <span>{b.title}</span>
                <span className="text-muted">PDF</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
