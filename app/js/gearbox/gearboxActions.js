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

export const setTableLoader = (loader) => {
	return {
		type: types.SET_TABLE_LOADER,
		loader
	};
};

export const setSelectorLoader = (loader) => {
	return {
		type: types.SET_SELECTOR_LOADER,
		loader
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
		dispatch(setTableLoader(true));
		if (type === 'pmm') {
			database.findConfigsByPmm(value, gears, approx).then((data) => {
				dispatch(setGearsConfig(data));
				dispatch(setTableLoader(false));
			});
		} else {
			database.findConfigsByTpi(value, gears, approx).then((data) => {
				dispatch(setGearsConfig(data));
				dispatch(setTableLoader(false));
			});
		}
	};
}

export function gererateGearConfigs(z, asD) {
	return (dispatch) => {
		dispatch(setSelectorLoader(true));
		dispatch(setGearsConfig([]));
		database.addGear(z, asD).then(() => {
			dispatch(addGear(z, asD));
			dispatch(setSelectorLoader(false));
		});
	};
}

export function deleteGearConfigs(z) {
	return (dispatch) => {
		dispatch(setSelectorLoader(true));
		dispatch(setGearsConfig([]));
		database.removeGear(z).then((deleteCount) => {
			dispatch(removeGear(z));
			dispatch(selectGear(z, false));
			dispatch(setSelectorLoader(false));
		});
	};
}
