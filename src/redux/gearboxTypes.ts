export const ADD_GEAR = 'ADD_GEAR'
export const REMOVE_GEAR = 'REMOVE_GEAR'
export const TOGGLE_GEAR = 'TOGGLE_GEAR'

interface AddGearAction {
  type: typeof ADD_GEAR
  payload: number
}

interface RemoveGearAction {
  type: typeof REMOVE_GEAR
  payload: number
}

interface ToggleGearAction {
  type: typeof TOGGLE_GEAR
  payload: number
}

export type GearboxActionTypes = ToggleGearAction | AddGearAction | RemoveGearAction

export interface GearboxState {
  customGears: number[]
  selectedGears: number[]
}
