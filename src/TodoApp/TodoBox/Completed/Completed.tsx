import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../TodoContext/TodoContext";

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
  position: relative;
  font-family: "Allan";

  &:before {
    content: "";
    display: inline-block;
    margin-right: 30px;
    margin-left: 30px;
    border-top: 2px dashed salmon;
    width: calc(100% - 60px);
  }
`;

const Title = styled.header`
  margin-left: 40px;
  margin-top: 15px;
  color: salmon;
  font-weight: bold;
  font-size: 22px;
`;

const Remove = styled.span`
  background-color: white;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 3px;
  size: 10px;
`

const Name = styled.span`
  text-decoration: line-through;
`

export const Completed = props => {
  const dispatch = useContext(TodoContext);
  const handleCheckboxChange = (e, todo) => {
    if (e.target.checked !== true) {
      dispatch({
        type: "uncomplete",
        payload: todo
      });
    }
  };

  const handleRemove = (todo) => {
    dispatch({
      type: 'removecompleted',
      payload: todo
    })
  }

  return (
    <Wrapper>
      <Title>Completed:</Title>
      <ul>
        {props.todos &&
          props.todos.map(completedTodo => (
            <ListItem key={completedTodo.id}>
              <Check
                checked
                type="checkbox"
                onChange={e => handleCheckboxChange(e, completedTodo)}
              />
              <Name>{completedTodo.todoName}</Name>
              <Remove onClick={e => handleRemove(completedTodo)}>&times;</Remove>
            </ListItem>
          ))}
      </ul>
    </Wrapper>
  );
};
