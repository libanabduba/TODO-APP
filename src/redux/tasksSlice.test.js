import tasksReducer, { addTask, deleteTask, editTask } from './tasksSlice';

describe('tasksReducer', () => {
  it('should add a task', () => {
    const initialState = {
      tasks: [],
      nextTaskId: 1,
    };
    const action = addTask('New Task');
    const newState = tasksReducer(initialState, action);

    expect(newState.tasks).toHaveLength(1);
    expect(newState.tasks[0].title).toBe('New Task');
    expect(newState.tasks[0].isCompleted).toBe(false);
    expect(newState.nextTaskId).toBe(2);
  });

  it('should delete a task', () => {
    const initialState = {
      tasks: [
        { id: 1, title: 'Task 1', isCompleted: false },
        { id: 2, title: 'Task 2', isCompleted: false },
      ],
      nextTaskId: 3,
    };
    const action = deleteTask(1);
    const newState = tasksReducer(initialState, action);

    expect(newState.tasks).toHaveLength(1);
    expect(newState.tasks.some((task) => task.id === 1)).toBe(false);
    expect(newState.nextTaskId).toBe(3); // The nextTaskId should not change
  });

  it('should edit a task', () => {
    const initialState = {
      tasks: [
        { id: 1, title: 'Task 1', isCompleted: false },
        { id: 2, title: 'Task 2', isCompleted: false },
      ],
      nextTaskId: 3,
    };
    const action = editTask({ id: 1, editedTask: 'Updated Task', isCompleted: true });
    const newState = tasksReducer(initialState, action);

    expect(newState.tasks).toHaveLength(2);
    const editedTask = newState.tasks.find((task) => task.id === 1);
    expect(editedTask.title).toBe('Updated Task');
    expect(editedTask.isCompleted).toBe(true);
  });
});
