export interface GearType {
  z: number
  active: number
}

export default class Gear {
  /* eslint-disable lines-between-class-members */
  z: number
  active: number
  /* eslint-enable lines-between-class-members */

  constructor({ z, active }: GearType) {
    this.z = z
    this.active = active
  }
}
