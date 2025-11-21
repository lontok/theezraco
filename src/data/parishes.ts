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
    address: "231 N. 3rd Street, Phoenix, AZ 85004",
    website: "https://stmarysbasilica.org",
    description: "Historic basilica hosting the Diocese of Phoenix's first-ever diocesan-level Simbang Gabi celebration. Main hub for Filipino Catholic community in Phoenix.",
    communityEvents: [
      { title: "Weekly Filipino Prayer Group", schedule: "Wednesdays 7:00 PM" },
      { title: "Filipino Choir Rehearsal", schedule: "Saturdays 3:00 PM" },
      { title: "Post-Simbang Gabi Fellowship", schedule: "After Mass" }
    ],
    lat: 33.4527,
    lng: -112.0740
  },
  {
    slug: "corpus-christi",
    name: "Corpus Christi Catholic Church",
    city: "Phoenix",
    state: "AZ",
    address: "3550 E. Knox Rd., Phoenix, AZ 85044",
    website: "https://corpuschristiphoenix.org",
    description: "South Phoenix parish with vibrant Filipino community celebrating Simbang Gabi tradition with daily masses.",
    communityEvents: [
      { title: "Filipino Ministry Gathering", schedule: "First Friday of the month" },
      { title: "Youth Group", schedule: "Thursdays 6:30 PM" },
      { title: "Community Breakfast", schedule: "After Sunday Mass" }
    ],
    lat: 33.3722,
    lng: -111.9897
  },
  {
    slug: "our-lady-of-the-valley",
    name: "Our Lady of the Valley",
    city: "Phoenix",
    state: "AZ",
    address: "3220 W. Greenway Rd., Phoenix, AZ 85053",
    website: "https://ourladyofthevalley.org",
    description: "North Phoenix parish serving families with strong Filipino ministry and complete nine-day Simbang Gabi celebration.",
    communityEvents: [
      { title: "Filipino Cultural Group", schedule: "First Sunday of the month" },
      { title: "Youth Bible Study", schedule: "Thursdays 6:30 PM" },
      { title: "Simbang Gabi Fellowship", schedule: "After each Mass" }
    ],
    lat: 33.6265,
    lng: -112.1156
  },
  {
    slug: "all-saints-mesa",
    name: "All Saints Catholic Church",
    city: "Mesa",
    state: "AZ",
    address: "1534 N. Recker Rd., Mesa, AZ 85205",
    website: "https://allsaintsmesa.org",
    description: "East Valley parish known for its welcoming Filipino community and traditional liturgy during Simbang Gabi.",
    communityEvents: [
      { title: "Filipino Mass", schedule: "Second Sunday 12:00 PM" },
      { title: "Bible Study Group", schedule: "Thursdays 7:00 PM" },
      { title: "Christmas Caroling", schedule: "Dec 21, 6:00 PM" }
    ],
    lat: 33.4472,
    lng: -111.6896
  },
  {
    slug: "st-thomas-aquinas",
    name: "St. Thomas Aquinas",
    city: "Avondale",
    state: "AZ",
    address: "13720 W. Thomas Rd., Avondale, AZ 85392",
    website: "https://stthomasaquinas-az.org",
    description: "West Valley parish with close-knit Filipino community and strong emphasis on family ministry during Advent.",
    communityEvents: [
      { title: "Filipino Prayer & Praise", schedule: "Saturdays 5:00 PM" },
      { title: "Community Service Day", schedule: "First Saturday of the month" },
      { title: "Parol-making Workshop", schedule: "Dec 10, 2:00 PM" }
    ],
    lat: 33.4486,
    lng: -112.3496
  },
  {
    slug: "st-juan-diego",
    name: "St. Juan Diego",
    city: "Chandler",
    state: "AZ",
    address: "3200 S. Cooper Rd., Chandler, AZ 85286",
    website: "https://sjdchandler.org",
    description: "Growing Chandler parish serving multicultural community with active Filipino ministry and Simbang Gabi celebrations.",
    communityEvents: [
      { title: "Filipino Fellowship", schedule: "Third Sunday of the month" },
      { title: "Young Adult Ministry", schedule: "Fridays 7:00 PM" },
      { title: "Advent Preparation", schedule: "Wednesdays 6:30 PM" }
    ],
    lat: 33.2667,
    lng: -111.8039
  },
  {
    slug: "st-rose-philippine-duchesne",
    name: "St. Rose Philippine Duchesne",
    city: "Anthem",
    state: "AZ",
    address: "2825 W. Rose Canyon Cir., Anthem, AZ 85086",
    website: "https://srpd.org",
    description: "North Valley parish serving growing Filipino families with contemporary approach to traditional Simbang Gabi.",
    communityEvents: [
      { title: "Filipino Cultural Celebration", schedule: "Quarterly" },
      { title: "Family Faith Formation", schedule: "Sundays after Mass" },
      { title: "Advent Prayer Service", schedule: "Tuesdays 7:00 PM" }
    ],
    lat: 33.8671,
    lng: -112.1518
  }
];

export const simbangGabiEvents: SimbangGabiEvent[] = [
  // Diocese of Phoenix Kickoff at St. Mary's Basilica
  {
    id: "sg-1",
    churchSlug: "st-marys-basilica",
    churchName: "St. Mary's Basilica",
    city: "Phoenix",
    address: "231 N. 3rd Street, Phoenix, AZ 85004",
    date: "2024-12-15",
    startTime: "5:00 PM",
    notes: "Diocesan Kickoff Mass with procession at 5 PM, Mass at 6 PM. First-ever diocesan-level Simbang Gabi celebration.",
    lat: 33.4527,
    lng: -112.0740
  },
  
  // Corpus Christi - Dec 16-23
  {
    id: "sg-2",
    churchSlug: "corpus-christi",
    churchName: "Corpus Christi Catholic Church",
    city: "Phoenix",
    address: "3550 E. Knox Rd., Phoenix, AZ 85044",
    date: "2024-12-16",
    startTime: "6:00 AM",
    notes: "Traditional dawn mass. Check parish for daily schedule through Dec 23.",
    lat: 33.3722,
    lng: -111.9897
  },
  {
    id: "sg-3",
    churchSlug: "corpus-christi",
    churchName: "Corpus Christi Catholic Church",
    city: "Phoenix",
    address: "3550 E. Knox Rd., Phoenix, AZ 85044",
    date: "2024-12-23",
    startTime: "6:00 AM",
    notes: "Final Simbang Gabi celebration with special fellowship.",
    lat: 33.3722,
    lng: -111.9897
  },

  // Our Lady of the Valley - Dec 16-24
  {
    id: "sg-4",
    churchSlug: "our-lady-of-the-valley",
    churchName: "Our Lady of the Valley",
    city: "Phoenix",
    address: "3220 W. Greenway Rd., Phoenix, AZ 85053",
    date: "2024-12-16",
    startTime: "6:00 AM",
    notes: "Nine-day Simbang Gabi celebration begins. Daily masses through Dec 24.",
    lat: 33.6265,
    lng: -112.1156
  },
  {
    id: "sg-5",
    churchSlug: "our-lady-of-the-valley",
    churchName: "Our Lady of the Valley",
    city: "Phoenix",
    address: "3220 W. Greenway Rd., Phoenix, AZ 85053",
    date: "2024-12-24",
    startTime: "6:00 AM",
    notes: "Final Simbang Gabi mass on Christmas Eve morning.",
    lat: 33.6265,
    lng: -112.1156
  },

  // All Saints Mesa - Dec 16-23
  {
    id: "sg-6",
    churchSlug: "all-saints-mesa",
    churchName: "All Saints Catholic Church",
    city: "Mesa",
    address: "1534 N. Recker Rd., Mesa, AZ 85205",
    date: "2024-12-16",
    startTime: "5:30 AM",
    notes: "East Valley Simbang Gabi celebration begins. Daily through Dec 23.",
    lat: 33.4472,
    lng: -111.6896
  },
  {
    id: "sg-7",
    churchSlug: "all-saints-mesa",
    churchName: "All Saints Catholic Church",
    city: "Mesa",
    address: "1534 N. Recker Rd., Mesa, AZ 85205",
    date: "2024-12-23",
    startTime: "5:30 AM",
    notes: "Final dawn mass with traditional Filipino breakfast.",
    lat: 33.4472,
    lng: -111.6896
  },

  // St. Thomas Aquinas - Dec 16-23
  {
    id: "sg-8",
    churchSlug: "st-thomas-aquinas",
    churchName: "St. Thomas Aquinas",
    city: "Avondale",
    address: "13720 W. Thomas Rd., Avondale, AZ 85392",
    date: "2024-12-16",
    startTime: "6:00 AM",
    notes: "West Valley Simbang Gabi celebration. Community potluck after select masses.",
    lat: 33.4486,
    lng: -112.3496
  },
  {
    id: "sg-9",
    churchSlug: "st-thomas-aquinas",
    churchName: "St. Thomas Aquinas",
    city: "Avondale",
    address: "13720 W. Thomas Rd., Avondale, AZ 85392",
    date: "2024-12-23",
    startTime: "6:00 AM",
    notes: "Final Simbang Gabi with special fellowship breakfast.",
    lat: 33.4486,
    lng: -112.3496
  },

  // St. Juan Diego - Dec 16-23
  {
    id: "sg-10",
    churchSlug: "st-juan-diego",
    churchName: "St. Juan Diego",
    city: "Chandler",
    address: "3200 S. Cooper Rd., Chandler, AZ 85286",
    date: "2024-12-16",
    startTime: "6:00 AM",
    notes: "Chandler community Simbang Gabi celebration begins.",
    lat: 33.2667,
    lng: -111.8039
  },
  {
    id: "sg-11",
    churchSlug: "st-juan-diego",
    churchName: "St. Juan Diego",
    city: "Chandler",
    address: "3200 S. Cooper Rd., Chandler, AZ 85286",
    date: "2024-12-23",
    startTime: "6:00 AM",
    notes: "Final dawn mass with parol lighting ceremony.",
    lat: 33.2667,
    lng: -111.8039
  },

  // St. Rose Philippine Duchesne - Dec 16-23
  {
    id: "sg-12",
    churchSlug: "st-rose-philippine-duchesne",
    churchName: "St. Rose Philippine Duchesne",
    city: "Anthem",
    address: "2825 W. Rose Canyon Cir., Anthem, AZ 85086",
    date: "2024-12-16",
    startTime: "6:00 PM",
    notes: "Evening Simbang Gabi celebration for North Valley families.",
    lat: 33.8671,
    lng: -112.1518
  },
  {
    id: "sg-13",
    churchSlug: "st-rose-philippine-duchesne",
    churchName: "St. Rose Philippine Duchesne",
    city: "Anthem",
    address: "2825 W. Rose Canyon Cir., Anthem, AZ 85086",
    date: "2024-12-23",
    startTime: "6:00 PM",
    notes: "Final evening mass with special candlelight service.",
    lat: 33.8671,
    lng: -112.1518
  }
];

export function getChurchBySlug(slug: string): Church | undefined {
  return churches.find(c => c.slug === slug);
}

export function getEventsByChurch(churchSlug: string): SimbangGabiEvent[] {
  return simbangGabiEvents.filter(e => e.churchSlug === churchSlug);
}
