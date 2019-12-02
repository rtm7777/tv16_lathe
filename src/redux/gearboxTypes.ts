import Gear from '@/db/gear'
import GearConfig from '@/db/gearConfig'
import GearFilter from '@/db/gearFilter'

export const ADD_GEAR = 'ADD_GEAR'
export const FIND_CONFIGS_SUCCESS = 'FIND_CONFIGS_SUCCESS'
export const LOAD_FILTERS_SUCCESS = 'LOAD_FILTERS_SUCCESS'
export const LOAD_GEARS_SUCCESS = 'LOAD_GEARS_SUCCESS'
export const REMOVE_GEAR_SUCCESS = 'REMOVE_GEAR_SUCCESS'
export const SET_FILTER_SUCCESS = 'SET_FILTER_SUCCESS'
export const SET_INPUT = 'SET_INPUT'
export const TOGGLE_GEAR = 'TOGGLE_GEAR'

interface AddGearAction {
  type: typeof ADD_GEAR
  payload: number
}

interface GetConfigsSuccessAction {
  type: typeof FIND_CONFIGS_SUCCESS
  payload: GearConfig[]
}

interface LoadFiltersSuccessAction {
  type: typeof LOAD_FILTERS_SUCCESS
  payload: GearFilter[]
}

interface LoadGearsSuccessAction {
  type: typeof LOAD_GEARS_SUCCESS
  payload: Gear[]
}

interface RemoveGearAction {
  type: typeof REMOVE_GEAR_SUCCESS
  payload: number
}

interface SetFilterSucessAction {
  type: typeof SET_FILTER_SUCCESS
  payload: { [key: string]: string | boolean }
}

interface SetInputAction {
  type: typeof SET_INPUT
  payload: string
}

interface ToggleGearAction {
  type: typeof TOGGLE_GEAR
  payload: number
}

export type GearboxActionTypes = AddGearAction | GetConfigsSuccessAction | LoadFiltersSuccessAction
  | LoadGearsSuccessAction | RemoveGearAction | SetFilterSucessAction | SetInputAction | ToggleGearAction

export interface GearboxState {
  configs: GearConfig[]
  customGears: number[]
  filters: {[key: string]: string | boolean}
  inputValue: string
  selectedGears: number[]
}
