import GearConfig, { GearConfigType } from '@/db/gearConfig'

export const generateGearConfigs = (
  gears: number[],
  dGears: number[],
  fn: (config: GearConfigType) => void,
  newGear?: number,
): void => {
  let pmm = 0

  dGears.forEach((d) => {
    gears.forEach((c) => {
      if (c !== d && c < 100) {
        gears.forEach((b) => {
          if (b !== d && b < 100) {
            gears.forEach((a) => {
              if (
                a <= 60
                && (
                  !newGear
                  || (a !== d && (a === newGear || b === newGear || c === newGear || d === newGear))
                )
              ) {
                pmm = 3 * (a / b) * (c / d)
                fn({
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
}

export const includes = (
  gears: number[], {
    a,
    b,
    c,
    d,
  }: GearConfig,
): boolean => gears.includes(a) && gears.includes(b) && gears.includes(c) && gears.includes(d)
