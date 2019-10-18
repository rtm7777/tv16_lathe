export interface GearConfigType {
  a: number
  b: number
  c: number
  d: number
  pmm: number
  tpi: number
  feed: number
}

export default {
  gearConfigs: '++,a,b,c,d,pmm,tpi,feed',
}

/* eslint-disable lines-between-class-members */
export class GearConfig {
  a: number
  b: number
  c: number
  d: number
  pmm: number
  tpi: number
  feed: number

  constructor({ a, b, c, d, pmm, tpi, feed }: GearConfigType) {
    this.a = a
    this.b = b
    this.c = c
    this.d = d
    this.pmm = pmm
    this.tpi = tpi
    this.feed = feed
  }
}
