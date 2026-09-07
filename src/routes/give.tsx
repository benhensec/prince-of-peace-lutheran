import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactForm } from "@/components/ministry/contact-form";
import { PageHero } from "@/components/ministry/page-hero";
import { Section } from "@/components/ministry/section";
import { Button } from "@/components/ui/button";
import { pop } from "@/content/pop";

export const Route = createFileRoute("/give")({ component: PopGive });

function PopGive() {
  return (
    <>
      <PageHero
        compact
        image="/images/pop-communion.jpg"
        kicker="Give"
        title="For where your treasure is, there your heart will be also."
        body={pop.givingNote}
      />
      <Section>
        <p className="max-w-2xl text-muted">
          God is generous and so he calls us to be. What we do with what God has given us shows the
          world where our hearts are, and helps proclaim the gospel.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h2 className="font-display text-2xl font-semibold">In worship</h2>
            <p className="mt-3 text-sm text-muted">
              Place gifts in the plate on Sunday at 10:00 AM, drop them in the church mail slot, or
              bring canned goods to the narthex for the monthly mission.
            </p>
          </div>
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h2 className="font-display text-2xl font-semibold">By mail</h2>
            <p className="mt-3 text-sm text-muted">
              Prince of Peace Lutheran Church
              <br />
              2600 Atlantic Avenue
              <br />
              Fernandina Beach, FL 32034
            </p>
          </div>
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h2 className="font-display text-2xl font-semibold">Online & recurring</h2>
            <p className="mt-3 text-sm text-muted">
              One-time and automatic gifts can be set up through the church office. Call {pop.phone}{" "}
              or write {pop.email} and we will send the current giving link.
            </p>
            <Button asChild className="mt-5">
              <Link to="/contact">Ask the office</Link>
            </Button>
          </div>
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h2 className="font-display text-2xl font-semibold">IRA charitable distributions</h2>
            <p className="mt-3 text-sm text-muted">
              If you are 70½ or older, you may fulfill a pledge as a Qualified Charitable
              Distribution from a Traditional IRA. Ask the plan administrator to send the gift
              directly to Prince of Peace. That portion of an RMD is typically not reported as
              taxable income — confirm with your advisor.
            </p>
          </div>
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h2 className="font-display text-2xl font-semibold">Mortgage fund</h2>
            <p className="mt-3 text-sm text-muted">
              Mark a check “MORTGAGE FUND” and it is applied to principal. Additional gifts of
              $1,250 have already been applied in 2026.
            </p>
          </div>
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h2 className="font-display text-2xl font-semibold">Lightkeepers & endowment</h2>
            <p className="mt-3 text-sm text-muted">
              Youth gifts send Lightkeepers toward the 2027 ELCA Youth Gathering. The endowment has
              begun its first grants — America’s Youth and Micah’s Place.
            </p>
          </div>
        </div>
        <div className="mt-10 max-w-xl">
          <ContactForm siteId="pop" mode="contact" />
        </div>
      </Section>
    </>
  );
}
