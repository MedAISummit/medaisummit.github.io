// The editions archive. This is the single source of truth for every year of the
// summit. To add a new year, append an entry to `editions` below (and drop any
// images into public/). Every page (home stats, the timeline, the archive list and
// each edition page) is generated from this data, so nothing else needs editing.

export interface Speaker {
  name: string
  nameFa?: string
  affiliation: string
  talk: string
  talkFa?: string
  url?: string
}

export interface Stat {
  value: string
  label: string
}

export interface Discipline {
  name: string
  count: number
}

export interface Edition {
  slug: string
  number: number
  year: number
  jalaliYear?: string
  title: string
  dates: string
  format: 'Online' | 'In person' | 'Hybrid'
  status: 'past' | 'upcoming'
  tagline: string
  summary: string
  stats: Stat[]
  disciplines: Discipline[]
  countries: string[]
  speakers: Speaker[]
  contentUrl?: string
}

const tg = (n: number) => `https://t.me/MedAISummit/${n}`

export const editions: Edition[] = [
  {
    slug: '2025',
    number: 1,
    year: 2025,
    jalaliYear: '۱۴۰۴',
    title: 'First Edition',
    dates: '30 and 31 October 2025',
    format: 'Online',
    status: 'past',
    tagline: 'The first international online summit on artificial intelligence in medicine.',
    summary:
      'Held online on 30 and 31 October 2025, the first MedAI Summit brought together more than 500 participants from Iran and abroad for 16 talks and workshops, all with English subtitles and handouts. Every session was recorded and stays available for anyone who joins later.',
    contentUrl: 'https://t.me/medaisummit_admin',
    stats: [
      { value: '500+', label: 'Participants' },
      { value: '16', label: 'Talks and workshops' },
      { value: '9,000', label: 'Person-hours' },
      { value: '4', label: 'Countries' },
    ],
    countries: ['Iran', 'Colombia', 'India', 'Tajikistan'],
    disciplines: [
      { name: 'Medicine', count: 331 },
      { name: 'Dentistry', count: 35 },
      { name: 'Engineering and computer science', count: 31 },
      { name: 'Nursing', count: 15 },
      { name: 'Pharmacy', count: 13 },
      { name: 'Radiotherapy', count: 6 },
      { name: 'Laboratory sciences', count: 4 },
      { name: 'Biotechnology', count: 4 },
      { name: 'Other fields', count: 8 },
    ],
    speakers: [
      { name: 'Dr. Shahriar Faghani', nameFa: 'دکتر شهریار فغانی', affiliation: 'Mayo Clinic', talk: 'Uncertainty of AI models in radiology', talkFa: 'عدم قطعیت مدل‌های هوش‌مصنوعی در رادیولوژی', url: tg(18) },
      { name: 'Dr. Zeinab Barzegar', nameFa: 'دکتر زینب برزگر', affiliation: 'IUMS', talk: 'Smart medicine and the road ahead', talkFa: 'پزشکی هوشمند و آینده‌ی پیش‌رو', url: tg(47) },
      { name: 'Dr. Mohammad-Hossein Nabian', nameFa: 'دکتر محمدحسین نبیان', affiliation: 'TUMS', talk: 'AI in predicting pediatric orthopedic abnormalities', talkFa: 'هوش‌مصنوعی در پیش‌بینی ناهنجاری‌های ارتوپدی اطفال', url: tg(49) },
      { name: 'Dr. Parisa Soltani', nameFa: 'دکتر پریسا سلطانی', affiliation: 'UNIN', talk: 'AI for reducing metal artifacts in CBCT imaging', talkFa: 'هوش مصنوعی در کاهش آرتیفکت فلزی در تصاویر CBCT', url: tg(45) },
      { name: 'Dr. Ali Bozorgi', nameFa: 'دکتر علی بزرگی', affiliation: 'TUMS', talk: 'AI in early detection and prediction of cardiovascular disease', talkFa: 'هوش‌مصنوعی در تشخیص و پیش‌بینی زودهنگام بیماری‌های قلبی‌عروقی', url: tg(29) },
      { name: 'Dr. Sahel Hassanzadeh', nameFa: 'دکتر ساحل حسن‌زاده', affiliation: 'SBMU', talk: 'AI in dentistry: from past to present', talkFa: 'هوش‌مصنوعی در دندان‌پزشکی؛ از گذشته تا امروز', url: tg(24) },
      { name: 'Dr. Pouria Rouzrokh', nameFa: 'دکتر پوریا روزرخ', affiliation: 'Mayo Clinic', talk: 'Agentic AI in radiology', talkFa: 'هوش‌مصنوعی Agentic در رادیولوژی', url: tg(20) },
      { name: 'Dr. Reza Shahnazar', nameFa: 'دکتر رضا شاه‌نظر', affiliation: 'Digikala', talk: 'Building Generative AI applications', talkFa: 'ساختن اپلیکیشن‌های مبتنی بر Generative AI', url: tg(22) },
      { name: 'Dr. Ehsan Saraee', nameFa: 'دکتر احسان سرائی', affiliation: 'TUMS', talk: 'Ethics and safety of medical data in the AI era', talkFa: 'ملاحظات اخلاقی و ایمنی داده‌های پزشکی در عصر هوش مصنوعی', url: tg(52) },
      { name: 'Dr. Amirahmad Safavi', nameFa: 'دکتر امیراحمد صفوی', affiliation: 'ISMMS', talk: 'Building a multicenter pancreatic cancer data pipeline in Iran', talkFa: 'توسعه‌ی خط داده چندمرکزی کنسر پانکراس در ایران', url: tg(37) },
      { name: 'Dr. Reyhaneh Shourgeshti', nameFa: 'دکتر ریحانه شورگشتی', affiliation: 'WHO', talk: 'AI in detecting oral lesions', talkFa: 'کاربرد هوش‌مصنوعی در تشخیص ضایعات دهانی', url: tg(39) },
      { name: 'Dr. Akbar Shafiee', nameFa: 'دکتر اکبر شفیعی', affiliation: 'TUMS', talk: 'AI for remote monitoring and personalized cardiovascular care', talkFa: 'هوش‌مصنوعی در نظارت از راه دور و شخصی‌سازی‌ مراقبت‌های قلبی‌عروقی', url: tg(42) },
      { name: 'Eng. Ali Jafarabadi', nameFa: 'مهندس علی جعفرآبادی', affiliation: 'SATRAP INC', talk: 'AI: from hype to productivity', talkFa: 'هوش‌مصنوعی؛ از هیاهو تا بهره‌وری', url: tg(43) },
      { name: 'Dr. Hamidreza Saligheh Rad', nameFa: 'دکتر حمیدرضا سلیقه‌راد', affiliation: 'TUMS', talk: "AI in service of Alzheimer's diagnosis", talkFa: 'هوش‌مصنوعی در خدمت تشخیص بیماری آلزایمر', url: tg(27) },
      { name: 'Dr. Soroush Nematollahi', nameFa: 'دکتر سروش نعمت‌الهی', affiliation: 'TUMS', talk: 'Seeing inside the black box of AI', talkFa: 'دیدن درون جعبه‌سیاه هوش‌مصنوعی', url: tg(32) },
    ],
  },
]

/** Editions that already happened, newest first. */
export const pastEditions = editions
  .filter((e) => e.status === 'past')
  .sort((a, b) => b.year - a.year)

export const getEdition = (slug: string) => editions.find((e) => e.slug === slug)

/** Distinct institutions across every edition, for the home page. */
export const allAffiliations = Array.from(
  new Set(editions.flatMap((e) => e.speakers.map((s) => s.affiliation))),
)
