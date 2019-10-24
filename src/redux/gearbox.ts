import Dexie from 'dexie'

import {
  ADD_GEAR,
  REMOVE_GEAR,
  TOGGLE_GEAR,
  GearboxActionTypes,
  GearboxState,
} from '@/redux/gearboxTypes'
import { ThunkResult } from '@/redux/types'

export const addGear = (gear: number): ThunkResult<void> => async (dispatch, _, db) => {
  try {
    await db.addGear(gear, false)
    dispatch({
      type: ADD_GEAR,
      payload: gear,
    })
  } catch (err) {
    throw new Error('add gear err')
  }
}

export const loadGears = (): ThunkResult<void> => async (dispatch, _, db) => {
  db.initializeGears()
  dispatch({
    type: REMOVE_GEAR,
    payload: 23,
  })
}

export const removeGear = (gear: number): ThunkResult<void> => async (dispatch, _, db) => {
  try {
    await db.removeGear(gear)
    dispatch({
      type: REMOVE_GEAR,
      payload: gear,
    })
  } catch (err) {
    throw new Error('add gear err')
  }
}

export const toggleGear = (gear: number): ThunkResult<void> => async (dispatch, _, db) => {
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
  customGears: [],
  selectedGears: [],
}

export default (state = initialState, { type, payload }: GearboxActionTypes): GearboxState => {
  switch (type) {
    case TOGGLE_GEAR:
      return {
        ...state,
        selectedGears: state.selectedGears.includes(payload)
          ? state.selectedGears.filter(g => g !== payload)
          : [...state.selectedGears, payload],
      }

    default:
      return state
  }
}
