const initialState = {
	educationItems: []
}

const educationReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TASK_EDUCATION':
			return { ...state, educationItems: state.educationItems.concat(action.payload) };

		case 'DELETE_TASK_EDUCATION':
			const educationItems = state.educationItems.slice();
			educationItems.splice(action.payload, 1);
			return { ...state, educationItems };

		default:
			return state;
	}
}

export default educationReducer;