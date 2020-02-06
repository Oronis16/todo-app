
export const getTodoElement = (todo) => {
    const todoWrapper = document.createElement('div');
    const checkboxElement = document.createElement('input');
    const textElement = document.createElement('span');

    checkboxElement.type = 'checkbox';
    textElement.innerText = todo.name;

    todoWrapper.appendChild(checkboxElement);
    todoWrapper.appendChild(textElement);
    
    return todoWrapper;
}

export const onAddBtnClicked = (event, inputField, todoContainer) => {
    const value = inputField.value; // 'alma'
    const todo = {
        name: value
    };
    const todoElement = getTodoElement(todo);
    todoContainer.appendChild(todoElement);
    inputField.value = '';
}