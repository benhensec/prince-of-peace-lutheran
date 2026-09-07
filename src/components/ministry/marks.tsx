import { cn } from "@/lib/utils";

export function DamagedMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden="true"
      fill="none"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" className="text-accent" />
      <path
        d="M16 7v18M11 12.5h10"
        stroke="currentColor"
        className="text-accent-fg"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M9.5 22.5c1.8-1.2 3.6.4 5.2-1.1 1.4-1.3 2.6 1.4 4.6.3 1.5-.8 2.8.6 3.7-.4"
        stroke="currentColor"
        className="text-accent-fg"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PeaceMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden="true"
      fill="none"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" className="text-accent" />
      <circle cx="16" cy="16" r="7.5" stroke="currentColor" className="text-accent-fg" strokeWidth="1.6" />
      <path
        d="M16 8.5V16l5 5"
        stroke="currentColor"
        className="text-accent-fg"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
