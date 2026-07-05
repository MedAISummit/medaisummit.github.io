// The newsletter. Single source of truth for news items. To add a story, append
// an entry to `news` (ordering by date is handled for you). An item with a `body`
// gets its own page at /news/<slug>; an item with an `href` links out instead.
// Drop any images into public/ (for example public/news/first-edition.jpg).

import { site } from './site'

export interface NewsItem {
  slug: string
  title: string
  date: string // ISO date, e.g. '2025-11-03'
  category: 'Announcement' | 'Recap' | 'Highlight' | 'Community'
  excerpt: string
  image?: string
  href?: string
  body?: string[]
  featured?: boolean
}

export interface MediaMention {
  outlet: string
  title: string
  date: string
  url: string
}

const tg = (n: number) => `https://t.me/MedAISummit/${n}`

export const news: NewsItem[] = [
  {
    slug: 'first-edition-on-the-record',
    title: 'The first MedAI Summit is now on the record',
    date: '2025-11-03',
    category: 'Recap',
    excerpt:
      'Two days, more than 500 people from four countries, and 16 talks on how AI is really used in medicine. Here is what happened, and where to watch it.',
    featured: true,
    body: [
      'The first MedAI Summit ran online on 30 and 31 October 2025. More than 500 people from Iran, Colombia, India and Tajikistan joined 16 talks and workshops over the two days, close to 9,000 person-hours of attention.',
      'Speakers came from Mayo Clinic, the World Health Organization, the Icahn School of Medicine at Mount Sinai, Tehran University of Medical Sciences and other institutions. The program ran from uncertainty in radiology AI and agentic AI, to early detection of cardiovascular disease, AI in dentistry, a multicenter pancreatic cancer data pipeline, and the ethics and safety of medical data.',
      'Every session was recorded, subtitled in English and shared with handouts, and it all stays available. If you missed a talk, or want to send a colleague a specific one, the recordings are open. Message the team to get access.',
    ],
  },
  {
    slug: 'recordings-available',
    title: 'Every session from the first edition is available',
    date: '2025-11-10',
    category: 'Announcement',
    excerpt:
      'All 16 talks and workshops are recorded, subtitled in English and kept with their handouts. Here is how to get access.',
    href: site.contact,
  },
  {
    slug: 'radiology-uncertainty-agentic',
    title: 'Radiology in focus: uncertainty and agentic AI',
    date: '2025-10-31',
    category: 'Highlight',
    excerpt:
      'Two talks from Mayo Clinic on what a model does not know, and where agentic systems are heading in the reading room.',
    href: tg(18),
  },
  {
    slug: 'cardiovascular-early-detection',
    title: 'AI for early detection of cardiovascular disease',
    date: '2025-10-31',
    category: 'Highlight',
    excerpt:
      'From Tehran University of Medical Sciences, a look at catching heart disease earlier and monitoring it from a distance.',
    href: tg(29),
  },
  {
    slug: 'ethics-of-medical-data',
    title: 'The ethics and safety of medical data',
    date: '2025-10-30',
    category: 'Highlight',
    excerpt: 'What responsible use of clinical data looks like as models move closer to the bedside.',
    href: tg(52),
  },
  {
    slug: 'next-edition-planning',
    title: 'Planning for the next edition is under way',
    date: '2026-06-15',
    category: 'Announcement',
    excerpt: 'Dates and the call for talks go out on the channel first. Follow to hear it the moment it opens.',
    href: site.channel,
  },
]

/** News, newest first. */
export const sortedNews = [...news].sort((a, b) => (a.date < b.date ? 1 : -1))

/** The lead story: the item marked featured, or the newest one. */
export const featuredNews = sortedNews.find((n) => n.featured) ?? sortedNews[0]

/** Everything except the lead story, newest first. */
export const restNews = sortedNews.filter((n) => n !== featuredNews)

export const getNews = (slug: string) => news.find((n) => n.slug === slug)

/** External coverage of the summit. Add entries as they appear. */
export const mediaMentions: MediaMention[] = []
