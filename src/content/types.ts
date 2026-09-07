export type NavItem = {
  label: string;
  to: string;
  icon:
    | "home"
    | "watch"
    | "listen"
    | "books"
    | "about"
    | "worship"
    | "ministries"
    | "events"
    | "give"
    | "contact"
    | "visit"
    | "pray"
    | "news";
};

export type Person = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  email?: string;
  phone?: string;
};

export type ServiceTime = {
  day: string;
  time: string;
  title: string;
  note?: string;
};

export type Message = {
  slug: string;
  title: string;
  series: string;
  scripture: string;
  date: string;
  duration: string;
  image: string;
  summary: string;
  body: string;
  youtubeId?: string;
};

export type Episode = {
  slug: string;
  number: number;
  title: string;
  date: string;
  duration: string;
  summary: string;
  body: string;
  topics: string[];
};

export type BookChapter = {
  title: string;
  body: string;
};

export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  year: string;
  pages: string;
  cover: string;
  blurb: string;
  chapters: BookChapter[];
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  place: string;
  summary: string;
};

export type MinistryGroup = {
  name: string;
  summary: string;
  when?: string;
};

export type Belief = {
  title: string;
  body: string;
};

export type SiteContent = {
  id: "damaged" | "pop";
  name: string;
  shortName: string;
  legalName: string;
  tagline: string;
  lede: string;
  domain: string;
  location: string;
  addressLines: string[];
  phone?: string;
  email: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  officeHours?: string;
  nav: NavItem[];
  mobileNav: NavItem[];
  moreNav: NavItem[];
  heroImage: string;
  heroKicker: string;
  heroTitle: string;
  heroBody: string;
  services: ServiceTime[];
  people: Person[];
  messages: Message[];
  episodes: Episode[];
  books: Book[];
  events: EventItem[];
  ministries: MinistryGroup[];
  beliefs: Belief[];
  mission: string;
  vision: string;
  about: string[];
  visitorNotes: string[];
  givingNote: string;
  sister: { label: string; to: string; hint: string };
};
