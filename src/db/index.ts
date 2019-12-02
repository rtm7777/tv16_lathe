import Dexie, { Collection } from 'dexie'

import schema from '@/db/schema'
import DGear from '@/db/dGear'
import Gear from '@/db/gear'
import GearConfig from '@/db/gearConfig'
import GearFilter from '@/db/gearFilter'

import { generateGearConfigs, includes } from '@/utils/gears'
import { inBetween } from '@/utils/filters'
import {
  defaultDgears,
  defaultGears,
  imperialGears,
  metricGears,
  DEFAULT_GEARS_PARAMS,
  FILTERS,
  DEFAULT_RANGES,
  SYSTEMS,
} from '@/constants'

export class DataBase extends Dexie {
  /* eslint-disable lines-between-class-members */
  gears: Dexie.Table<Gear, number>
  dGears: Dexie.Table<DGear, number>
  gearConfigs: Dexie.Table<GearConfig, number>
  gearFilters: Dexie.Table<GearFilter, number>
  /* eslint-enable lines-between-class-members */

  constructor(name: string) {
    super(name)
    this.version(1).stores(schema)

    this.gears.mapToClass(Gear)
    this.dGears.mapToClass(DGear)
    this.gearConfigs.mapToClass(GearConfig)
    this.gearFilters.mapToClass(GearFilter)
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

  addGear = (newGear: number, asD = false): Dexie.Promise<number> =>
    this.transaction('rw', this.gears, this.dGears, this.gearConfigs, async () => {
      if (newGear > DEFAULT_GEARS_PARAMS.minZ && newGear < DEFAULT_GEARS_PARAMS.maxZ) {
        await this.gears.add(new Gear({ z: newGear, active: 1 }))
        if (asD) await this.dGears.add(new DGear({ z: newGear }))

        const [gears, dGears] = await Promise.all([
          this.gears.toArray(),
          this.dGears.toArray(),
        ])
        const gearConfigs: GearConfig[] = []

        generateGearConfigs(
          gears.map(g => g.z),
          dGears.map(g => g.z),
          config => {
            gearConfigs.push(new GearConfig(config))
          },
          newGear,
        )

        return this.gearConfigs.bulkAdd(gearConfigs)
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
    this.transaction('rw', this.gears, async () => {
      const gear = await this.gears.where('z').equals(z).first()
      if (gear) this.gears.where('z').equals(z).modify({ active: gear.active ? 0 : 1 })
    })

  findActiveGears = (): Dexie.Promise<Gear[]> => this.gears.where('active').equals(1).toArray()

  loadFilters = (): Dexie.Promise<GearFilter[]> => this.gearFilters.toArray()

  loadGears = (): Dexie.Promise<Gear[]> => this.gears.toArray()

  setFilter = (filter: string, value: string | boolean): Dexie.Promise<number> =>
    this.gearFilters.put({ filter, value })

  findConfigs = (draftValue: string): Dexie.Promise<GearConfig[]> =>
    this.transaction('r', this.gears, this.gearConfigs, this.gearFilters, async () => {
      const [
        activeGears,
        { value: system = SYSTEMS.pmm} = {},
        { value: approx = false } = {},
        { value: unique = false} = {},
      ]  = await Promise.all([
        this.findActiveGears(),
        this.gearFilters.where('filter').equals(FILTERS.system).first(),
        this.gearFilters.where('filter').equals(FILTERS.approx).first(),
        this.gearFilters.where('filter').equals(FILTERS.unique).first(),
      ])

      const value = Number(draftValue)
      if (!value || !inBetween(system as string, value)) return []

      const range = DEFAULT_RANGES[system as string][approx ? 'approx' : 'default']
      const query = (): Collection => this.gearConfigs
        .where(system as string)
        .between(value - range, value + range, true, true)
        .and((item) => includes(activeGears.map(({ z }) => z), item))

      if (unique) return query().and(({ a, b, c }) => a !== b && a !== c && b !== c).toArray()

      return query().toArray()
    })
}

const db = new DataBase('TV-16')

export default db
