import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it, expect } from 'vitest'
import { editions } from './editions'
import { site } from './site'
import { news } from './news'

// Typographic marks that should never appear in the source. Built from code points
// so this file holds none of them itself.
const FORBIDDEN_CHARS: Record<string, string> = {
  [String.fromCharCode(0x2014)]: 'em dash',
  [String.fromCharCode(0x2013)]: 'en dash',
  [String.fromCharCode(0x00b7)]: 'middot',
  [String.fromCharCode(0x2026)]: 'ellipsis',
}

function sourceFiles(): string[] {
  const out: string[] = ['README.md']
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, entry.name)
      if (entry.isDirectory()) walk(p)
      else if (/\.(astro|ts|css|md)$/.test(entry.name) && !/\.test\.tsx?$/.test(entry.name)) out.push(p)
    }
  }
  walk('src')
  return out
}

// English-authored data strings (Persian fields are left alone).
const dataStrings: string[] = []
for (const e of editions) {
  dataStrings.push(e.title, e.dates, e.tagline, e.summary)
  e.stats.forEach((s) => dataStrings.push(s.label))
  e.disciplines.forEach((d) => dataStrings.push(d.name))
  e.countries.forEach((c) => dataStrings.push(c))
  e.speakers.forEach((s) => dataStrings.push(s.name, s.affiliation, s.talk))
}
dataStrings.push(site.name, site.tagline, site.description)
site.socials.forEach((s) => dataStrings.push(s.label))
for (const n of news) {
  dataStrings.push(n.title, n.excerpt, n.category)
  n.body?.forEach((p) => dataStrings.push(p))
}

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
  /\bcutting-edge\b/i,
  /\bworld-class\b/i,
]

describe('site copy stays clean', () => {
  it('has no em dash, en dash, middot or ellipsis in any source file', () => {
    const hits: string[] = []
    for (const file of sourceFiles()) {
      const text = readFileSync(file, 'utf8')
      for (const [ch, name] of Object.entries(FORBIDDEN_CHARS)) {
        if (text.includes(ch)) hits.push(`${name} in ${file}`)
      }
    }
    expect(hits, hits.join(' | ')).toEqual([])
  })

  it('uses none of the banned words in the data copy', () => {
    const hits = dataStrings.filter((s) => BANNED.some((re) => re.test(s)))
    expect(hits, hits.join(' | ')).toEqual([])
  })
})
