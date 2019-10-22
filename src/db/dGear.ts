export interface DGearType {
  z: number
}

export default class DGear {
  z: number

  constructor({ z }: DGearType) {
    this.z = z
  }
}
