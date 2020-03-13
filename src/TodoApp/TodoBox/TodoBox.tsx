import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Header } from './Header/Header';
import { Controls } from './Controls/Controls';
import { Output } from './Output/Output';
import { TodoContext } from '../../TodoApp/TodoContext/TodoContext';
import { v4 as uuid } from 'uuid';
import { Completed } from './Completed/Completed';
import { useStorage, addItem, removeItem, TODOS_KEY, COMPLETED_KEY } from '../LocalStorage';

const Block = styled.div`
  align-items: center;
  justify-content: flex-start;
  display: flex;
  background-color: rgba(255, 0, 0, 0.3);
  height: 600px;
  width: 400px;
  flex-direction: column;
  border-radius: 20px;
  -webkit-box-shadow: 11px 13px 46px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: 11px 13px 46px -7px rgba(0,0,0,0.75);
  box-shadow: 11px 13px 46px -7px rgba(0,0,0,0.75);
`

export const todoReducer = (state, action) => {
  switch (action.type) {

    case 'addtodo':
      const newItem = {
        id: uuid(),
        todoName: action.payload
      }
      addItem(TODOS_KEY, newItem);
      return { ...state, todos: [...state.todos, newItem] };

    case 'remove': {
      const todo = action.payload;
      const id = todo.id;
      const index = state.todos.findIndex(todo => todo.id === id);
      if (index === -1) return;
      state.todos.splice(index, 1);
      removeItem(TODOS_KEY, todo);
      return { ...state, todos: [...state.todos] }
    }

    case 'setcompleted': {
      const todo = action.payload;
      const id = todo.id;
      const index = state.todos.findIndex(todo => todo.id === id);
      if (index === -1) return;
      const todoToComplete = { ...state.todos[index] };
      state.todos.splice(index, 1);
      removeItem(TODOS_KEY, todoToComplete);
      addItem(COMPLETED_KEY, todoToComplete);
      return { todos: [...state.todos], completed: [...state.completed, todoToComplete] }
    }

    case 'uncomplete': {
      const todo = action.payload;
      const id = todo.id;
      const index = state.completed.findIndex(todo => todo.id === id);
      if (index === -1) return;
      const todoToUncompleted = { ...state.completed[index] };
      state.completed.splice(index, 1);
      removeItem(COMPLETED_KEY, todoToUncompleted);
      addItem(TODOS_KEY, todoToUncompleted);
      return { completed: [...state.completed], todos: [...state.todos, todoToUncompleted]}
    }

    case 'removecompleted': {
      const todo = action.payload;
      const id = todo.id;
      const index = state.completed.findIndex(todo => todo.id === id);
      if (index === -1) return;
      state.completed.splice(index, 1);
      removeItem(COMPLETED_KEY, todo);
      return { ...state, completed: [...state.completed]};
    }

    default:
      throw new Error();
  }
}

const initialState = {
  todos: [],
  completed: []
}

export const TodoBox = () => {
  const { todos, completed } = useStorage();

  if (todos && todos.length > 0) initialState.todos = todos;
  if (completed && completed.length > 0) initialState.completed = completed;

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return(
    <TodoContext.Provider value={dispatch}>
      <Block>
          <Header />
          <Controls />
          <Output todos={state.todos} />
          <Completed todos={state.completed}/>
      </Block>
    </TodoContext.Provider>
  );
}