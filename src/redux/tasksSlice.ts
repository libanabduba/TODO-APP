import { createSlice } from "@reduxjs/toolkit";

// This creates the tasks slice of the store and generates the reducer functions
export const tasksReducer = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      { id: 1, title: "Learn React", isCompleted: false },
      { id: 2, title: "Learn Redux", isCompleted: false },
      { id: 3, title: "Learn Redux-ToolKit", isCompleted: false },
      { id: 4, title: "Learn Redux-Thunk", isCompleted: false },
    ],
    nextTaskId: 5,
  },
  // This is where we define the actions that will be available to us
  reducers: {
    addTask: (state, action) => {
      if (action.payload === "") return;
      state.tasks.push({
        id: state.nextTaskId,
        title: action.payload,
        isCompleted: false,
      });
      state.nextTaskId++;
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);
      state.tasks.splice(index, 1);
    },
    editTask: (state, action) => {
      const { id, editedTask, isCompleted } = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);
      state.tasks.splice(index, 1, { id, title: editedTask, isCompleted });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask } = tasksReducer.actions;

export default tasksReducer.reducer;
