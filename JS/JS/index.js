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

//OPERADORES 
//Para los operadores solo usaremos los tipos de datos: String, Number, Boolean, objetos y arreglos.

//OPERACIONES MATEMATICAS
const suma = 1 + 2 //Suma +
const resta = 1 - 2 //Resta -
const multiplicar = 3 * 2 //multiplicación *
const dividir = 9 /3  //División /

console.log(suma, resta, multiplicar, dividir)

const modulo = 10 % 3  //Modulo % divide los valores que se asignen pero nos va a retornar nos el valor que sobra 10/3 =3 3*3 9 para 10 falta 1

console.log(modulo)

//Valores de incremento o de decremento

let num = 5
//Const no nos deja cambiar le valor de las variables
num++ //Para incrementar de uno en uno nuestra variable
num++
num++
num++
num++
num-- //Para decrementar de uno en uno nuestra variable
num-- 
num-- 
num-- 
num-- 
console.log(num)

//Operadores de asignación
//Nos permite poder realizar una operación matematica en el numero que hemos definido y cambiar inmediatamente su valor.
num += 5 //Asi incrementa en la cantidad que yo le asigne
num -= 5 //Asi decrementa en la cantidad que yo le asigne
num *= 5 //Asi decrementa en la cantidad que yo le asigne
num /= 2 //Asi decrementa en la cantidad que yo le asigne

console.log(num)

//Operadores de Comparación
//Nos permiten hacer comparaciones entre nuestros distintos tipos de datos, hacen mas sentido cuando estamos viendo en control de flujo, para saber que decision tomar en nuestro flujo de aplicaciones. Los operados de comparación siempre nos van a devolver Boolean


const resultado1 = 5 === 6 //Igual estricto
const resultado2 = 5 == '5' //No es un igual extricto, compara un numero con el contenido dentro de un String, compara diferentes tipos de valores.

const resultado3 = 5 < 6 //Menor que
const resultado4 = 5 > 6 //Mayor que

const resultado5 = 5 <= 6 //Menor igual que
const resultado6 = 5 >= 4  //Mayor igual que

const resultado7 = 5 !== 6  //Desigualdad Extricta
const resultado8 = 5 !== '5'  
const resultado9 = 5 != '5' //No es una desigualdad extricta, compara un numero con el contenido dentro de un String, compara diferentes tipos de valores.

console.log(resultado1, resultado2)
console.log(resultado3, resultado4)
console.log(resultado5, resultado6)
console.log(resultado7, resultado8, resultado9)

//Operadores Lógicos
//Existen 3 operadores Lógicos or ||, and &&, not !

//Or ||
const resultadoOr = false || true //Evalua el primer valor que retorne toma uno o otro valor y lo vuelve true de lo contrario seria false se utiliza solo con valores true || false. Evalua el primer valor y si es True deviuelve true, el unico momento que Or para que el operador Or sea false es que los dos valores sean False. Busca el primer True. Se pueden encadenar muchos valores dentro de la cadena. Evalua hasta que encuentra True si no devuelve false.

console.log(resultadoOr)

//And &&
const resultadoAnd = true && false //Funciona igual que el operador Or solo que evalua ambas opciones antes de devolver el resultado si una de las dos es false devuelve false. Busca el primer True y para que sea true solo puede tener valores true. Busca el primer True. Se pueden encadenar muchos valores dentro de la cadena. Si encuentra un solo false devolvera false.

console.log(resultadoAnd)

//Not !
const resultadoNot = ! false // Tienen una particularidad va a  dar vuelta que al valor que este tiene en caso que sea un boolean, si se evalue true dara False y si se evalua false dara True
console.log(resultadoNot)


const resultadoOr2 = false || false || 'Hola' || 'Mundo' // Evalua hasta el primer elemento que evalua en true, todos los tipos de datos evaluan en true a esepción de cero. No se puede realizar en el operador de and
console.log(resultadoOr2)




//CONTROL DE FLUJO!
//Nos permite a nosotros poder realizar iteraciones o evaluar condiciones. Podemos evaluar una condición de true o de false y  si esta tiene el valor de True aplicar lógica de lo contrario si ess false esta nos podemos saltar la lógica.

//Control de Flujo: if
//Evalua lo que hay dentro del parentesis y si esta evalua en true ya evalua lo que hay dentro de las llaves de lo contrario lo salta.

if (false) {
    console.log('Estoy dentro de un if!');
}

const edad = 5
if (edad > 5 && edad < 18) {
    console.log('El niño puede jugar');
} else { // sino se cumple la condición del if ejecute el else
    console.log('El niño no puede jugar :(');
}

//Control de Flujo: While
//Es una instrucción que se va a quedar iterando infinitamente hats que nosotros le indiquemos algo. Evalua el parentesis y mientras sea True seguira corriendo hasta que llegue a algun false. 

let x = 0
while (x < 5) {
    console.log(x)
    x++ //Incrementa su valor hasta que llegue al valor de false
}

let y = true
while (y) {
    console.log(x, 'Corrio 1 vez')
    y= false //Corre una vez y al cambiar el valor de y sale del while
}

console.log('Terminando el loop')

//Si el while evalua en el parentesis true ejecuta las llaves y cuando evalua false sale de la llave.


//Control de flujo: Switch
//Nos permite ejecutar una instrucción u otra instrucción. y dentro de las llaves se empiezan asignar los casos que queremos que el evalue. Y para terminar el ultimo caso siempre dentro de Switch es default que es el caso que se ejecutaria si no es ningun caso asignado.

let z = 2

switch (z) {
    case 1: 
        console.log('Yo soy el caso 1');
        break; //Indica que la ejecucion debe terminar en ese caso.
        
    case 2: 
        console.log('Emmanuel Moreno');
        break;
        
    case 3:
        console.log('Cristhian David');
        break;
            
    default:
        console.log('Salir del programa');
        break;
}


//Control de flujo: For
//Nos permite iterar o encontrarnos dentro de un loop hasta que se cumpla una condición. en el () se le indica las intrucciones que debe de seguir for. Se le deben indicar 3 intrucciones 1.Valor inicial de la variable que vamos a iterar, 2. La condición que se debe cumplir para que el loop se pueda seguir iterando. 3. Operacion que quiero que se realice una vez que termine nuestro loop. Nos permite iterrar sobre nuestros arreglos

for (let i = 0; i < 10; i++) {
    console.log(i)
}

//Accediendo a los elementos de un arreglo con for

const numeros = [1, 2, 'Hola', 4, 5]
//Todos los arreglos que definimos en JS van a tener una propiedad llamada length que nos permite optener el largo de un array. Esto es muy importante para poder acceder a los indices de estos arreglos. Los indices empiezan desde cero.
//console.log(numeros[2]) Para acceder a los elementos de nuestros arreglos

for (let j = 0; j < numeros.length; j++) { //Tenemos que indicar que j debe ser menor al largo que nuestro arreglo teniendo en cuenta los indices y asu¿i lo que nos imprime son los indices de nuestros elementos
    console.log(j)
    console.log(numeros[j]) //Nos imprime todos los elementos dentro de nuestra array
}

//FUNCIONES
// En Js se escriben de dos formas con la palabra reservada fuction seguido del nombre  luego parentesis donde van los argumentos y luego las llaves. Debemos identar de manera correcta nuestro código es demasiado importante.

function iterar (arg1) { //una función recibe los argumentos que permiten cambiar el contenido de manera dinamica de lo que este adentro 
    for (let j = 0; j < arg1.length; j++) {
        console.log(arg1[j])
    }
}

const numeros2 = [1, 2, 'Hola', 4, 5]
const nombres = ['Pedro', 'Juan', 'Cristhian', 'David', 'Emmanuel']

iterar (numeros)
iterar (nombres)



