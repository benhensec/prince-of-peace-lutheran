import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ministry/page-hero";
import { Kicker, Section, SectionTitle } from "@/components/ministry/section";
import { popLinks, popNewsletters } from "@/content/pop";

export const Route = createFileRoute("/news")({ component: NewsPage });

function NewsPage() {
  return (
    <>
      <PageHero
        compact
        image="/images/pop-banner-live.jpg"
        kicker="News"
        title="The monthly paper, and the week’s happenings."
        body="Newsletters, the weekly sheet, and links our parish actually uses. This replaces the empty calendar widget and the ‘Coming Soon’ boxes on the old site."
      />
      <Section>
        <Kicker>Monthly newsletters</Kicker>
        <SectionTitle>Prince of Peace News</SectionTitle>
        <ul className="mt-6 grid gap-3">
          {popNewsletters.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="block rounded-xl bg-surface px-5 py-4 shadow-[var(--shadow-border)] hover:text-accent"
              >
                <span className="font-display text-xl font-semibold">{n.title}</span>
                <span className="mt-1 block text-sm text-muted">{n.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
      <Section className="pt-0">
        <Kicker>Links of interest</Kicker>
        <SectionTitle>Partners in the county and the church.</SectionTitle>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {popLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] hover:text-accent"
            >
              <h3 className="font-display text-xl font-semibold">{l.name}</h3>
              <p className="mt-2 text-sm text-muted">{l.note}</p>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
