import { combineReducers } from 'redux'

import gearbox from '@/redux/gearbox'

const rootReducer = combineReducers({
  gearbox,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
