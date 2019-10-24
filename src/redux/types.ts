import { ThunkAction } from 'redux-thunk'

import { DataBase } from '@/db'
import { GearboxState, GearboxActionTypes } from '@/redux/gearboxTypes'

export type AppState = {
  gearbox: GearboxState
}

export type ActionTypes = GearboxActionTypes

export type ThunkResult<R> = ThunkAction<R, AppState, DataBase, ActionTypes>
