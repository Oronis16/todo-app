import React, { useContext, useRef } from "react";
import { TodoContext } from '../../TodoContext/TodoContext'
import styled from 'styled-components';

const Remove = styled.span`
  background-color: white;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 3px;
  size: 10px;
`

const ListItem = styled.li`
  margin: 5px;
  color: salmon;
  font-size: 20px;
  font-weight: bold;
  list-style-type: none;
`

const Check = styled.input`
  margin-right: 10px;
  padding-bottom: 10px;
  font-size: 50px;
`

const Wrapper = styled.div`
  width: 100%;
`

export const Output = (props) => {
  const dispatch = useContext(TodoContext);

  const handleRemove = (todo) => {
    dispatch({
      type: 'remove',
      payload: todo
    })
  }

  const handleCheckboxChange = (e, todo) => {
    if (e.target.checked === true) {
      dispatch({
        type: 'setcompleted',
        payload: todo
      });
    }
  }

  return (
    <Wrapper>
      <ul>
        {props.todos && props.todos.map(todo => (
          <ListItem key={todo.id}>
            <Check type="checkbox" onChange={e => handleCheckboxChange(e, todo)}/>
            {todo.todoName}
            <Remove onClick={e => handleRemove(todo)}>&times;</Remove>
          </ListItem>
        ))}
      </ul>
    </Wrapper>
  );
};
