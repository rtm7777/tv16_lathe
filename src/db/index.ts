import Dexie from 'dexie'

import schema from '@/db/schema'
import Gear from '@/db/gear'
import DGear from '@/db/dGear'
import GearConfig from '@/db/gearConfig'

import { generateGearConfigs, includes } from '@/utils/gears'
import {
  metricGears,
  imperialGears,
  defaultGears,
  defaultDgears,
  DEFAULT_GEARS_PARAMS,
} from '@/constants'

const dGears: number[] = []

export class DataBase extends Dexie {
  /* eslint-disable lines-between-class-members */
  gears: Dexie.Table<Gear, number>
  dGears: Dexie.Table<DGear, number>
  gearConfigs: Dexie.Table<GearConfig, number>
  /* eslint-enable lines-between-class-members */

  constructor(name: string) {
    super(name)
    this.version(1).stores(schema)

    this.gears.mapToClass(Gear)
    this.dGears.mapToClass(DGear)
    this.gearConfigs.mapToClass(GearConfig)
  }

  initializeGears = (): Dexie.Promise<void> =>
    this.transaction('rw', this.gears, this.dGears, this.gearConfigs, async () => {
      const gearsCount = await this.gears.count()

      if (!gearsCount) {
        await this.gearConfigs.clear()

        this.gears.bulkAdd(metricGears.map(gear => new Gear({ z: gear, active: 1 })))
        this.gears.bulkAdd(imperialGears.map(gear => new Gear({ z: gear, active: 0 })))
        this.dGears.bulkAdd(defaultDgears.map(gear => new DGear({ z: gear })))

        const gearConfigs: GearConfig[] = []

        generateGearConfigs(defaultGears, defaultDgears, config => {
          gearConfigs.push(new GearConfig(config))
        })

        this.gearConfigs.bulkAdd(gearConfigs)
      }
    })

  addGear = (newGear: number, asD = false): Dexie.Promise<void> =>
    this.transaction('rw', this.gears, this.dGears, this.gearConfigs, async () => {
      const dGearsArray = [...dGears, ...(asD ? [newGear] : [])]

      if (newGear > DEFAULT_GEARS_PARAMS.minZ && newGear < DEFAULT_GEARS_PARAMS.maxZ) {
        await this.gears.add(new Gear({ z: newGear, active: 1 }))

        if (asD) this.dGears.add(new DGear({ z: newGear }))

        const gears = await this.gears.toArray()
        const gearConfigs: GearConfig[] = []

        generateGearConfigs(
          gears.map(g => g.z),
          dGearsArray,
          config => {
            gearConfigs.push(new GearConfig(config))
          },
          newGear,
        )

        this.gearConfigs.bulkAdd(gearConfigs)
      }
      throw new Error('gear_add_error')
    })

  removeGear = (gearToRemove: number): Dexie.Promise<void> =>
    this.transaction('rw', this.gears, this.dGears, this.gearConfigs, async () => {
      if (!defaultGears.includes(gearToRemove)) {
        this.gearConfigs
          .where('a')
          .equals(gearToRemove)
          .or('b')
          .equals(gearToRemove)
          .or('c')
          .equals(gearToRemove)
          .or('d')
          .equals(gearToRemove)
          .delete()
        this.gears.where('z').equals(gearToRemove).delete()
        this.dGears.where('z').equals(gearToRemove).delete()
      }
    })

  toggleGear = (z: number): Dexie.Promise<void> =>
    this.transaction('rw', this.gears, this.dGears, this.gearConfigs, async () => {
      const gear = await this.gears.where('z').equals(z).first()
      if (gear) this.gears.where('z').equals(z).modify({ active: gear.active ? 0 : 1 })
    })

  findActiveGears = (): Dexie.Promise<Gear[]> => this.gears.where('active').equals('1').toArray()

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
