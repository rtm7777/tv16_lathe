import { combineReducers } from 'redux';
import locationReducer from './location/locationReducers';
import gearboxReducer from './gearBox/gearboxReducers';

const rootReducer = combineReducers({
	locationReducer,
	gearboxReducer
});

export default rootReducer;
