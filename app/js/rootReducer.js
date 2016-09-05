import { combineReducers } from 'redux';
import locationReducer from './location/locationReducers';
import gearboxReducer from './gearbox/gearboxReducers';

const rootReducer = combineReducers({
	locationReducer,
	gearboxReducer
});

export default rootReducer;
