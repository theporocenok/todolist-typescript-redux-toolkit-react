import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IToDo, IDummyToDo } from '../../types';
import axios from 'axios';

export const loadDummyTodos = createAsyncThunk('todos/loadDummyTodos', () =>
  axios({
    method: 'get',
    url: 'https://dummyjson.com/todos',
  }).then((res) =>
    res.data.todos.map(({ id, todo }: IDummyToDo) => {
      return {
        id,
        description: todo,
      };
    }),
  ),
);

const initialState: IToDo[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const lastId: number = state.length ? state[state.length - 1].id : 0;

      state.push({
        id: lastId + 1,
        description: action.payload,
      });
    },
    updateTodo(state, action: PayloadAction<IToDo>) {
      const todoToUpdate = state.find((todo) => todo.id === action.payload.id);

      todoToUpdate.description = action.payload.description;
    },
    removeTodo(state, action: PayloadAction<IToDo>) {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loadDummyTodos.fulfilled,
      (state, action: PayloadAction<IToDo[]>) => state.concat(action.payload),
    );
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;
