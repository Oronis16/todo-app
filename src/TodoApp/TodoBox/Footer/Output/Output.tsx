import React from "react";

export const Output = (props) => {
  return (
    <ul>
      {props.todos && props.todos.map(todo => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
};
