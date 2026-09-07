import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ministry/contact-form";
import { PageHero } from "@/components/ministry/page-hero";
import { Section } from "@/components/ministry/section";
import { pop } from "@/content/pop";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/prayer")({ component: PrayerPage });

function PrayerPage() {
  return (
    <>
      <PageHero
        compact
        image={asset("/images/pop-cross.jpg")}
        kicker="Prayer request"
        title="We would be honored to pray with you."
        body="The prayer team holds requests for the congregation and the community. Names are not published on this website."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <ContactForm siteId="pop" mode="prayer" />
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h2 className="font-display text-2xl font-semibold">Other ways to ask</h2>
            <p className="mt-3 text-sm text-muted">
              Call the office when you become hospitalized, are sick or shut-in, have a spiritual
              question, or need prayer. {pop.phone}. Or write {pop.email}.
            </p>
            <p className="mt-4 text-sm text-muted">
              The visitation care team visits and offers communion to members who cannot attend.
              Tell the office if you or someone you love would benefit from a visit.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
