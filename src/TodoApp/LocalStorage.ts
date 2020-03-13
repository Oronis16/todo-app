import React, { useEffect, useState } from 'react';

export const TODOS_KEY = 'TODOS';
export const COMPLETED_KEY = 'COMPLETED';

export const useStorage = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  useEffect(() => {
    const todos = localStorage.getItem(TODOS_KEY);
    const completed = localStorage.getItem(COMPLETED_KEY);

    if (todos) setTodos(JSON.parse(todos));
    if (completed) setCompleted(JSON.parse(completed));
  }, []);

  return { todos, completed };
}

export const addItem = (key, todo) => {
  const items = localStorage.getItem(key);

  if (items == null) {
    localStorage.setItem(key, JSON.stringify([todo]));
  } else {
    const todos = JSON.parse(items);
    todos.push(todo);
    localStorage.setItem(key, JSON.stringify(todos));
  }
}

export const removeItem = (key, todo) => {
  const items = localStorage.getItem(key);

  if (items != null) {
    const todos = JSON.parse(items);
    const index = todos.findIndex(_todo => _todo.id === todo.id);
    if (index === -1) return;
    todos.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(todos));
  }
}