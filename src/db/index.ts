import Dexie from 'dexie'

import model, { GearConfig } from '@/db/gearConfig'
import { generateGearConfigs } from '@/utils/gears'
import { metricGears, imperialGears, defaultDgears } from '@/constants'

const dGears: number[] = []

const includes = (gears: number[], { a, b, c, d }: GearConfig): boolean =>
  gears.includes(a) && gears.includes(b) && gears.includes(c) && gears.includes(d)

export class DataBase extends Dexie {
  gearConfigs: Dexie.Table<GearConfig, number>

  constructor(name: string) {
    super(name)
    this.version(1).stores(model)

    // this.open()
    this.gearConfigs.mapToClass(GearConfig)
  }

  getInstance = (): Dexie => this

  initializeGears = (): Dexie.Promise<number> => {
    const gears = [...metricGears, ...imperialGears]
    const gearConfigs: GearConfig[] = []

    generateGearConfigs(gears, defaultDgears, config => {
      gearConfigs.push(new GearConfig(config))
    })

    return this.gearConfigs.bulkAdd(gearConfigs)
  }

  addGear = (newGear: number, customGears: number[], asD = false): Dexie.Promise<number> => {
    const allGears = [...metricGears, ...imperialGears, ...customGears]
    const dGearsArray = [...dGears, ...(asD ? [newGear] : [])]

    if (newGear && newGear > 15 && newGear < 100 && !allGears.includes(newGear)) {
      const gears = [...allGears, newGear]
      const gearConfigs: GearConfig[] = []

      generateGearConfigs(
        gears,
        dGearsArray,
        config => {
          gearConfigs.push(new GearConfig(config))
        },
        newGear,
      )

      return this.gearConfigs.bulkAdd(gearConfigs)
    }
    // return Dexie.Promise.reject(0)
    throw new Error('gear_err')
  }

  removeGear = async (gearToRemove: number): Promise<void> => {
    if (![...metricGears, imperialGears].includes(gearToRemove)) {
      await this.gearConfigs
        .where('a')
        .equals(gearToRemove)
        .or('b')
        .equals(gearToRemove)
        .or('c')
        .equals(gearToRemove)
        .or('d')
        .equals(gearToRemove)
        .delete()
    }
  }

  findConfigsByPmm(value: number, gears: number[], approx = false): Dexie.Promise<GearConfig[]> {
    if (approx) {
      return this.gearConfigs
        .where('pmm')
        .between(value - 0.02, value + 0.02, true, true)
        .and((item: GearConfig) => includes(gears, item))
        .toArray()
    }
    return this.gearConfigs
      .where('pmm')
      .equals(value)
      .and((item: GearConfig) => includes(gears, item))
      .toArray()
  }

  findConfigsByTpi(value: number, gears: number[], approx = false): Dexie.Promise<GearConfig[]> {
    if (approx) {
      return this.gearConfigs
        .where('tpi')
        .between(value - 0.25, value + 0.25, true, true)
        .and((item: GearConfig) => includes(gears, item))
        .toArray()
    }
    return this.gearConfigs
      .where('tpi')
      .between(value - 0.05, value + 0.05, true, true)
      .and((item: GearConfig) => includes(gears, item))
      .toArray()
  }
}

const db = new DataBase('TV-16')

export default db
