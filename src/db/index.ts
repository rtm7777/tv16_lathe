import Dexie from 'dexie'

import model, { DBModel } from '@/db/model'
import { metricGears, imperialGears, defaultDgears, dGears } from '@/constants'

const includes = (gears: number[], { a, b, c, d }: DBModel): boolean =>
  gears.includes(a) && gears.includes(b) && gears.includes(c) && gears.includes(d)

class DataBase {
  constructor(name: string, modelObj: {}) {
    this.db = new Dexie(name)
    this.db.version(1).stores(modelObj)
    this.db.open()
    if (storage.get('configGenerated') !== 'true') {
      this.initializeDB()
    }
  }

  getInstance = (): {} => this.db

  initializeDB = async (): Promise<void> => {
    const gears = [...metricGears, ...imperialGears]
    const gearConfigs: DBModel[] = []
    let pmm = 0
    defaultDgears.forEach(d => {
      gears.forEach(c => {
        if (c !== d && c < 100) {
          gears.forEach(b => {
            if (b !== d && b < 100) {
              gears.forEach(a => {
                if (a <= 60) {
                  pmm = 3 * (a / b) * (c / d)
                  gearConfigs.push({
                    a,
                    b,
                    c,
                    d,
                    pmm,
                    tpi: 25.4 / pmm,
                    feed: pmm / 20,
                  })
                }
              })
            }
          })
        }
      })
    })
    await this.db.gearConfigs.bulkAdd(gearConfigs)
    storage.set('configGenerated', 'true')
  }

  addGear(newGear: number, customGears: number[], asD = false): Promise<void> {
    const allGears = [...metricGears, ...imperialGears, ...customGears]
    const dGearsArray = [...dGears, ...(asD ? [newGear] : [])]

    if (newGear && newGear > 15 && newGear < 100 && !allGears.includes(newGear)) {
      const gears = [...allGears, newGear]
      const gearConfigs: DBModel[] = []
      let pmm = 0

      dGearsArray.forEach(d => {
        gears.forEach(c => {
          if (c !== d && c < 100) {
            gears.forEach(b => {
              if (b !== d && b < 100) {
                gears.forEach(a => {
                  if (a <= 60 && a !== d && (a === newGear || b === newGear || c === newGear || d === newGear)) {
                    pmm = 3 * (a / b) * (c / d)
                    gearConfigs.push({
                      a,
                      b,
                      c,
                      d,
                      pmm,
                      tpi: 25.4 / pmm,
                      feed: pmm / 20,
                    })
                  }
                })
              }
            })
          }
        })
      })
      return this.db.gearConfigs.bulkAdd(gearConfigs)
    }
    return Promise.reject()
  }

  removeGear = async (gearToRemove: number): Promise<void> => {
    if (![...metricGears, imperialGears].includes(gearToRemove)) {
      await this.db.gearConfigs
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

  findConfigsByPmm(value: number, gears: number[], approx = false): {}[] {
    if (approx) {
      return this.db.gearConfigs
        .where('pmm')
        .between(value - 0.02, value + 0.02, true, true)
        .and((item: DBModel) => includes(gears, item))
        .toArray()
    }
    return this.db.gearConfigs
      .where('pmm')
      .equals(value)
      .and((item: DBModel) => includes(gears, item))
      .toArray()
  }

  findConfigsByTpi(value: number, gears: number[], approx = false): {}[] {
    if (approx) {
      return this.db.gearConfigs
        .where('tpi')
        .between(value - 0.25, value + 0.25, true, true)
        .and((item: DBModel) => includes(gears, item))
        .toArray()
    }
    return this.db.gearConfigs
      .where('tpi')
      .between(value - 0.05, value + 0.05, true, true)
      .and((item: DBModel) => includes(gears, item))
      .toArray()
  }
}

const db = new DataBase('TV-16', model)

export default db
