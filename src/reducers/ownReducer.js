const initialState = {
	ownItems: []
}

const onwReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TASK_OWN':
			return { ...state, ownItems: state.ownItems.concat(action.payload) };

		case 'DELETE_TASK_OWN':
			const newItems = state.ownItems.filter(todo => action.payload !== todo.id)
			return { ...state, ownItems: newItems };

		default:
			return state;
	}
}

export default onwReducer;