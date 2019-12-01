import { INPUT_RANGES } from '@/constants'

export const inBetween = (system: string, value: number): boolean => {
  const [a, b] = INPUT_RANGES[system]
  return a < value && value < b
}
