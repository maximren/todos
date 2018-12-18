const initialState = {
  workItems: []
}

const workReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK_WORK':
      return { ...state, workItems: state.workItems.concat(action.payload) };

    case 'DELETE_TASK_WORK':
      const workItems = state.workItems.slice();
      workItems.splice(action.payload, 1);
      return { ...state, workItems };

    default:
      return state;
  }
}

export default workReducer;