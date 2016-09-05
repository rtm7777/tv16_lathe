import * as types from './gearboxConstants';
import database from '../db/indexedDB';

export const setGearsConfig = (data) => {
	return {
		type: types.SET_GEARS_CONFIG,
		data
	};
};

export function getGearboxConfig(type, value, approx) {
	return function (dispatch) {
		return database.findConfigsByPmm(value, approx).then((data) => {
			dispatch(setGearsConfig(data));
		});
	};
}
