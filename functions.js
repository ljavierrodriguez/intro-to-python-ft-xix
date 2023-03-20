// Functions
/* 

function funcName (args) {
    sentencias
}

variable = function(args){
    sentencias
}

variable = (args) => {
    sentencias
} 

*/

function saludo(){
    console.log("Hola Mundo");
}

let sumar = function(a, b) {
    return a + b;
}

let restar = (a, b = 5) => a - b;