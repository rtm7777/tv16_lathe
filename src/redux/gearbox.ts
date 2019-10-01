import { ADD_GEAR, REMOVE_GEAR, TOGGLE_GEAR, GearboxActionTypes, GearboxState } from '@/redux/gearboxTypes'
import { ThunkResult } from '@/redux/types'

export const addGear = (gear: number): ThunkResult<void> => async dispatch => {
  const gear2 = gear
  dispatch({
    type: ADD_GEAR,
    payload: gear2,
  })
}

export const loadGears = (): ThunkResult<void> => async dispatch => {
  dispatch({
    type: REMOVE_GEAR,
    payload: 23,
  })
}

export const removeGear = (gear: number): GearboxActionTypes => ({
  type: REMOVE_GEAR,
  payload: gear,
})

export const toggleGear = (gear: number): GearboxActionTypes => ({
  type: TOGGLE_GEAR,
  payload: gear,
})

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
