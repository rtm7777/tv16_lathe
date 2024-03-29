import { ThunkAction as ThunkActionType, ThunkDispatch as ThunkDispatchType } from 'redux-thunk'

import { DataBase } from '@/db'
import { GearboxState, GearboxActionTypes } from '@/redux/gearboxTypes'

export type AppState = {
  gearbox: GearboxState
}

export type ActionTypes = GearboxActionTypes

export type ThunAction<R> = ThunkActionType<R, AppState, DataBase, ActionTypes>

export type ThunkDispatch = ThunkDispatchType<AppState, DataBase, ActionTypes>
