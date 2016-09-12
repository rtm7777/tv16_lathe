import * as types from './gearboxConstants';
import database from '../db/indexedDB';

export const setGearsConfig = (data) => {
	return {
		type: types.SET_GEARS_CONFIG,
		data
	};
};

export const changeThread = (threadType) => {
	return {
		type: types.CHANGE_THREAD_TYPE,
		threadType
	};
};

export const toggleApprox = () => {
	return {
		type: types.TOGGLE_APPROX
	};
};

export const toggleUniqueGears = () => {
	return {
		type: types.TOGGLE_UNIQUE_GEARS
	};
};

export const selectGear = (gear, value) => {
	return {
		type: types.SELECT_GEAR,
		gear,
		value
	};
};

export function gearSelected(gear, value) {
	return (dispatch) => {
		dispatch(setGearsConfig([]));
		dispatch(selectGear(gear, value));
	};
};

export function changeThreadType(threadType) {
	return (dispatch) => {
		dispatch(setGearsConfig([]));
		dispatch(changeThread(threadType));
	};
}

export function getGearboxConfig(type, value, gears, approx) {
	return (dispatch) => {
		if (type === 'pmm') {
			database.findConfigsByPmm(value, gears, approx).then((data) => {
				dispatch(setGearsConfig(data));
			});
		} else {
			database.findConfigsByTpi(value, gears, approx).then((data) => {
				dispatch(setGearsConfig(data));
			});
		}
	};
}
