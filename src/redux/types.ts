import { ThunkAction as ThunkActionType, ThunkDispatch as ThunkDispatchType } from 'redux-thunk'

import { DataBase } from '@/db'
import { GearboxState, GearboxActionTypes } from '@/redux/gearboxTypes'

export type AppState = {
  gearbox: GearboxState
}

export type ThunkAction<R> = ThunkActionType<R, AppState, DataBase, GearboxActionTypes>

export type ThunkDispatch = ThunkDispatchType<AppState, DataBase, GearboxActionTypes>
