import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ministry/page-hero";
import { Section } from "@/components/ministry/section";
import { pop } from "@/content/pop";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/events")({ component: EventsPage });

function EventsPage() {
  return (
    <>
      <PageHero
        compact
        image="/images/pop-group2.jpg"
        kicker="Events calendar"
        title="The weeks ahead."
        body="Sunday school, worship, Back-to-Church Sunday, choir, bells, confirmation, and the monthly mission. Call the office if you need a ride."
      />
      <Section>
        <ol className="grid gap-4">
          {pop.events.map((ev) => (
            <li
              key={ev.id}
              className="grid gap-2 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:grid-cols-[8rem_1fr]"
            >
              <p className="text-sm font-medium text-accent">{formatDate(ev.date)}</p>
              <div>
                <h2 className="font-display text-2xl font-semibold">{ev.title}</h2>
                <p className="text-sm text-muted">
                  {ev.time} · {ev.place}
                </p>
                <p className="mt-2 text-sm text-muted">{ev.summary}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-muted">
          Recurring in the building: Men’s property group Mondays 9:00 AM. AA Mondays 12:00–1:30 PM
          and Saturdays 9:00–11:30 AM.
        </p>
      </Section>
    </>
  );
}
