import { Map } from 'immutable';
import * as types from './locationConstants';

const initialState = Map({
	location: 'GearBox'
});

const locationReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CHANGE_LOCATON:
			return state.set('location', action.location || state.location);
		default:
			return state;
	}
};

export default locationReducer;
