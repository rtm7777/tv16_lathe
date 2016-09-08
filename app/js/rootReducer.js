import { combineReducers } from 'redux';
import locationReducer from './location/locationReducers';
import { gearboxReducer, gearboxConfigReducer, gearboxFiltersReducer } from './gearbox/gearboxReducers';

const rootReducer = combineReducers({
	locationReducer,
	gearboxReducer,
	gearboxConfigReducer,
	gearboxFiltersReducer
});

export default rootReducer;
