import type { Belief, SiteContent } from "./types";

export const pop: SiteContent = {
  id: "pop",
  name: "Prince of Peace Lutheran Church",
  shortName: "Prince of Peace",
  legalName: "Prince of Peace Lutheran Church",
  tagline: "Where Jesus is praised and the Gospel proclaimed.",
  lede: "A welcoming ELCA congregation on Amelia Island, serving Fernandina Beach and all of Nassau County since 1964.",
  domain: "princeofpeacelutheran.com",
  location: "Fernandina Beach, Florida",
  addressLines: ["2600 Atlantic Avenue", "Fernandina Beach, FL 32034"],
  phone: "(904) 261-6306",
  email: "princeofpeace@poplcweb.com",
  facebook: "https://www.facebook.com/POPLC2/",
  officeHours: "Monday–Friday, 9:00 AM – 4:00 PM",
  nav: [
    { label: "Home", to: "/", icon: "home" },
    { label: "Worship", to: "/worship", icon: "worship" },
    { label: "About", to: "/about", icon: "about" },
    { label: "Ministries", to: "/ministries", icon: "ministries" },
    { label: "Events", to: "/events", icon: "events" },
    { label: "News", to: "/news", icon: "news" },
    { label: "Give", to: "/give", icon: "give" },
  ],
  mobileNav: [
    { label: "Home", to: "/", icon: "home" },
    { label: "Worship", to: "/worship", icon: "worship" },
    { label: "Events", to: "/events", icon: "events" },
    { label: "News", to: "/news", icon: "news" },
    { label: "More", to: "/about", icon: "about" },
  ],
  moreNav: [
    { label: "About & staff", to: "/about", icon: "about" },
    { label: "What we believe", to: "/believe", icon: "about" },
    { label: "Visit", to: "/visit", icon: "visit" },
    { label: "Prayer request", to: "/prayer", icon: "pray" },
    { label: "Baptism", to: "/baptism", icon: "worship" },
    { label: "Contact", to: "/contact", icon: "contact" },
    { label: "Give", to: "/give", icon: "give" },
  ],
  heroImage: "/images/pop-hero-live.png",
  heroKicker: "ELCA · Fernandina Beach, Florida",
  heroTitle: "Come… be a part of peace.",
  heroBody:
    "Join us Sundays at 10:00 AM for worship and Holy Communion — one block from the Atlantic. Livestream on Facebook if you cannot be in the pew. You do not need a Facebook account to watch.",
  services: [
    {
      day: "Sunday",
      time: "9:00 AM",
      title: "Sunday school & breakfast",
      note: "Fellowship Hall. Intergenerational study of the day’s readings, then crafts and activities by age. Breakfast is served. All ages welcome.",
    },
    {
      day: "Sunday",
      time: "10:00 AM",
      title: "Worship & Holy Communion",
      note: "Sanctuary. Hymns, liturgy, choir, bells, organ, and piano. Communion every week. Facebook Live at 10:00 AM.",
    },
    {
      day: "Wednesday",
      time: "4:00 PM",
      title: "Choir practice",
      note: "New voices welcome. C. Tyler Odom directs. Bell choir rehearses Fridays at 11:00 AM — no audition, reading music not required.",
    },
  ],
  people: [
    {
      name: "Pastor John Benjamin “Ben” Mandrick",
      role: "Pastor",
      email: "ben.mandrick@poplcweb.com",
      phone: "(904) 556-6687",
      photo: "/images/pop-staff-pastor.jpg",
      bio: "Pastor Ben began serving Prince of Peace in July 2024. After graduating from Fernandina Beach High School, he earned a psychology degree at the University of North Florida with an emphasis on child psychology. He and Andrea were married in 2010. While she finished her education, he served as a child protection investigator for the State of Florida. They then moved to St. Paul, Minnesota, for seminary. He was ordained in 2015 after an internship in St. Paul, and previously served congregations in Somerset, Pennsylvania, and Guyton, Georgia. Andrea, a CPA, and Pastor Ben have four children in Fernandina Beach schools. He loves to swim, fish, and play tennis — and admits pickleball may be more his speed. He is devoted to pastoral care in crisis and to calling out the gifts of lay leaders.",
    },
    {
      name: "Shannon Cockrell",
      role: "Church office manager",
      email: "princeofpeace@poplcweb.com",
      phone: "(904) 261-6306",
      photo: "/images/pop-staff-shannon.png",
      bio: "Shannon keeps the office week in order — bulletins, happenings, the phone on Atlantic Avenue, and a warm first word when you walk in. Call the office Monday–Friday, 9:00 AM – 4:00 PM.",
    },
    {
      name: "C. Tyler Odom",
      role: "Choir director",
      email: "ctylerodom@gmail.com",
      phone: "(904) 206-1150",
      bio: "Tyler coordinates and facilitates the music of worship and special events. He conducts the choir and ensembles and holds together sacred, traditional, and contemporary song. He is Director of Bands at his alma mater, Fernandina Beach High School, and holds a Bachelor of Arts in Music Education from the University of North Florida. He is a guest performer and director with local ensembles and enjoys playing in the pit at Amelia Musical Playhouse.",
    },
    {
      name: "Solomon Johnson",
      role: "Organist",
      email: "solomon8992@gmail.com",
      phone: "(904) 583-8795",
      photo: "/images/pop-staff-solomon.jpg",
      bio: "Solomon provides piano and organ for worship. A Boston native who grew up in Fernandina Beach and Jacksonville, he holds a bachelor’s in music education from Florida College in Temple Terrace and teaches music at Emma Love Hardee Elementary. He is an active accompanist in the community and loves to travel.",
    },
    {
      name: "Les Boette",
      role: "Congregation council president",
      email: "boette10@gmail.com",
      phone: "(904) 305-9618",
      photo: "/images/pop-staff-les.jpg",
      bio: "Les is a lifelong Lutheran. A University of Connecticut chemical engineering graduate, he retired after a career in wind power. He previously served as council president in Pittsburgh and Beckley, West Virginia. He has been a member of Prince of Peace since 2016. He and Ellie have been married 56 years. They have two children and three grandchildren.",
    },
  ],
  messages: [
    {
      slug: "sunday-live",
      title: "Sunday worship livestream",
      series: "Prince of Peace",
      scripture: "Holy Communion each week",
      date: "2026-09-06",
      duration: "60 min",
      image: "/images/pop-worship-live.jpg",
      summary: "Join in from home on Facebook Live at 10:00 AM, or watch the recording afterward. No Facebook account required.",
      body: `Unable to be on Atlantic Avenue this Sunday? The congregation gathers anyway — and so can you.

We livestream worship at 10:00 AM on Facebook at Prince of Peace Lutheran Church (facebook.com/POPLC2). You do not need a Facebook account to watch live or recorded services. If anything fails, call the office or Pastor Ben.

The service is liturgical and hospitable: hymns and songs, prayer, the reading of Scripture, a sermon, and Holy Communion every week.

If you are visiting Fernandina Beach, come in person. We are one block from the ocean. Park, walk in, sit where you like. You do not need to be Lutheran. You do not need to have been to church in a long time.`,
    },
  ],
  episodes: [],
  books: [],
  events: [
    {
      id: "ss-sep6",
      title: "Sunday school returns · breakfast served",
      date: "2026-09-06",
      time: "9:00 AM",
      place: "Fellowship Hall",
      summary: "Intergenerational study of the day’s readings, then crafts by age. Breakfast begins this Sunday. Help in the kitchen — see Andi.",
    },
    {
      id: "wors-sep6",
      title: "Sunday worship with Holy Communion",
      date: "2026-09-06",
      time: "10:00 AM",
      place: "Sanctuary · 2600 Atlantic Ave",
      summary: "In person and on Facebook Live. POP Band rehearses after worship.",
    },
    {
      id: "labor",
      title: "Labor Day — office closed",
      date: "2026-09-07",
      time: "All day",
      place: "Church office",
      summary: "The office is closed for the holiday. Men’s property group still meets at 9:00 AM.",
    },
    {
      id: "choir",
      title: "Choir practice",
      date: "2026-09-09",
      time: "4:00 PM",
      place: "Church",
      summary: "Weekly on Wednesdays. New voices welcome. Tyler Odom directs.",
    },
    {
      id: "bells",
      title: "Handbell choir",
      date: "2026-09-11",
      time: "11:00 AM",
      place: "Church",
      summary: "Three-octave choir. No audition. Reading music is not required. All ages.",
    },
    {
      id: "confirm",
      title: "Confirmation class",
      date: "2026-09-12",
      time: "10:00 AM – noon",
      place: "Church",
      summary: "Nine confirmands are on track for confirmation in October. Makeup class September 19.",
    },
    {
      id: "back",
      title: "Back-to-Church Sunday · God’s Work. Our Hands.",
      date: "2026-09-13",
      time: "10:00 AM",
      place: "Sanctuary & Fellowship Hall",
      summary: "ELCA synod Sunday of service plus a potluck luncheon. Bring a dish, a neighbor, and canned goods for the narthex.",
    },
    {
      id: "food-drive",
      title: "Barnabas Center food drive",
      date: "2026-09-18",
      time: "11:00 AM – 5:00 PM",
      place: "Publix, Fernandina Beach",
      summary: "Collecting for neighbors in crisis. Continues Saturday the 19th at Walmart and Publix.",
    },
    {
      id: "youth-lunch",
      title: "Youth luncheon after worship",
      date: "2026-09-20",
      time: "After 10:00 AM worship",
      place: "Fellowship Hall",
      summary: "Lightkeepers youth — service, fellowship, and the road toward the 2027 ELCA Youth Gathering.",
    },
    {
      id: "birthday",
      title: "Birthday Sunday",
      date: "2026-09-27",
      time: "After worship",
      place: "Fellowship Hall",
      summary: "Cupcakes and snacks for October birthdays. Lightkeepers host. All are invited.",
    },
    {
      id: "ecclesiastes",
      title: "Adult Bible study · Ecclesiastes",
      date: "2026-10-06",
      time: "3:30 PM",
      place: "Holy Grounds Coffee House, Amelia Island Parkway",
      summary: "Tuesdays in October (6, 13, 20, 27). Wisdom literature — “Turn! Turn! Turn!” behind the Speedway at 8th and Amelia Island Parkway.",
    },
    {
      id: "shawl",
      title: "Prayer shawl group",
      date: "2026-10-13",
      time: "1:00 PM",
      place: "Narthex",
      summary: "Second Tuesday each month. Crochet, knit, quilt, sew — gifts for baptisms, Habitat homes, and members who need cheering. Robin Howell.",
    },
    {
      id: "ladies",
      title: "Potter’s Daughters ladies group",
      date: "2026-10-02",
      time: "Monthly",
      place: "Church",
      summary: "Study, friendship, and hands-on mission. Activities return in October. All women welcome.",
    },
  ],
  ministries: [
    {
      name: "Prayer committee",
      summary:
        "A team that prays for the congregation and the county. Leave a request in the narthex, call the office, or use the prayer form on this site. Nothing is published without care.",
    },
    {
      name: "Monthly missions",
      summary:
        "Each month we focus on a specific need. We sponsor Lutheran world relief, Barnabas Center and local pantries, Salvation Army / Interfaith Dinner Network meals, school supplies for Fernandina children and America’s Youth, clothing and blankets for the unhoused, beach cleanups with Nassau County Extension, hygiene kits for Fernandina Beach Rehabilitation Center and the Nassau County Coalition for the Homeless, veterans through the VFW, and Christmas gifts for families in need.",
    },
    {
      name: "Interfaith Dinner Network",
      summary:
        "We prepare a monthly meal at Salvation Army’s Hope House for neighbors who cannot stretch their resources to feed their families.",
    },
    {
      name: "Music ministry",
      summary:
        "Choir, three-octave handbell choir, organ, piano, and the POP Band. The work is to lead the song of the people gathered. No auditions for bells; reading music is not required.",
      when: "Choir Wednesdays 4:00 PM · Bells Fridays 11:00 AM",
    },
    {
      name: "Worship assistants & ushers",
      summary:
        "Altar guild, assisting ministers, readers, ushers, and greeters — the quiet choreography that makes Sunday feel like Sunday.",
    },
    {
      name: "Christian education",
      summary:
        "Sunday school at 9:00 AM (all ages together, then crafts by age) and seasonal adult studies. Sessions are announced in the monthly newsletter.",
      when: "Sundays at 9:00 AM",
    },
    {
      name: "Lightkeepers youth",
      summary:
        "Youth ministry of Prince of Peace — service, fellowship, and faith, including the road to the ELCA Youth Gathering. Five or six youth are preparing for 2027.",
    },
    {
      name: "Fellowship & socials",
      summary:
        "Cookouts, trips, soup-and-worship gatherings, birthday Sundays, and the big Back-to-Church luncheon. Friendship is part of the gospel here.",
    },
    {
      name: "Visitation care team",
      summary:
        "If you are hospitalized, homebound, or hungry for a visit and communion, call the office. The team will come.",
    },
    {
      name: "Prayer shawl group",
      summary:
        "Crafters who knit and sew welcome for baptisms, Habitat homes, and members who need cheering. Second Tuesday, 1:00 PM, narthex. Robin Howell.",
      when: "Second Tuesday · 1:00 PM",
    },
    {
      name: "Potter’s Daughters",
      summary: "Ladies group — study, friendship, and practical care. Returns in October.",
      when: "Monthly",
    },
    {
      name: "Men’s property group",
      summary: "The building and grounds kept in good order. Mondays at 9:00 AM.",
      when: "Mondays 9:00 AM",
    },
  ],
  beliefs: [
    {
      title: "Saved by grace through faith",
      body: "We believe, teach, and confess that Jesus Christ is Lord. We are justified by God’s grace through faith in Him — a gift, not a wage.",
    },
    {
      title: "Word and sacrament",
      body: "God meets us in Scripture, in Holy Baptism, and in Holy Communion. We celebrate the Lord’s Supper every Sunday. Infants and adults are baptized here.",
    },
    {
      title: "The creeds",
      body: "We confess the Apostles’, Nicene, and Athanasian Creeds — the church’s old, durable sentences about the triune God.",
    },
    {
      title: "A Lutheran people in a coastal town",
      body: "Prince of Peace is a congregation of the Evangelical Lutheran Church in America, Florida-Bahamas Synod. You do not have to be Lutheran to worship here. You only have to come.",
    },
  ],
  mission:
    "To strengthen our faith in Jesus through worship and fellowship; to be the face of Christ for others.",
  vision:
    "To bring the love of Jesus through a welcoming, caring, and growing church engaged in inspirational worship, spirited Christian education, and serving our local and global community — guided by the Holy Spirit.",
  about: [
    "Prince of Peace Lutheran Church has been a parish on Atlantic Avenue since 1964 — one block from the beach, and the only Lutheran congregation of any denomination in Nassau County. We are a congregation of the Evangelical Lutheran Church in America, Florida-Bahamas Synod.",
    "The motto is simple enough to fit on a sign and large enough to organize a life: Come… be a part of peace. We mean it. Whether you have been here fifteen minutes or fifteen years, we will treat you like family. Worship is liturgical and singable. Communion is weekly. The coffee is on. The footer on the old site said it plainly: Where Jesus is praised and the Gospel proclaimed.",
    "From Amelia Island through Fernandina Beach, we keep showing up — canned goods in the narthex, youth on the move toward a gathering, choir and bells filling the room, a pastor who knows the schools because his children attend them. We are not a megachurch. We are a church. That is the point.",
  ],
  visitorNotes: [
    "Sunday worship is 10:00 AM. Sunday school and breakfast begin at 9:00 AM in Fellowship Hall.",
    "You do not need to be Lutheran, dressed up, or “caught up.” Come as you are.",
    "Holy Communion is celebrated every week. All who desire Christ are welcome at the table. We are working to offer gluten-free hosts — ask an usher.",
    "Children are welcome in worship. Youth Sunday school is with the whole parish at 9:00, then crafts by age.",
    "Livestream is on Facebook every Sunday at 10:00 AM: facebook.com/POPLC2. You do not need an account to watch.",
    "A new assisted listening system is in the sanctuary. Ask an usher if you need help.",
    "Parking is on site at 2600 Atlantic Avenue, Fernandina Beach. The ocean is a short walk after church.",
  ],
  givingNote:
    "God is generous, and so he calls us to be. Give in the plate, by mail to 2600 Atlantic Avenue, online through the office, or as a Qualified Charitable Distribution from an IRA. Mark “MORTGAGE FUND” to pay down the principal. Lightkeepers gifts send youth to the ELCA Gathering.",
  sister: {
    label: "Damaged Christian Ministry",
    to: "https://github.com/benhensec/damaged-christian-ministry",
    hint: "A teaching, podcast, and book ministry for wounded disciples — born on this same First Coast.",
  },
};

export const popMotto = "Come… be a part of peace.";

export const popCoreBeliefs: Belief[] = [
  {
    title: "God",
    body: "There is one eternally existing God who has three distinct persons: God the Father, God the Son, and God the Holy Spirit. He is the creator of all that exists, both visible and invisible, and is therefore worthy of all glory and praise. God is perfect in love, power, holiness, goodness, knowledge, wisdom, justice, and mercy. He is unchangeable and therefore is the same yesterday, today, and tomorrow.",
  },
  {
    title: "Revelation",
    body: "God has revealed himself to us through his son, Jesus Christ, who is the visible image of the invisible God, the holy scriptures, and through all of creation itself.",
  },
  {
    title: "Mankind",
    body: "Man and woman were created in God’s image for His glory. The first humans, Adam and Eve, were created without sin and appointed as caretakers of the rest of God’s creation.",
  },
  {
    title: "The Fall",
    body: "When Adam and Eve chose not to obey God, they ceased to be what they were made to be and became distorted images of God. This caused them to fall out of fellowship with God and fractured all of creation ever since that time.",
  },
  {
    title: "Salvation",
    body: "Jesus Christ came to reconcile us with God. He lived a life without sin and willingly died on the cross to pay the penalty for our transgressions. God raised him from the dead and now, by grace, offers as a free gift eternal life to all who follow Christ, by faith, as their Lord and Savior. That is why salvation can be found in Christ alone.",
  },
  {
    title: "The Church",
    body: "The Church is meant to be the visible body of Christ, sent into the world to glorify God and proclaim the gospel of Jesus Christ.",
  },
  {
    title: "Resurrection",
    body: "Jesus Christ is returning one day to judge both the living and the dead and to usher in the fullness of God’s kingdom on earth.",
  },
];

export const popLessons = [
  {
    date: "September 6",
    title: "Sunday after Pentecost",
    readings: ["Genesis 1:1–2:4a", "Psalm 148", "Acts 17:22a, 24–28", "John 1:1–5"],
  },
  {
    date: "September 13",
    title: "Sunday after Pentecost · Back-to-Church Sunday",
    readings: ["Genesis 50:15–21", "Psalm 103:1–13", "Romans 14:1–12", "Matthew 18:21–35"],
  },
  {
    date: "September 20",
    title: "Sunday after Pentecost",
    readings: ["Jonah 3:10–4:11", "Psalm 145:1–8", "Philippians 1:21–30", "Matthew 20:1–16"],
  },
  {
    date: "September 27",
    title: "Sunday after Pentecost · Birthday Sunday",
    readings: ["Ezekiel 18:1–4, 25–32", "Psalm 25:1–9", "Philippians 2:1–13", "Matthew 21:23–32"],
  },
];

export const popBulletins = [
  {
    title: "September 6, 2026 · Sunday after Pentecost",
    href: "/files/pop/Bulletin-2026-09-06.pdf",
  },
  {
    title: "August 30, 2026 · Sunday after Pentecost",
    href: "/files/pop/Bulletin-2026-08-30.pdf",
  },
  {
    title: "Take Faith Home · August 30",
    href: "/files/pop/Take-Faith-Home-2026-08-30.pdf",
  },
];

export const popLivestreams = [
  { title: "Recent Sunday livestream", href: "https://www.facebook.com/share/v/1Ej7JGjhRK/" },
  { title: "Sunday worship recording", href: "https://www.facebook.com/share/v/1CxmvQfWws/" },
  { title: "Sunday worship recording", href: "https://www.facebook.com/share/v/1bcd6XA7jn/" },
];

export const popNewsletters = [
  {
    title: "Prince of Peace News · September 2026",
    href: "/files/pop/Newsletter-September-2026.pdf",
    note: "Pastor Ben on prayer in seasons of change. Back-to-Church Sunday. Sunday school breakfast. Council notes.",
  },
  {
    title: "Prince of Peace News · August 2026",
    href: "/files/pop/Newsletter-August-2026.pdf",
    note: "Prior month — God’s Work. Our Hands. food collection and summer rhythm.",
  },
  {
    title: "Prince of Peace News · July 2026",
    href: "/files/pop/Newsletter-July-2026.pdf",
    note: "Summer worship, youth, and committee life.",
  },
  {
    title: "Prince of Peace News · June 2026",
    href: "/files/pop/Newsletter-June-2026.pdf",
    note: "Early summer news and the worship assistant schedule.",
  },
  {
    title: "Happenings this week · week of August 31",
    href: "/files/pop/Happenings-Week-of-Aug-31.pdf",
    note: "The weekly sheet — times, tasks, and the Sunday to come.",
  },
];

export const popLinks = [
  { name: "Barnabas Center", href: "https://www.barnabasnassau.org", note: "Neighbors in crisis, food pantry, and health in Nassau County." },
  { name: "ELCA", href: "https://www.elca.org", note: "Evangelical Lutheran Church in America." },
  { name: "Florida-Bahamas Synod", href: "https://www.fbsynod.com", note: "Our synod." },
  { name: "Interfaith Dinner Network", href: "https://www.idnweb.net", note: "Meals for the hungry and lonely." },
  { name: "Luther Springs", href: "https://www.luthersprings.org", note: "Camp and conference center." },
  { name: "Nassau County Council on Aging", href: "https://www.nassaucountycouncilonaging.org", note: "Advocacy and help for elders." },
  { name: "Thrivent", href: "https://www.thrivent.com", note: "Financial wellness for people of faith." },
  { name: "Luther Seminary", href: "https://www.luthersem.edu", note: "Where Pastor Ben trained — leaders for Christian communities." },
];

export const popCommittees = [
  { name: "Education & youth", liaison: "John Harris", summary: "Christian education for children, youth, and adults." },
  { name: "Evangelism", liaison: "Carolyn Krause / George Pester", summary: "Sharing the Gospel in the community." },
  { name: "Public relations", liaison: "Linda Pesante", summary: "Electronic and media support for the ministry." },
  { name: "Fellowship", liaison: "Garrett Price / Bill Hansberry", summary: "Congregational social life." },
  { name: "Outreach", liaison: "Susie Hildebrand", summary: "Monthly care projects, IDN, prayer, and the visitation team." },
  { name: "Finance & stewardship", liaison: "John Harris / Robin Phillips", summary: "Books, reserves, and the annual campaign." },
  { name: "Information technology", liaison: "Les Boette", summary: "Tele-worship, AV, and parish systems." },
  { name: "Property", liaison: "Dennis Purdy", summary: "Building, grounds, and contracted care." },
  { name: "Worship & music", liaison: "Duane Whitesel", summary: "Services, ushers, greeters, altar guild, acolytes, and readers." },
];

export const popCouncil = [
  "Les Boette",
  "Carolyn Krause",
  "Dana Sargent",
  "Robin Phillips",
  "John Harris",
  "Sue Hildebrand",
  "Linda Pesante",
  "Garrett Price",
  "Dennis Purdy",
  "Duane Whitesel",
];

export const popMissionNow = {
  title: "You CAN make a difference",
  kicker: "August–September mission",
  body: "In Nassau County, food insecurity touches 1 in 4 children and 1 in 6 adults. Join our two-month mission with the ELCA synod’s God’s Work. Our Hands. Sunday. Bring canned goods to the narthex every Sunday. No one should have to wonder about the next meal.",
};

export const popPhotos = [
  { src: "/images/pop-worship-live.jpg", alt: "Sunday worship at Prince of Peace" },
  { src: "/images/pop-group1.jpg", alt: "Congregation life at Prince of Peace" },
  { src: "/images/pop-group2.jpg", alt: "Fellowship at Prince of Peace" },
  { src: "/images/pop-group3.jpg", alt: "Ministry groups at Prince of Peace" },
  { src: "/images/pop-mission.jpg", alt: "Monthly mission at Prince of Peace" },
  { src: "/images/pop-staff-les.jpg", alt: "Life together at Prince of Peace" },
];
