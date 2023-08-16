import { createSlice, configureStore } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const taskId = action.payload;
      const task = state.find(task => task.id === taskId);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    
  },
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;

const store = configureStore({
  reducer: tasksSlice.reducer,
});

export default store;