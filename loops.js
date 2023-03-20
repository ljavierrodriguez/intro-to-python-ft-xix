// Bucles
/* 
for(iterador; condicion; incremento){
    sentencias
}

for(indice in arreglo){
    sentencias
}

for(valor of arreglo){
    sentencias
}

while(condicion){
    sentencias
}

do {
    sentencias
} while (condicion)

*/

let nombres = ["Hugo", "Paco", "Luis"];

for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

for(let indice in nombres){
    console.log(nombres[indice]);
}

for(let nombre of nombres){
    console.log(nombre);
}

let idx = 0;
while(idx < nombres.length){
    console.log(nombres[idx]);
    idx++;
}

let idx2 = 0;
do {
    console.log(nombres[idx2]);
    idx2++;
} while(idx2 < nombres.length);


const datos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for(let row = 0; row < datos.length; row++){
    for(let col = 0; col < datos[row].length; col++){
        console.log(datos[row][col]);
    }
}

for (let idx1 in datos){
    for(let idx2 in datos[idx1]){
        console.log(datos[idx1][idx2]);
    }
}

for(let row of datos){
    for(let col of row){
        console.log(col)
    }
}