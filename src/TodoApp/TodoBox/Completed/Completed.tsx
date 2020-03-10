import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  text-decoration: line-through;
`

export const Completed = (props) => {
  console.log(props.todos)

  return(
    <div>
      <ul>
        {props.todos && props.todos.map(completedTodo => (
          <ListItem key={completedTodo.id}>{completedTodo.todoName}</ListItem>
        ))}
      </ul>
    </div>
  );
}