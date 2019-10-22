export interface GearConfigType {
  a: number
  b: number
  c: number
  d: number
  pmm: number
  tpi: number
  feed: number
}

export default class GearConfig {
  /* eslint-disable lines-between-class-members */
  a: number
  b: number
  c: number
  d: number
  pmm: number
  tpi: number
  feed: number
  /* eslint-enable lines-between-class-members */

  constructor({
    a,
    b,
    c,
    d,
    pmm,
    tpi,
    feed,
  }: GearConfigType) {
    this.a = a
    this.b = b
    this.c = c
    this.d = d
    this.pmm = pmm
    this.tpi = tpi
    this.feed = feed
  }
}
