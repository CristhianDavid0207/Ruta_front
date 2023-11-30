const todos = [];

window.onload = () => {
    const form = document.getElementById('todo-form'); //Tomamos nuestro formulario obtenemos la referencia
    form.onsubmit = (e) => { //Reemplazamos la función que este tenia en onsubmit
        e.preventDefault(); //Llamamos la función de preventDefault detiene el comportamiento de refrescar la pagina
        const todo = document. getElementById('todo'); //Sacamos el valor de todo
        const todoText = todo.value; //Evaluamos el valos
        todo.value = ''; //Reemplazamos su valor por un String vacio
        todos.push(todoText) // Para agregar los valores al array vacia
        console.log(todoText); //Colocamos los valores en consola
        const todoList = document.getElementById('todo-list')
        todoList.innerHTML = '';
        for(let i=0; i < todos.length; i++) {
            todoList.innerHTML += '<li>' + todos[i] + '</li>'
        }
    }
}