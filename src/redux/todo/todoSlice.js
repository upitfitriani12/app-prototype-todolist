import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: 'all',
  search: '',
  category: 'all',
  loading: false,
  weather: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    editTodo: (state, action) => {
      const index = state.items.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) state.items[index] = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    fetchWeatherRequest: () => {},
    fetchWeatherSuccess: (state, action) => {
      state.weather = action.payload;
    },
    fetchWeatherFailure: (state) => {
      state.weather = null;
    },
    reorderTodos: (state, action) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const [movedItem] = state.items.splice(sourceIndex, 1);
      state.items.splice(destinationIndex, 0, movedItem);
    },
  },
});

export const {
  addTodo, deleteTodo, toggleTodo, editTodo,
  setFilter, setCategory, setSearch, setLoading,
  fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherFailure,
  reorderTodos
} = todoSlice.actions;

export default todoSlice.reducer;