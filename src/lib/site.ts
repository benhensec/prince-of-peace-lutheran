import { pop } from "@/content/pop";
import type { SiteContent } from "@/content/types";

export type SiteId = SiteContent["id"];

export function siteFromPath(_pathname: string): SiteId {
  return "pop";
}

export function contentFor(_id: SiteId): SiteContent {
  return pop;
}

export function contentFromPath(_pathname: string): SiteContent {
  return pop;
}

export function isActivePath(current: string, to: string) {
  if (to === "/") return current === "/";
  return current === to || current.startsWith(`${to}/`);
}
