import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ministry/page-hero";
import { Kicker, Section, SectionTitle } from "@/components/ministry/section";
import { Button } from "@/components/ui/button";
import { pop, popCoreBeliefs } from "@/content/pop";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/believe")({ component: BelievePage });

function BelievePage() {
  return (
    <>
      <PageHero
        compact
        image={asset("/images/pop-cross.jpg")}
        kicker="What we believe"
        title="What comes into our minds when we think about God is the most important thing about us."
        body="A.W. Tozer. The core beliefs of Prince of Peace are rooted in Scripture — and in the Lutheran confession of Word and sacrament."
      />
      <Section>
        <Kicker>Lutheran & ELCA</Kicker>
        <SectionTitle>Grace, a font, and a table every Sunday.</SectionTitle>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {pop.beliefs.map((b) => (
            <div key={b.title} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-2xl font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <Kicker>Our core beliefs</Kicker>
        <SectionTitle>From the Bible, in the church’s old words.</SectionTitle>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          The core beliefs of Prince of Peace Lutheran Church are based on the foundational truths
          taught in the Bible. Our teaching and ministry flow out of these doctrines.
        </p>
        <div className="mt-8 grid gap-4">
          {popCoreBeliefs.map((b) => (
            <article key={b.title} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-2xl font-semibold">{b.title}</h3>
              <p className="mt-2 text-muted">{b.body}</p>
            </article>
          ))}
        </div>
        <Button asChild className="mt-8">
          <Link to="/contact">Want to learn more? Write us</Link>
        </Button>
      </Section>
    </>
  );
}
