import { Map, Set } from 'immutable';
import * as types from './gearboxConstants';
import * as gearboxConfig from './gearboxConfig';

const initialState = Map({
	allGears: Set(gearboxConfig.allGears),
	selectedGears: Set(localStorage.getItem('selectedGears').split(',').map(Number)) || Set(gearboxConfig.allGears),
	config: []
});
const initialConfigState = Map({
	threadType: localStorage.getItem('threadType') || 'pmm',
	approxChecked: localStorage.getItem('approxChecked') === 'true' || false
});
const initialFiltersState = Map({
	uniqueGearsChecked: localStorage.getItem('uniqueGearsChecked') === 'true' || false
});

export const gearboxReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_GEARS_CONFIG:
			return state.set('config', action.data);
		case types.SELECT_GEAR:
			console.log(action);
			return state;
		default:
			return state;
	}
};
export const gearboxConfigReducer = (state = initialConfigState, action) => {
	switch (action.type) {
		case types.CHANGE_THREAD_TYPE:
			localStorage.setItem('threadType', action.threadType);
			return state.set('threadType', action.threadType);
		case types.TOGGLE_APPROX:
			const approxChecked = state.get('approxChecked');
			localStorage.setItem('approxChecked', !approxChecked);
			return state.set('approxChecked', !approxChecked);
		default:
			return state;
	}
};
export const gearboxFiltersReducer = (state = initialFiltersState, action) => {
	switch (action.type) {
		case types.TOGGLE_UNIQUE_GEARS:
			const approxChecked = state.get('uniqueGearsChecked');
			localStorage.setItem('uniqueGearsChecked', !approxChecked);
			return state.set('uniqueGearsChecked', !approxChecked);
		default:
			return state;
	}
};
