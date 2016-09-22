import { combineReducers } from 'redux';
import locationReducer from './location/locationReducers';
import { gearboxReducer, gearboxConfigReducer, gearboxFiltersReducer, loaderReducer } from './gearbox/gearboxReducers';

const rootReducer = combineReducers({
	locationReducer,
	gearboxReducer,
	gearboxConfigReducer,
	gearboxFiltersReducer,
	loaderReducer
});

export default rootReducer;
