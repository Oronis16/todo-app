import React, { useContext } from "react";
import { TodoContext } from '../../../TodoContext/TodoContext'
import styled from 'styled-components';

const Remove = styled.span`
  background-color: white;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 3px;
`

const List = styled.li`
  margin: 5px;
  color: salmon;
  font-size: 20px;
  font-weight: bold;
`

export const Output = (props) => {
  const dispatch = useContext(TodoContext);

  const handleRemove = (todo) => {
    dispatch({
      type: 'remove',
      payload: todo
    })
  }
  return (
    <>
      <ul>
        {props.todos && props.todos.map(todo => (
          <List key={todo.id}>
            {todo.todoName}
            <Remove onClick={e => handleRemove(todo)}>&times;</Remove>
          </List>
        ))}
      </ul>
    </>
  );
};
