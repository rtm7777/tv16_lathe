import * as types from './gearboxConstants';
import database from '../db/indexedDB';

export const setGearsConfig = (data) => {
	return {
		type: types.SET_GEARS_CONFIG,
		data
	};
};

export const changeThreadType = (threadType) => {
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

export function getGearboxConfig(type, value, approx) {
	return function (dispatch) {
		return database.findConfigsByPmm(value, approx).then((data) => {
			dispatch(setGearsConfig(data));
		});
	};
}
