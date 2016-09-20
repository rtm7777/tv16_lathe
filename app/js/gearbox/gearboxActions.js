import * as types from './gearboxConstants';
import database from '../db/indexedDB';

export const setGearsConfig = (data) => {
	return {
		type: types.SET_GEARS_CONFIG,
		data
	};
};

export const addGear = (z, asD) => {
	return {
		type: types.ADD_GEAR,
		z,
		asD
	};
};

export const removeGear = (z) => {
	return {
		type: types.REMOVE_GEAR,
		z
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

export function gererateGearConfigs(z, asD) {
	return (dispatch) => {
		database.addGear(z, asD).then(() => {
			console.log('gear added');
			dispatch(addGear(z, asD));
		});
	};
}

export function deleteGearConfigs(z) {
	return (dispatch) => {
		database.removeGear(z).then((deleteCount) => {
			console.log('gear deleted' + deleteCount);
			dispatch(removeGear(z));
		});
	};
}
