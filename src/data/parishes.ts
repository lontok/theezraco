export type SimbangGabiEvent = {
  id: string;
  churchSlug: string;
  churchName: string;
  city: string;
  address: string;
  date: string;
  startTime: string;
  notes?: string;
  lat: number;
  lng: number;
};

export type Church = {
  slug: string;
  name: string;
  city: string;
  state: string;
  address: string;
  website: string;
  description: string;
  communityEvents: Array<{
    title: string;
    schedule: string;
  }>;
  lat: number;
  lng: number;
};

export const churches: Church[] = [
  {
    slug: "st-marys-basilica",
    name: "St. Mary's Basilica",
    city: "Phoenix",
    state: "AZ",
    address: "231 N 3rd St, Phoenix, AZ 85004",
    website: "https://stmarysbasilica.org",
    description: "Historic basilica and main hub for Filipino Catholic community in Phoenix. Home to the largest Simbang Gabi celebration in Arizona.",
    communityEvents: [
      { title: "Weekly Filipino Prayer Group", schedule: "Wednesdays 7:00 PM" },
      { title: "Filipino Choir Rehearsal", schedule: "Saturdays 3:00 PM" },
      { title: "Post-Simbang Gabi Fellowship", schedule: "Dec 17, after Mass" }
    ],
    lat: 33.4527,
    lng: -112.0740
  },
  {
    slug: "our-lady-of-the-valley",
    name: "Our Lady of the Valley",
    city: "Phoenix",
    state: "AZ",
    address: "3200 E Baseline Rd, Phoenix, AZ 85042",
    website: "https://ourladyofthevalley.org",
    description: "Vibrant parish serving South Phoenix with strong Filipino ministry and youth programs.",
    communityEvents: [
      { title: "Filipino Cultural Group", schedule: "First Sunday of the month" },
      { title: "Youth Bible Study", schedule: "Thursdays 6:30 PM" },
      { title: "Simbang Gabi Breakfast", schedule: "Dec 20, after Mass" }
    ],
    lat: 33.3783,
    lng: -112.0154
  },
  {
    slug: "st-theresa-parish",
    name: "St. Theresa Parish",
    city: "Phoenix",
    state: "AZ",
    address: "5045 E Thomas Rd, Phoenix, AZ 85018",
    website: "https://sttheresa-phoenix.org",
    description: "Welcoming East Phoenix parish known for its multicultural community and active Filipino ministry.",
    communityEvents: [
      { title: "Filipino Rosary Group", schedule: "Tuesdays 6:00 PM" },
      { title: "Parish Potluck", schedule: "Third Sunday of the month" },
      { title: "Christmas Concert", schedule: "Dec 22, 7:00 PM" }
    ],
    lat: 33.4804,
    lng: -111.9817
  },
  {
    slug: "st-joan-of-arc",
    name: "St. Joan of Arc",
    city: "Phoenix",
    state: "AZ",
    address: "3801 E Greenway Rd, Phoenix, AZ 85032",
    website: "https://sjoa.org",
    description: "North Phoenix parish with growing Filipino community and contemporary worship style.",
    communityEvents: [
      { title: "Young Adult Fellowship", schedule: "Fridays 7:30 PM" },
      { title: "Filipino Ministry Meeting", schedule: "Second Saturday 10:00 AM" },
      { title: "Advent Retreat", schedule: "Dec 14, 9:00 AM - 3:00 PM" }
    ],
    lat: 33.6294,
    lng: -112.0156
  },
  {
    slug: "st-anne-gilbert",
    name: "St. Anne Parish",
    city: "Gilbert",
    state: "AZ",
    address: "440 W Elliot Rd, Gilbert, AZ 85233",
    website: "https://stannechurch.org",
    description: "Dynamic East Valley parish serving growing Filipino families in Gilbert and surrounding areas.",
    communityEvents: [
      { title: "Filipino Cultural Night", schedule: "Monthly, last Friday" },
      { title: "Family Rosary", schedule: "Wednesdays 7:00 PM" },
      { title: "Children's Christmas Pageant", schedule: "Dec 23, 6:00 PM" }
    ],
    lat: 33.3492,
    lng: -111.7896
  },
  {
    slug: "st-thomas-aquinas",
    name: "St. Thomas Aquinas",
    city: "Avondale",
    state: "AZ",
    address: "13720 W Thomas Rd, Avondale, AZ 85392",
    website: "https://stthomasaquinas-az.org",
    description: "West Valley parish with a close-knit Filipino community and strong emphasis on family ministry.",
    communityEvents: [
      { title: "Filipino Prayer & Praise", schedule: "Saturdays 5:00 PM" },
      { title: "Community Service Day", schedule: "First Saturday of the month" },
      { title: "Parol-making Workshop", schedule: "Dec 10, 2:00 PM" }
    ],
    lat: 33.4486,
    lng: -112.3496
  },
  {
    slug: "holy-cross-mesa",
    name: "Holy Cross Catholic Church",
    city: "Mesa",
    state: "AZ",
    address: "1445 S Power Rd, Mesa, AZ 85206",
    website: "https://holycross-mesa.org",
    description: "East Mesa parish known for its welcoming Filipino community and traditional liturgy.",
    communityEvents: [
      { title: "Filipino Mass", schedule: "Second Sunday 12:00 PM" },
      { title: "Bible Study Group", schedule: "Thursdays 7:00 PM" },
      { title: "Christmas Caroling", schedule: "Dec 21, 6:00 PM" }
    ],
    lat: 33.3910,
    lng: -111.6762
  },
  {
    slug: "st-daniel-the-prophet",
    name: "St. Daniel the Prophet",
    city: "Scottsdale",
    state: "AZ",
    address: "14300 N Hayden Rd, Scottsdale, AZ 85260",
    website: "https://stdanielscottsdale.org",
    description: "North Scottsdale parish serving professional Filipino families with contemporary ministry approach.",
    communityEvents: [
      { title: "Young Professionals Group", schedule: "Tuesdays 7:30 PM" },
      { title: "Filipino Heritage Celebration", schedule: "Quarterly" },
      { title: "Advent Candlelight Service", schedule: "Dec 18, 7:00 PM" }
    ],
    lat: 33.6158,
    lng: -111.9094
  }
];

export const simbangGabiEvents: SimbangGabiEvent[] = [
  {
    id: "sg-1",
    churchSlug: "st-marys-basilica",
    churchName: "St. Mary's Basilica",
    city: "Phoenix",
    address: "231 N 3rd St, Phoenix, AZ 85004",
    date: "2026-12-16",
    startTime: "5:30 AM",
    notes: "Traditional dawn mass with Filipino choir. Breakfast fellowship after.",
    lat: 33.4527,
    lng: -112.0740
  },
  {
    id: "sg-2",
    churchSlug: "st-marys-basilica",
    churchName: "St. Mary's Basilica",
    city: "Phoenix",
    address: "231 N 3rd St, Phoenix, AZ 85004",
    date: "2026-12-23",
    startTime: "5:30 AM",
    notes: "Final Simbang Gabi celebration with grand procession.",
    lat: 33.4527,
    lng: -112.0740
  },
  {
    id: "sg-3",
    churchSlug: "our-lady-of-the-valley",
    churchName: "Our Lady of the Valley",
    city: "Phoenix",
    address: "3200 E Baseline Rd, Phoenix, AZ 85042",
    date: "2026-12-17",
    startTime: "6:00 PM",
    notes: "Evening mass for working families. Youth choir performing.",
    lat: 33.3783,
    lng: -112.0154
  },
  {
    id: "sg-4",
    churchSlug: "our-lady-of-the-valley",
    churchName: "Our Lady of the Valley",
    city: "Phoenix",
    address: "3200 E Baseline Rd, Phoenix, AZ 85042",
    date: "2026-12-20",
    startTime: "6:00 PM",
    notes: "Special breakfast gathering after mass with traditional Filipino treats.",
    lat: 33.3783,
    lng: -112.0154
  },
  {
    id: "sg-5",
    churchSlug: "st-theresa-parish",
    churchName: "St. Theresa Parish",
    city: "Phoenix",
    address: "5045 E Thomas Rd, Phoenix, AZ 85018",
    date: "2026-12-18",
    startTime: "5:45 AM",
    notes: "Dawn mass with parish rosary group. Coffee and pandesal served.",
    lat: 33.4804,
    lng: -111.9817
  },
  {
    id: "sg-6",
    churchSlug: "st-theresa-parish",
    churchName: "St. Theresa Parish",
    city: "Phoenix",
    address: "5045 E Thomas Rd, Phoenix, AZ 85018",
    date: "2026-12-22",
    startTime: "7:00 PM",
    notes: "Evening celebration with Christmas concert following mass.",
    lat: 33.4804,
    lng: -111.9817
  },
  {
    id: "sg-7",
    churchSlug: "st-joan-of-arc",
    churchName: "St. Joan of Arc",
    city: "Phoenix",
    address: "3801 E Greenway Rd, Phoenix, AZ 85032",
    date: "2026-12-19",
    startTime: "6:30 PM",
    notes: "Contemporary celebration with young adult ministry. Fellowship after.",
    lat: 33.6294,
    lng: -112.0156
  },
  {
    id: "sg-8",
    churchSlug: "st-anne-gilbert",
    churchName: "St. Anne Parish",
    city: "Gilbert",
    address: "440 W Elliot Rd, Gilbert, AZ 85233",
    date: "2026-12-20",
    startTime: "6:00 AM",
    notes: "Family-focused celebration. Children's pageant before mass.",
    lat: 33.3492,
    lng: -111.7896
  },
  {
    id: "sg-9",
    churchSlug: "st-anne-gilbert",
    churchName: "St. Anne Parish",
    city: "Gilbert",
    address: "440 W Elliot Rd, Gilbert, AZ 85233",
    date: "2026-12-23",
    startTime: "6:00 AM",
    notes: "Final dawn mass with parol lighting ceremony.",
    lat: 33.3492,
    lng: -111.7896
  },
  {
    id: "sg-10",
    churchSlug: "st-thomas-aquinas",
    churchName: "St. Thomas Aquinas",
    city: "Avondale",
    address: "13720 W Thomas Rd, Avondale, AZ 85392",
    date: "2026-12-21",
    startTime: "5:30 AM",
    notes: "Traditional Filipino mass with community potluck breakfast.",
    lat: 33.4486,
    lng: -112.3496
  },
  {
    id: "sg-11",
    churchSlug: "holy-cross-mesa",
    churchName: "Holy Cross Catholic Church",
    city: "Mesa",
    address: "1445 S Power Rd, Mesa, AZ 85206",
    date: "2026-12-21",
    startTime: "6:30 PM",
    notes: "Evening mass with Christmas caroling after. All welcome.",
    lat: 33.3910,
    lng: -111.6762
  },
  {
    id: "sg-12",
    churchSlug: "st-daniel-the-prophet",
    churchName: "St. Daniel the Prophet",
    city: "Scottsdale",
    address: "14300 N Hayden Rd, Scottsdale, AZ 85260",
    date: "2026-12-22",
    startTime: "6:00 PM",
    notes: "Candlelight service for young professionals and families.",
    lat: 33.6158,
    lng: -111.9094
  }
];

export function getChurchBySlug(slug: string): Church | undefined {
  return churches.find(c => c.slug === slug);
}

export function getEventsByChurch(churchSlug: string): SimbangGabiEvent[] {
  return simbangGabiEvents.filter(e => e.churchSlug === churchSlug);
}
