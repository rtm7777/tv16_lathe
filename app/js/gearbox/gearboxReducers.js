import { Map, Set } from 'immutable';
import * as types from './gearboxConstants';
import * as gearboxConfig from './gearboxConfig';

const initialState = Map({
	allGears: Set(gearboxConfig.allGears),
	selectedGears: Set(gearboxConfig.selectedGears)
});
const initialConfigState = Map({
	threadType: 'pmm',
	approxChecked: false
});

localStorage.setItem('selectedGears', gearboxConfig.allGears);

console.log(Set(localStorage.getItem('selectedGears').split(',')));

export const gearboxReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_GEARS_CONFIG:
			console.log(action);
			return state;
		default:
			return state;
	}
};
export const gearboxConfigReducer = (state = initialConfigState, action) => {
	switch (action.type) {
		case types.CHANGE_THREAD_TYPE:
			console.log(action);
			return state.set('threadType', action.threadType);
		case types.TOGGLE_APPROX:
			console.log(action);
			return state.set('approxChecked', !state.get('approxChecked'));
		default:
			return state;
	}
};
