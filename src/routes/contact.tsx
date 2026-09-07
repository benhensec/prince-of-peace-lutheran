import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ministry/contact-form";
import { PageHero } from "@/components/ministry/page-hero";
import { Section } from "@/components/ministry/section";
import { pop } from "@/content/pop";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/contact")({ component: PopContact });

function PopContact() {
  const mapSrc =
    "https://maps.google.com/maps?q=2600%20Atlantic%20Ave%20Fernandina%20Beach%20FL%2032034&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <>
      <PageHero
        compact
        image={asset("/images/pop-coffee.jpg")}
        kicker="Contact"
        title="Call the office. Write the pastor. Plan a visit."
        body={`${pop.phone} · ${pop.email} · ${pop.officeHours}`}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <ContactForm siteId="pop" mode="contact" />
          <div className="space-y-4">
            {pop.people.map((p) => (
              <div key={p.name} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
                <p className="text-xs uppercase tracking-[0.16em] text-accent">{p.role}</p>
                <h2 className="mt-1 font-display text-xl font-semibold">{p.name}</h2>
                {p.email ? (
                  <a className="mt-2 block text-sm hover:text-accent" href={`mailto:${p.email}`}>
                    {p.email}
                  </a>
                ) : null}
                {p.phone ? <p className="text-sm text-muted">{p.phone}</p> : null}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl shadow-[var(--shadow-border)]">
          <iframe
            title="Map to Prince of Peace Lutheran Church"
            src={mapSrc}
            className="h-80 w-full border-0"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
}
