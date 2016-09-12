import { Map, Set } from 'immutable';
import storage from '../services/storage';
import * as types from './gearboxConstants';
import * as gearboxConfig from './gearboxConfig';

const initialState = Map({
	customGears: Set(gearboxConfig.customGears),
	selectedGears: Set(storage.getNumbersArray('selectedGears') || gearboxConfig.allGears),
	dGears: Set(storage.getNumbersArray('dGears') || gearboxConfig.defaultDgears),
	config: []
});
const initialConfigState = Map({
	threadType: storage.get('threadType') || 'pmm',
	approxChecked: storage.get('approxChecked') === 'true' || false
});
const initialFiltersState = Map({
	uniqueGearsChecked: storage.get('uniqueGearsChecked') === 'true' || false
});

export const gearboxReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_GEARS_CONFIG:
			return state.set('config', action.data);
		case types.SELECT_GEAR:
			let selected = state.get('selectedGears');
			if (action.value) {
				selected = selected.add(action.gear);
			} else {
				selected = selected.delete(action.gear);
			}
			storage.set('selectedGears', selected.toArray());
			return state.set('selectedGears', selected);
		default:
			return state;
	}
};
export const gearboxConfigReducer = (state = initialConfigState, action) => {
	switch (action.type) {
		case types.CHANGE_THREAD_TYPE:
			storage.set('threadType', action.threadType);
			return state.set('threadType', action.threadType);
		case types.TOGGLE_APPROX:
			const approxChecked = state.get('approxChecked');
			storage.set('approxChecked', !approxChecked);
			return state.set('approxChecked', !approxChecked);
		default:
			return state;
	}
};
export const gearboxFiltersReducer = (state = initialFiltersState, action) => {
	switch (action.type) {
		case types.TOGGLE_UNIQUE_GEARS:
			const approxChecked = state.get('uniqueGearsChecked');
			storage.set('uniqueGearsChecked', !approxChecked);
			return state.set('uniqueGearsChecked', !approxChecked);
		default:
			return state;
	}
};
