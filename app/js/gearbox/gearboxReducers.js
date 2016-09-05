import { Map, Set } from 'immutable';
import * as types from './gearboxConstants';
import * as gearboxConfig from './gearboxConfig';

const initialState = Map({
	allGears: Set(gearboxConfig.allGears),
	selectedGears: Set(gearboxConfig.selectedGears)
});

localStorage.setItem('selectedGears', gearboxConfig.allGears);

console.log(Set(localStorage.getItem('selectedGears').split(',')));

const gearboxReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_GEARS_CONFIG:
			console.log(action);
			return state;
		default:
			return state;
	}
};

export default gearboxReducer;
