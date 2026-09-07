import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ministry/page-hero";
import { Kicker, Section, SectionTitle } from "@/components/ministry/section";
import { Button } from "@/components/ui/button";
import { pop, popMissionNow, popPhotos } from "@/content/pop";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: PopHome });

function PopHome() {
  return (
    <>
      <PageHero
        image={pop.heroImage}
        kicker={pop.heroKicker}
        title={pop.heroTitle}
        body={pop.heroBody}
        actions={
          <>
            <Button asChild>
              <Link to="/visit">Plan a visit</Link>
            </Button>
            <Button asChild variant="secondary">
              <a href={pop.facebook} target="_blank" rel="noreferrer">
                Livestream
              </a>
            </Button>
          </>
        }
      />

      <Section>
        <Kicker>This Sunday</Kicker>
        <SectionTitle>Worship, breakfast, and a table set.</SectionTitle>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pop.services.map((s) => (
            <div key={s.title} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <p className="text-xs uppercase tracking-[0.16em] text-accent">
                {s.day} · {s.time}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">{s.title}</h3>
              {s.note ? <p className="mt-2 text-sm text-muted">{s.note}</p> : null}
            </div>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden">
        <img
          src="/images/pop-mission.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover"
          crossOrigin="anonymous"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--site-bg), color-mix(in oklab, var(--site-bg) 28%, transparent))",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-20 text-fg md:grid-cols-2">
          <div>
            <Kicker>{popMissionNow.kicker}</Kicker>
            <h2 className="mt-3 font-display text-4xl font-semibold">{popMissionNow.title}</h2>
            <p className="mt-4 text-muted">{popMissionNow.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/events">Back-to-Church Sunday</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/give">Give</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <p className="font-display text-2xl font-semibold">New here?</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {pop.visitorNotes.slice(0, 5).map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/visit">Directions & what to expect</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Kicker>Our mission</Kicker>
            <SectionTitle>{pop.mission}</SectionTitle>
            <p className="mt-4 text-muted">{pop.vision}</p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/believe">What we believe</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {popPhotos.slice(0, 4).map((p) => (
              <img
                key={p.src}
                src={p.src}
                alt={p.alt}
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-[var(--shadow-border)]"
                crossOrigin="anonymous"
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="flex items-end justify-between gap-4">
          <div>
            <Kicker>Calendar</Kicker>
            <SectionTitle>Coming days</SectionTitle>
          </div>
          <Button asChild variant="ghost">
            <Link to="/events">Full calendar</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {pop.events.slice(0, 4).map((ev) => (
            <div key={ev.id} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="text-xs text-muted">
                {formatDate(ev.date)} · {ev.time}
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold">{ev.title}</h3>
              <p className="text-sm text-muted">{ev.place}</p>
              <p className="mt-2 text-sm text-muted">{ev.summary}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Kicker>Pastor</Kicker>
            <SectionTitle>{pop.people[0].name}</SectionTitle>
            <p className="mt-4 max-w-3xl text-muted">{pop.people[0].bio}</p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/about">Meet the staff</Link>
            </Button>
          </div>
          {pop.people[0].photo ? (
            <img
              src={pop.people[0].photo}
              alt={pop.people[0].name}
              className="h-64 w-52 rounded-xl object-cover shadow-[var(--shadow-border)]"
              crossOrigin="anonymous"
            />
          ) : null}
        </div>
      </Section>
    </>
  );
}
