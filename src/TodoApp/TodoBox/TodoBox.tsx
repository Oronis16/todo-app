import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Output } from './Footer/Output/Output'
import { TodoContext } from '../../TodoApp/TodoContext/TodoContext'
import { v4 as uuid } from 'uuid';

const initialState = []

const Block = styled.div`
  align-items: center;
  justify-content: flex-start;
  display: flex;
  background-color: rgba(255, 0, 0, 0.3);
  height: 600px;
  width: 400px;
  flex-direction: column;
  border-radius: 20px;
`

export const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'addtodo':
      const newItem = {
        id: uuid(),
        todoName: action.payload
      }
      return [...todos, newItem];
    case 'remove':
      const todo = action.payload;
      const id = todo.id;
      const index = todos.findIndex(todo => todo.id === id);
      if (index === -1) return;
      todos.splice(index, 1);
      return [...todos]
    default:
      throw new Error();
  }
}

export const TodoBox = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return(
    <TodoContext.Provider value={dispatch}>
      <Block>
          <Header />
          <Footer />
          <Output todos={todos} />
      </Block>
    </TodoContext.Provider>
  );
}