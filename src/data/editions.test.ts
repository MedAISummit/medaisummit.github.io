import { describe, it, expect } from 'vitest'
import { editions, pastEditions, getEdition, allAffiliations } from './editions'

describe('editions data', () => {
  it('has editions with the required shape', () => {
    expect(editions.length).toBeGreaterThan(0)
    for (const e of editions) {
      expect(e.slug).toMatch(/^[a-z0-9-]+$/)
      expect(e.title.length).toBeGreaterThan(0)
      expect(['Online', 'In person', 'Hybrid']).toContain(e.format)
      expect(e.stats.length).toBeGreaterThan(0)
      expect(e.speakers.length).toBeGreaterThan(0)
    }
  })

  it('uses a unique slug per edition', () => {
    const slugs = editions.map((e) => e.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('orders past editions newest first', () => {
    const years = pastEditions.map((e) => e.year)
    expect(years).toEqual([...years].sort((a, b) => b - a))
  })

  it('finds an edition by slug', () => {
    const first = pastEditions[0]
    expect(getEdition(first.slug)?.slug).toBe(first.slug)
    expect(getEdition('does-not-exist')).toBeUndefined()
  })

  it('lists distinct affiliations', () => {
    expect(allAffiliations.length).toBe(new Set(allAffiliations).size)
    expect(allAffiliations.length).toBeGreaterThan(0)
  })

  it('links every talk with an https url', () => {
    for (const e of editions) {
      for (const s of e.speakers) {
        if (s.url) expect(s.url).toMatch(/^https:\/\//)
      }
    }
  })
})
