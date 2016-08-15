import { combineReducers } from 'redux';
import locationReducer from './location/locationReducers';

const rootReducer = combineReducers({
	locationReducer
});

export default rootReducer;
