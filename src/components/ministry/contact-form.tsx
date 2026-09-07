import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { saveContact, savePrayer } from "@/lib/storage";

export function ContactForm({
  siteId,
  mode = "contact",
}: {
  siteId: string;
  mode?: "contact" | "prayer" | "seat" | "baptism";
}) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const copy =
    mode === "prayer"
      ? {
          title: "Leave a prayer",
          body: "The prayer team holds every request. Names are not published on this site.",
          submit: "Send prayer",
          done: "Received. We are praying with you.",
          placeholder: "What do you want held before God?",
        }
      : mode === "seat"
        ? {
            title: "Request a seat at the table",
            body: "Twelve chairs. We will write back with the next open evening in Nassau County.",
            submit: "Request a seat",
            done: "You are on the list. Watch your inbox — and if we cannot reach you, we still have your name.",
            placeholder: "Anything we should know — accessibility, a friend coming, a quiet need.",
          }
        : mode === "baptism"
          ? {
              title: "Ask about baptism",
              body: "Infants, children, and adults. Pastor Ben will write back to set a time to talk.",
              submit: "Request baptism",
              done: "Thank you. The office will be in touch about next steps.",
              placeholder: "Who is to be baptized, and anything we should know.",
            }
          : {
              title: "Write to us",
              body: "Questions, pastoral care, a first visit, or a note for the office. We read every message.",
              submit: "Send message",
              done: "Thank you. We have your note and will be in touch.",
              placeholder: "How can we help?",
            };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (mode === "prayer") {
      savePrayer({ name: name || "Anonymous", request: message, site: siteId });
    } else {
      saveContact({ name, email, message: `${mode}: ${message}`, site: siteId });
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
        <p className="font-display text-2xl font-semibold">{copy.done}</p>
        <p className="mt-2 text-sm text-muted">You can close this page. Christ has the rest.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
      <h2 className="font-display text-2xl font-semibold">{copy.title}</h2>
      <p className="mt-2 text-sm text-muted">{copy.body}</p>
      <div className="mt-5 grid gap-4">
        <label className="grid gap-1.5 text-sm font-medium">
          Name
          <Input value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
        </label>
        {mode !== "prayer" ? (
          <label className="grid gap-1.5 text-sm font-medium">
            Email
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </label>
        ) : null}
        <label className="grid gap-1.5 text-sm font-medium">
          {mode === "prayer" ? "Request" : "Message"}
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder={copy.placeholder}
          />
        </label>
        <Button type="submit">{copy.submit}</Button>
      </div>
    </form>
  );
}
