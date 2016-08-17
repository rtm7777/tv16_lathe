import { Map, Set } from 'immutable';
import * as gearboxConfig from './gearboxConfig';

const initialState = Map({
	allGears: Set(gearboxConfig.allGears),
	selectedGears: Set(gearboxConfig.selectedGears)
});

console.log(initialState.last());
console.log(initialState);

localStorage.setItem('selectedGears', gearboxConfig.allGears);

console.log(Set(localStorage.getItem('selectedGears').split(',')));

const gearboxReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_GEAR':
			return state.set('location', action.location || state.location);
		default:
			return state;
	}
};

export default gearboxReducer;
