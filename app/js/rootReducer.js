import { combineReducers } from 'redux';
import locationReducer from './location/locationReducers';
import { gearboxReducer, gearboxConfigReducer } from './gearbox/gearboxReducers';

const rootReducer = combineReducers({
	locationReducer,
	gearboxReducer,
	gearboxConfigReducer
});

export default rootReducer;
