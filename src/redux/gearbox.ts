import Dexie from 'dexie'

import {
  ADD_GEAR_SUCCESS,
  FIND_CONFIGS_SUCCESS,
  LOAD_FILTERS_SUCCESS,
  LOAD_GEARS_SUCCESS,
  REMOVE_GEAR_SUCCESS,
  SET_FILTER_SUCCESS,
  SET_INPUT,
  TOGGLE_GEAR,
  GearboxActionTypes,
  GearboxState,
} from '@/redux/gearboxTypes'
import { ThunAction } from '@/redux/types'

import { defaultGears, SYSTEMS } from '@/constants'

export const addGear = (gear: number, asD = false): ThunAction<void> => async (dispatch, _, db) => {
  try {
    await db.addGear(gear, asD)
    dispatch({
      type: ADD_GEAR_SUCCESS,
      payload: gear,
    })
  } catch (err) {
    switch (err.name) {
      case Dexie.errnames.Constraint:
        console.log('already exist')
        break
      default:
        console.log('other error')
    }
  }
}

export const findConfigs = (): ThunAction<void> => async (dispatch, getState, db) => {
  const { inputValue } = getState().gearbox

  try {
    const configs = await db.findConfigs(inputValue)
    dispatch({
      type: FIND_CONFIGS_SUCCESS,
      payload: configs,
    })
  } catch (err) {
    console.log(err)
    throw new Error('load filters err')
  }
}

export const loadFilters = (): ThunAction<void> => async (dispatch, _, db) => {
  try {
    const filters = await db.loadFilters()
    dispatch({
      type: LOAD_FILTERS_SUCCESS,
      payload: filters,
    })
  } catch (err) {
    throw new Error('load filters err')
  }
}

export const loadGears = (): ThunAction<void> => async (dispatch, _, db) => {
  try {
    await db.initializeGears()
    const gears = await db.loadGears()
    dispatch({
      type: LOAD_GEARS_SUCCESS,
      payload: gears,
    })
  } catch (err) {
    throw new Error('load gears err')
  }
}

export const removeGear = (gear: number): ThunAction<Promise<boolean>> => async (dispatch, _, db) => {
  const isD = await db.removeGear(gear)
  dispatch({
    type: REMOVE_GEAR_SUCCESS,
    payload: gear,
  })
  return isD
}

export const setFilter = (filter: string, value: string | boolean): ThunAction<void> => async (dispatch, _, db) => {
  try {
    await db.setFilter(filter, value)
    dispatch({
      type: SET_FILTER_SUCCESS,
      payload: { [filter]: value },
    })
  } catch (err) {
    throw new Error('set filter err')
  }
}

export const setInput = (value: string): GearboxActionTypes => ({
  type: SET_INPUT,
  payload: value,
})

export const toggleGear = (gear: number): ThunAction<void> => async (dispatch, _, db) => {
  try {
    await db.toggleGear(gear)
    dispatch({
      type: TOGGLE_GEAR,
      payload: gear,
    })
  } catch (err) {
    if (err instanceof Dexie.ModifyError) {
      console.error(err.failures)
      throw err
    } else {
      // Rethrow error of other types to ensure transaction is cancelled.
      throw err
    }
  }
}

const initialState: GearboxState = {
  configs: [],
  customGears: [],
  filters: {
    system: SYSTEMS.pmm,
    approx: false,
    unique: false,
  },
  inputValue: '',
  selectedGears: [],
}

export default (state = initialState, action: GearboxActionTypes): GearboxState => {
  switch (action.type) {
    case ADD_GEAR_SUCCESS:
      return {
        ...state,
        customGears: [...state.customGears, action.payload],
        selectedGears: [...state.selectedGears, action.payload],
      }
    case FIND_CONFIGS_SUCCESS:
      return {
        ...state,
        configs: action.payload,
      }

    case LOAD_FILTERS_SUCCESS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...Object.assign({}, ...action.payload.map(({ filter, value }) => ({ [filter]: value }))),
        },
      }

    case LOAD_GEARS_SUCCESS:
      return {
        ...state,
        customGears: action.payload.filter(({ z }) => !defaultGears.includes(z)).map(({ z }) => z),
        selectedGears: action.payload.filter(({ active }) => active).map(({ z }) => z),
      }

    case REMOVE_GEAR_SUCCESS:
      return {
        ...state,
        customGears: state.customGears.filter((g) => g !== action.payload),
        selectedGears: state.selectedGears.filter((g) => g !== action.payload),
      }

    case SET_FILTER_SUCCESS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      }

    case SET_INPUT:
      return {
        ...state,
        inputValue: action.payload,
      }

    case TOGGLE_GEAR:
      return {
        ...state,
        selectedGears: state.selectedGears.includes(action.payload)
          ? state.selectedGears.filter((g) => g !== action.payload)
          : [...state.selectedGears, action.payload],
      }

    default:
      return state
  }
}
