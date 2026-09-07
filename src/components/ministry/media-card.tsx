import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export function MediaCard({
  to,
  image,
  kicker,
  title,
  summary,
  date,
  meta,
}: {
  to: string;
  image: string;
  kicker?: string;
  title: string;
  summary: string;
  date?: string;
  meta?: string;
}) {
  return (
    <Link
      to={to as never}
      className="group flex flex-col overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[transform,box-shadow] duration-(--motion-fast) ease-(--ease-out) hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)]"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt=""
          className="size-full object-cover transition-transform duration-(--motion-slow) group-hover:scale-[1.03]"
          crossOrigin="anonymous"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex flex-wrap items-center gap-2">
          {kicker ? <Badge>{kicker}</Badge> : null}
          {date ? <span className="text-xs text-muted">{formatDate(date)}</span> : null}
        </div>
        <h3 className="font-display text-xl font-semibold leading-snug">{title}</h3>
        <p className="text-sm text-muted">{summary}</p>
        {meta ? <p className="mt-auto pt-2 text-xs text-muted">{meta}</p> : null}
      </div>
    </Link>
  );
}

export function BookCard({
  to,
  cover,
  title,
  subtitle,
  author,
}: {
  to: string;
  cover: string;
  title: string;
  subtitle: string;
  author: string;
}) {
  return (
    <Link
      to={to as never}
      className="group flex gap-4 rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]"
    >
      <img
        src={cover}
        alt={`${title} cover`}
        className="h-40 w-28 shrink-0 rounded-md object-cover transition-transform duration-(--motion-fast) group-hover:scale-[1.02]"
        crossOrigin="anonymous"
      />
      <div className="flex flex-col justify-center py-1">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">{author}</p>
        <h3 className="mt-1 font-display text-2xl font-semibold leading-tight">{title}</h3>
        <p className="mt-2 text-sm text-muted">{subtitle}</p>
      </div>
    </Link>
  );
}
