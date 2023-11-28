console.log('Hola Mundo')   //console.log() nos permite imprimir en consola.
// Los comentarios se escriben con dos Slas hacia adelante
//TIPOS DE DATOS
//string: cadena de caracteres son letras y palabras y deben ir dendre de comillas 'a', 'Hola Mundo', 'Cristhian David' y tambien se puede hacer con comillas dobles "Emmanuel Moreno".
//Boolean: solo toma dos valores true(verdadero) false(falso) se usa con condiciones para saber si ejecutamos o nos saltamos alguna fracción de código.
//Null: Nulo, significa que una variable esta vacia, que tiene un valor nulo.
//Number: Cualquier número que queramos describir en JS no es necesario usar ninguna comilla, solo es colocar los números, 113 5156 516541 21651, "123"-> este es un tipo de dato String y es distinto a 123 que es un Number.
//Undefined: Es diferente a nulo, nulo es una variable definida cuyo valor es nulo. Undefined significa que no esta definida la variable.
//objet: Es un objeto y puede tener cualquier convinación de los tipos de datos antes definidos. Los objetos van agrupar y van hacer estructuras que nos permiten agrupar todos los tipos de datos

//VARIABLES
//las variables dentro de JS se pueden definir de 3 formas la palabra reservada, las variables siempre cuando las definimos deben empezar con una letra luego puedo usar número
//var: estamos haciendo referenci a la manera antigua de definir variables dentro de JS. Esta lo que hara que ira al tope del archivo y nos daria comportamientos extraños
//var miPrimeraVariable = "lala"
//let: Con let le indicamos a JS que el texto que escribimos despues de esta va hacer una variable en JS, y que podremos definirlo como deseemos y lo podremos utilizar posteriormente, sin necesidad de decirle que valor contiene esta el signo de =  quiere decir que todo lo de la derecha quedara asignado a la variable de la izquierda. Luego en console debemos de indicar la variable sin comillas. Si le pongo comillas me imprime lo que esta dentro de las comillas
//const: 

let miPrimeraVariable = 'Mi primera variable !'
console.log(miPrimeraVariable);

miPrimeraVariable = 'Esto a cambiado' //Si defino esta variable más abajo cambiara el valor de la misma, si no usamos la palabra reservada let reemplaza el valor de la variable. Este concepto se le conoce como mutabilidad es cuando tenemos una variable o afrupacion de variables y le cambiamos el valor.
console.log(miPrimeraVariable);

//boolean
let miBoolean = true //este lo usamos cuando tengamos que er condiciones.
let miOtroBool = false //este lo usamos cuando tengamos que er condiciones.

//Number
let miNumero = 0
let miNumero2 = 12
let miNumero3 = -250

console.log(miNumero, miNumero2, miNumero3, miBoolean, miOtroBool, miPrimeraVariable);

//Undefined -> No tiene valor asignado e imprime indefinido
let undef 
console.log(undef);

//Null
let nulo= null
console.log('nulo', 12, nulo); //Me imprime una variable String, number  y la variable null

//OBJETOS: Es uno d elos mas utilizados dentor de JS
// Un objeto es una agrupación de datos, estos datos hacen sentido entre si
//Objeto vacio {}
const miPrimerObjeto = {}

//objeto: Le vamos a empezar asignar mas variables, las variables que asignemos dentro de un objeto, se llaman propiedades por ende los objetos no tienen variables si no propiedades y se asignan seguido de dos pundos, se asignan las propiedades sin necesidad de usar la palabra reservada let, y entre cada propiedad se debe colocar al final una coma para asignar la siguiente propiedad. Si defino una propiedad con el mismo nombre y le doy otro valor este la reemplazara
//OBJETO AGRUPACIÓN DE DATOS QUE HACEN SENTRIDO ENTRE SI
const miObjeto = {
    unNumero: 12,
    unString: 'Esta es una cadena de caracteres',
    unaCondicion: true,
    unaCondicion: false,
}

console.log(miObjeto)
console.log(miObjeto.unNumero) //Asi imprime solamente el valor de la propiedad y no todo el objeto
console.log(miObjeto.unString)
console.log(miObjeto.unaCondicion)

//Arreglo
//Los arreglos pueden contener elementos de cualquier tipo dentro de el

//Arreglo Vacio []
const arrVacio = []

//Arreglo
const arr = [1, 2, 'Hola', 'Mundo', miObjeto, miObjeto.unNumero]

console.log(arrVacio, arr)

//Como agregar mas elementos a los arreglos.
//Push, significa empujar pero en este caso agregara un elemento en el arreglo. Llamamos al arreglo seguido de un punto seguido de Push Agregando así elementos en el arreglo al final y tambien se le pueden agregar variables. Una lista es un subconjunto de Array ya que en la lista los elemtos deben ser iguales osea del mismo Tipo d elo contrario sera considerado como una Array.
arr.push(5)

console.log(arr)

arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push('Hola')
arrVacio.push(miPrimeraVariable)


console.log(arrVacio)









