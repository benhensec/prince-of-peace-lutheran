import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ministry/page-hero";
import { Kicker, Section, SectionTitle } from "@/components/ministry/section";
import { Button } from "@/components/ui/button";
import { pop, popCouncil } from "@/content/pop";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/about")({ component: PopAbout });

function PopAbout() {
  return (
    <>
      <PageHero
        compact
        image={asset("/images/pop-coast.jpg")}
        kicker="About"
        title="Come… be a part of peace."
        body={pop.mission}
      />
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed">
            {pop.about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <Kicker>Vision</Kicker>
            <p className="mt-3 font-display text-2xl font-semibold">{pop.vision}</p>
            <p className="mt-6 text-sm text-muted">
              Evangelical Lutheran Church in America · Florida-Bahamas Synod
            </p>
            <Button asChild className="mt-6">
              <Link to="/believe">Core beliefs</Link>
            </Button>
          </div>
        </div>
      </Section>
      <Section className="pt-0">
        <Kicker>People</Kicker>
        <SectionTitle>Staff & leadership</SectionTitle>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {pop.people.map((p) => (
            <article key={p.name} className="grid gap-4 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:grid-cols-[7rem_1fr]">
              {p.photo ? (
                <img
                  src={p.photo}
                  alt=""
                  className="aspect-[3/4] w-full rounded-lg object-cover"
                  crossOrigin="anonymous"
                />
              ) : (
                <div className="flex aspect-[3/4] items-center justify-center rounded-lg bg-bg font-display text-3xl text-accent">
                  {p.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-accent">{p.role}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-sm text-muted">{p.bio}</p>
                {p.email ? (
                  <p className="mt-3 text-sm">
                    <a className="hover:text-accent" href={`mailto:${p.email}`}>
                      {p.email}
                    </a>
                    {p.phone ? <span className="block text-muted">{p.phone}</span> : null}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <Kicker>2026 Church council</Kicker>
        <SectionTitle>Elected to tend the parish.</SectionTitle>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {popCouncil.map((name) => (
            <li key={name} className="rounded-lg bg-surface px-4 py-3 text-sm shadow-[var(--shadow-border)]">
              {name}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
