const input = document.getElementById('todoInput');
const addButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', () => {
    const taskText = input.value.trim();
    // task vuote non ammesse!
    if (taskText === '') return; 

    const li = document.createElement('li'); 
    li.textContent = taskText; 

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Rimuovi';
    //Solo per dare un po' di spazio a sx tra la descrizione e il pulsante di delete.
    deleteButton.style.marginLeft = '10px';
    li.appendChild(deleteButton); 

    todoList.appendChild(li); 

    input.value = ''; 
});

todoList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const li = event.target.parentElement; 
        todoList.removeChild(li);
    }
});
