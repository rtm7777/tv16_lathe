import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import db from '@/db'
import reducers from '@/redux'

const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose // eslint-disable-line

// Create store
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk.withExtraArgument(db))))

export default store
