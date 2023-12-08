const todos = JSON.parse(localStorage.getItem('todos')) || [];

const render = () => {
    const todoList = document.getElementById('todo-list');
    const todosTemplate = todos.map (t => '<li>' + t + '</li>');
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li')
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento)
            todos.splice(i, 1)
            actualizarTodo(todos);
            render();            
        })          
    })
}

const actualizarTodo = (todos) => {
    const todoString = JSON.stringify(todos);
    localStorage.setItem('todos', todoString)
}

window.onload = () => {
    render();
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        actualizarTodo(todos);
        render();
       
    }        
}

//MAP nos permite iterar los arreglos sin necesidad de que le indiquemos los indices ni las operaciones












// const todos = [];

// window.onload = () => {
//     const form = document.getElementById('todo-form'); //Tomamos nuestro formulario obtenemos la referencia
//     form.onsubmit = (e) => { //Reemplazamos la función que este tenia en onsubmit
//         e.preventDefault(); //Llamamos la función de preventDefault detiene el comportamiento de refrescar la pagina
//         const todo = document. getElementById('todo'); //Sacamos el valor de todo
//         const todoText = todo.value; //Evaluamos el valos
//         todo.value = ''; //Reemplazamos su valor por un String vacio
//         todos.push(todoText) // Para agregar los valores al array vacia
//         console.log(todoText); //Colocamos los valores en consola
//         const todoList = document.getElementById('todo-list')
//         todoList.innerHTML = '';
//         for(let i=0; i < todos.length; i++) {
//             todoList.innerHTML += '<li>' + todos[i] + '</li>'
//         }
//     }
// }