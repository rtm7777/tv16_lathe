import * as types from './locationConstants';

export const changeLocation = (location) => {
	return {
		type: types.CHANGE_LOCATON,
		location
	};
};
