const PRAY_KEY = "dcm-prayer-requests";
const CONTACT_KEY = "dcm-contact-notes";
const SAVED_KEY = "dcm-saved";

export type PrayerRequest = {
  id: string;
  name: string;
  request: string;
  at: string;
  site: string;
};

export type ContactNote = {
  id: string;
  name: string;
  email: string;
  message: string;
  at: string;
  site: string;
};

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function loadPrayers(): PrayerRequest[] {
  return readJson<PrayerRequest[]>(PRAY_KEY, []);
}

export function savePrayer(entry: Omit<PrayerRequest, "id" | "at">) {
  const next: PrayerRequest = {
    ...entry,
    id: crypto.randomUUID(),
    at: new Date().toISOString(),
  };
  const all = [next, ...loadPrayers()].slice(0, 40);
  writeJson(PRAY_KEY, all);
  return next;
}

export function loadContacts(): ContactNote[] {
  return readJson<ContactNote[]>(CONTACT_KEY, []);
}

export function saveContact(entry: Omit<ContactNote, "id" | "at">) {
  const next: ContactNote = {
    ...entry,
    id: crypto.randomUUID(),
    at: new Date().toISOString(),
  };
  const all = [next, ...loadContacts()].slice(0, 40);
  writeJson(CONTACT_KEY, all);
  return next;
}

export function loadSaved(): string[] {
  return readJson<string[]>(SAVED_KEY, []);
}

export function toggleSaved(id: string) {
  const current = new Set(loadSaved());
  if (current.has(id)) current.delete(id);
  else current.add(id);
  const next = [...current];
  writeJson(SAVED_KEY, next);
  return next;
}
