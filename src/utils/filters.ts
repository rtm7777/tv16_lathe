import { INPUT_RANGES } from '@/constants'

// eslint-disable-next-line import/prefer-default-export
export const inBetween = (system: string, value: number): boolean => {
  const [a, b] = INPUT_RANGES[system]
  return a < value && value < b
}
