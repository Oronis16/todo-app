import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Output } from './Footer/Output/Output'

const Block = styled.div`
  align-items: center;
  justify-content: flex-start;
  display: flex;
  background-color: rgba(255, 0, 0, 0.3);
  height: 600px;
  width: 400px;
  flex-direction: column;
`

export const TodoBox = () => {
  const [todos, setTodoInput] = useState([]);

  const addTodo = (todo: string) => {
    setTodoInput([...todos, todo]);
  }

  return(
    <Block>
        <Header/>
        <Footer onInputChanged={addTodo}/>
        <Output todos={todos}/>
    </Block>
  );
}