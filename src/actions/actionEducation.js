export const addTask = (task) => {
	return {
		type: 'ADD_TASK_EDUCATION',
		payload: task,
	};
}
export const deleteTask = (taskId) => {
	return {
		type: 'DELETE_TASK_EDUCATION',
		payload: taskId
	};
};
