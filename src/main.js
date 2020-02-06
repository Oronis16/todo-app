import { getTodoElement, onAddBtnClicked } from './todo.js';

window.onload = async () => {
    const todoContainer = document.querySelector('.todos');
    const addBtn = document.querySelector('.add-btn');
    const inputField = document.querySelector('.inp');

    addBtn.addEventListener('click', (e) => onAddBtnClicked(e, inputField, todoContainer));

    const initialTodos = await getInitialTodos();

    initialTodos.forEach(todo => {
        const todoElement = getTodoElement(todo);
        todoContainer.appendChild(todoElement);
    });
}

const getInitialTodos = async () => {
    try {
        const response = await fetch('initial-todos.json');
        const todos = await response.json();
        return todos;
    } catch (error) {
        console.error(error);
    }
}