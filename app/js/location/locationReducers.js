const initialState = {
	location: 'GearBox'
};

const locationReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_LOCATON':
			return Object.assign({}, state, {
				location: action.location || state.location
			});
		default:
			return state;
	}
};

export default locationReducer;
