

// function suma(a, b) {
//     return a+b;
// }

// const resultadoSuma1 =suma(1,2) //para llamar a la función
// const resultadoSuma2 =suma(5,6) 
// const resultadoSuma3 =suma(resultadoSuma1,resultadoSuma2) 

// console.log('resultado', resultadoSuma3);

//CALLBACKS
// Es una función que se va ejecutar al final de una funcón 

function sumar(a, b, cd) {
    const res = a + b
    cd(res)
}

function callback(result){
    // console.log('Resultado', result);
}

// sumar (2,3, callback)

//Las funciones en JS son valores y los podemos pasar como argumentos a otras funciones 

//FAT ARROW FUNTION
//Tienen dos principales benificios no se usa la palabra reservada, y si la función tiene una sola linea no es necesario hacer return

const miFatArrowFuntion = (a, b) => a + b
// console.log('Resultado', miFatArrowFuntion (5,7));

const otraFatArrowFuntion = (a, b) => { //las llaves son para mas de una linea y se debe usa return
    return a + b
}

// console.log('Resultado', otraFatArrowFuntion(5,7));

//FUNCIONES ANONIMAS
//No tiene ningun nombre por lo general la usamos cuando esta va ser usada para otra función. Se usa cuando nosotros no vamos a utilizar esta lógica nuevamente en otra parte de nuestra app. Es permitido pero no es muy recomendable usarla ya que no es reutiizable

sumar(2, 7,function (x){
    console.log('Soy una Función anonima y mi resultado es', x);  
} )



