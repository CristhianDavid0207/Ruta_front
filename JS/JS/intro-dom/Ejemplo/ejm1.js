//DOM: Es todo el arbol HTML que va mos a tener dentro de una pagina Web, es una representación. Es toda la representacion pero contruido en un objeto que contiene nuestro HTML, css y propiedades, Contiene una interfas de programación estandar con los elementos de HTML definidos como objetos los métodos y eventos de todos nuestros elementos
//EL DOM es un estandar de como podemos ver, cambiar, agregar o eliminar elementos dentro de nuestro sitio Web.
window.onload = () => {//Para que nos cargue despues del HTML
    const parrafo = document.getElementById('text')
    parrafo.innerText = 'Texto actualizado' //Para cambiar y manipular su texto
    parrafo.innerHTML = '<li>Elemento 1</li><li>Elemetnto2</li>' //Para agregar nodos nuevos, Elementos etiquetas en HTML
}
