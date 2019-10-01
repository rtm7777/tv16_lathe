import { ThunkAction } from 'redux-thunk'

import { GearboxState, GearboxActionTypes } from '@/redux/gearboxTypes'

export type ActionTypes = GearboxActionTypes

export type ThunkResult<R> = ThunkAction<R, AppState, undefined, ActionTypes>

export type AppState = {
  gearbox: GearboxState
}
