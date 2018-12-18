export const addTask = (task) => {
    return {
        type: 'ADD_TASK_WORK',
        payload: task,
    };
}
export const deleteTask = (taskId) => {
    return {
        type: 'DELETE_TASK_WORK',
        payload: taskId
    };
};
// export default { addTask, deleteTask };