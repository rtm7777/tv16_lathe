import { ThunkAction } from 'redux-thunk'

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

type GearboxActionTypes = ToggleGearAction | AddGearAction | RemoveGearAction

interface GearboxState {
  customGears: number[]
  selectedGears: number[]
}

type ThunkResult<R> = ThunkAction<R, GearboxState, undefined, GearboxActionTypes>

export const addGear = (gear: number): ThunkResult<void> => async dispatch => {
  const gear2 = gear
  dispatch({
    type: ADD_GEAR,
    payload: gear2,
  })
}

export const removeGear = (gear: number): RemoveGearAction => ({
  type: REMOVE_GEAR,
  payload: gear,
})

export const toggleGear = (gear: number): ToggleGearAction => ({
  type: TOGGLE_GEAR,
  payload: gear,
})

const initialState: GearboxState = {
  customGears: [],
  selectedGears: [],
}

export default (state = initialState, { type }: GearboxActionTypes): GearboxState => {
  switch (type) {
    case TOGGLE_GEAR:
    default:
      return state
  }
}
