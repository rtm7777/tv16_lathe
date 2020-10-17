export const metricGears: number[] = [20, 25, 30, 35, 40, 45, 50, 60, 75, 100]
export const imperialGears: number[] = [55, 56, 64, 65, 70, 72]
export const defaultGears: number[] = [...metricGears, ...imperialGears]
export const defaultDgears: number[] = [65, 75, 100]

export const DEFAULT_GEARS_PARAMS = {
  minZ: 15,
  maxZ: 100,
  minD: 60,
}

export const FILTERS = {
  system: 'system',
  approx: 'approx',
  unique: 'unique',
}

export const SYSTEMS = {
  pmm: 'pmm',
  tpi: 'tpi',
}

export const INPUTS: { [key: string]: { [key: string]: number } } = {
  pmm: {
    min: 0.15,
    max: 6,
    step: 0.05,
  },
  tpi: {
    min: 4,
    max: 160,
    step: 1,
  },
}

export const DEFAULT_RANGES: { [key: string]: {[key: string]: number} } = {
  pmm: {
    default: 0,
    approx: 0.02,
  },
  tpi: {
    default: 0.05,
    approx: 0.25,
  },
}

export const INPUT_RANGES: { [key: string]: number[] } = {
  pmm: [0.15, 6],
  tpi: [4, 160],
}

export const PASSPORTS: { [key: string]: string } = {
  almaty: 'TV-16_Almaty_1957.pdf',
  almatyBushings: 'TV-16_Almaty_1958_bushings.pdf',
  dubno: 'TV-16_Dubno_1971_ukr.pdf',
  dubnoUkr: 'TV-16_Dubno_1972.pdf',
}

export const SPECS: string[] = [
  'model',
  'centreHeight',
  'centreDistance',
  'swingOverBed',
  'swingOverCarriage',
  'spindleBore',
  'speedRange',
  'feedRates',
  'metricThreadPitches',
  'possibleThreads',
  'spindleCone',
  'tailStockCone',
  'weight',
  'mainDrive',
  'spindleBrake',
  'coolantSystem',
]
