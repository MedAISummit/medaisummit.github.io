import { describe, it, expect } from 'vitest'
import { editions } from './editions'
import { site } from './site'

// Collect the English-authored strings only. Persian fields (nameFa, talkFa) are
// user content and are left alone.
const strings: string[] = []
for (const e of editions) {
  strings.push(e.title, e.dates, e.tagline, e.summary)
  e.stats.forEach((s) => strings.push(s.label))
  e.disciplines.forEach((d) => strings.push(d.name))
  e.countries.forEach((c) => strings.push(c))
  e.speakers.forEach((s) => strings.push(s.name, s.affiliation, s.talk))
}
strings.push(site.name, site.tagline, site.description)
site.socials.forEach((s) => strings.push(s.label))

const BANNED = [
  /\bcomprehensive\b/i,
  /\bseamless(ly)?\b/i,
  /\bleverages?\b/i,
  /\bleverag(ed|ing)\b/i,
  /\butiliz(e|es|ed|ing)\b/i,
  /\brobust\b/i,
  /\bdelves?\b/i,
  /\btapestry\b/i,
  /\bempowering\b/i,
  /\bintricate\b/i,
  /\bnuanced\b/i,
]

describe('authored English content', () => {
  it('contains no em or en dashes', () => {
    const bad = strings.filter((s) => s.includes('—') || s.includes('–'))
    expect(bad, bad.join(' | ')).toEqual([])
  })

  it('uses none of the banned AI tell-words', () => {
    const hits = strings.filter((s) => BANNED.some((re) => re.test(s)))
    expect(hits, hits.join(' | ')).toEqual([])
  })
})
