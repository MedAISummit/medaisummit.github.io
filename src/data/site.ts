// Site-wide settings. Kept in one place so links and identity are easy to update.
export const site = {
  name: 'MedAI Summit',
  tagline: 'An annual gathering on artificial intelligence in medicine.',
  description:
    'MedAI Summit is a yearly summit that brings together researchers, clinicians and engineers working on artificial intelligence in medicine. This archive collects each edition, its speakers and its talks.',
  url: 'https://medaisummit.github.io',
  // The community channel is the reliable place to reach the team and find recordings.
  channel: 'https://t.me/MedAISummit',
  contact: 'https://t.me/medaisummit_admin',
  socials: [
    { label: 'Telegram', url: 'https://t.me/MedAISummit' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/company/medai-summit/' },
    { label: 'X', url: 'https://x.com/MedAISummit' },
    { label: 'Instagram', url: 'https://www.instagram.com/medai_summit' },
  ],
} as const

export type Social = (typeof site.socials)[number]
