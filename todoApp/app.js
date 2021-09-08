function addTodo(text) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');

    li.innerHTML = `
        <span class="todo-item">${text}</span>
        <button name="checkButton">check</button>
        <button name="deleteButton">delete</i></button>
    `;

    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

function handleSubmitForm(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value) {
        addTodo(input.value)
    }

    input.value = '';
}

document.querySelector('form').addEventListener('submit', handleSubmitForm)

function checkTodo(e) {
    let item = e.target.parentNode;
    console.log(item)
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}
function deleteTodo(e) {
    let item = e.target.parentNode;
    console.log(item)
    item.remove(); 
}

function handleClickItem(e) {
    console.log(e)
    if (e.target.name === 'checkButton') {
        checkTodo(e)
    } else if (e.target.name === 'deleteButton') {
        deleteTodo(e)
    }
}

document.querySelector('ul').addEventListener('click', handleClickItem)