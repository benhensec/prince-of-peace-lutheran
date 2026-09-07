import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ministry/contact-form";
import { PageHero } from "@/components/ministry/page-hero";
import { Section } from "@/components/ministry/section";

export const Route = createFileRoute("/baptism")({ component: BaptismPage });

function BaptismPage() {
  return (
    <>
      <PageHero
        compact
        image="/images/pop-communion.jpg"
        kicker="Baptism"
        title="Washed and named."
        body="The Bible says that all professing Christians should be baptized (Matthew 28:18–20). As Lutherans we also baptize infants — God meets us before we can answer back."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-muted">
            <p>
              Whether you have followed Jesus a long time and never were baptized, are a new
              Christian, or want your child brought to the font, we would be honored. Pastor Ben
              will sit down with you, walk through what baptism means among us, and set a Sunday.
            </p>
            <p>
              Baptism is not a hoop. It is God’s promise, water, and the name of the Father and of
              the Son and of the Holy Spirit. The congregation promises to help raise the baptized
              in the faith.
            </p>
            <p>Fill in the form. The office will write back.</p>
          </div>
          <ContactForm siteId="pop" mode="baptism" />
        </div>
      </Section>
    </>
  );
}
