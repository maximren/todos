export const addTask = (task) => {
	return {
		type: 'ADD_TASK_OWN',
		payload: task,
	};
}

export const deleteTask = (taskId) => {
	return {
		type: 'DELETE_TASK_OWN',
		payload: taskId
	};
};
