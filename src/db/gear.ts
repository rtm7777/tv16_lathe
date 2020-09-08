export interface GearType {
  z: number
  active: number
}

export default class Gear {
  /* eslint-disable @typescript-eslint/lines-between-class-members */
  z: number
  active: number
  /* eslint-enable @typescript-eslint/lines-between-class-members */

  constructor({ z, active }: GearType) {
    this.z = z
    this.active = active
  }
}
