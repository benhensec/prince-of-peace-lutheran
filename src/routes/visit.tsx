import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ministry/page-hero";
import { Kicker, Section, SectionTitle } from "@/components/ministry/section";
import { Button } from "@/components/ui/button";
import { pop, popPhotos } from "@/content/pop";

export const Route = createFileRoute("/visit")({ component: VisitPage });

function VisitPage() {
  const mapSrc =
    "https://maps.google.com/maps?q=2600%20Atlantic%20Ave%20Fernandina%20Beach%20FL%2032034&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <>
      <PageHero
        compact
        image="/images/pop-hero-live.png"
        kicker="Visit"
        title="One block from the Atlantic."
        body="2600 Atlantic Avenue, Fernandina Beach. Park on site. Come as you are."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Kicker>What to expect</Kicker>
            <SectionTitle>You already belong enough to walk in.</SectionTitle>
            <ul className="mt-6 space-y-3">
              {pop.visitorNotes.map((n) => (
                <li key={n} className="border-l-2 border-accent pl-4 text-muted">
                  {n}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="font-display text-xl font-semibold">Office</p>
              <p className="mt-2 text-sm text-muted">{pop.officeHours}</p>
              <p className="mt-1 text-sm text-muted">{pop.phone}</p>
              <p className="text-sm text-muted">{pop.email}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {pop.facebook ? (
                  <Button asChild variant="outline">
                    <a href={pop.facebook} target="_blank" rel="noreferrer">
                      Facebook
                    </a>
                  </Button>
                ) : null}
                <Button asChild>
                  <Link to="/contact">Write us</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl shadow-[var(--shadow-border)]">
            <iframe
              title="Map to Prince of Peace Lutheran Church"
              src={mapSrc}
              className="h-[28rem] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {popPhotos.map((p) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-[var(--shadow-border)]"
              crossOrigin="anonymous"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
