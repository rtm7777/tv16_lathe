export interface GearFilterType {
  filter: string
  value: string | boolean
}

export default class GearFilter {
  /* eslint-disable @typescript-eslint/lines-between-class-members */
  filter: string
  value: string | boolean
  /* eslint-enable @typescript-eslint/lines-between-class-members */

  constructor({ filter, value }: GearFilterType) {
    this.filter = filter
    this.value = value
  }
}
