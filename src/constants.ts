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
