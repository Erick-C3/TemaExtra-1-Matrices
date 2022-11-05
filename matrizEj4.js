/**
 * Muestra una matriz correctamente
 * @param {Array} matriz a mostrar
 */
 function verMatriz(matriz){
    let matrizString = ``;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
           matrizString += `\t[${matriz[i][j]}]`
        }
        matrizString += "\n\n";
    }
    console.log(matrizString);
}

const taTeTi1 = [
    [" ","O","X"],
    ["O","X","O"],
    ["X","X","O"]
]

const taTeTi2 = [
    ["X","X","O"],
    ["X","X","X"],
    ["O","O","X"]
]

verMatriz(taTeTi1);

/*
Desarrollar un algoritmo para evaluar
el estado del juego actual (SOLO cuando se gana con linea diagonal)
El programa debe mencionar quien gano
Tiene que funcionar con ambas matrices
 */

function chequearResultado(matrizTateti){
    if (chquearDiagonalSur(matrizTateti) || chequearDiagonalNorte(matrizTateti) ) {
        console.log("el jugador que escribe con", matrizTateti[1][1], "gano");
    }else{
        console.log("no gano nadie");
    }
}

chequearResultado(taTeTi1);

function chquearDiagonalSur(matrizTateti) {
    return (verificarIgualdad(matrizTateti,0,0,1,1) && verificarIgualdad(matrizTateti,0,0,2,2));
}

function chequearDiagonalNorte(matrizTateti) {
    return (verificarIgualdad(matrizTateti,0,2,1,1) && verificarIgualdad(matrizTateti,0,2,2,0));
}

/**
 * Compara dos casillas y verifica si el contenido es igual
 * @param {Array<Array>} matrizTateti a usar 
 * @param {*} f1 fila de la primer casilla a verificar
 * @param {*} c1 columna de la primer casilla a verificar
 * @param {*} f2 fila de la segunda casilla a verificar
 * @param {*} c2 columna de la segunda casilla a verificar
 * @returns true si las casillas son iguales, caso contrario falso
 */
function verificarIgualdad(matrizTateti, f1, c1, f2, c2){
    return (matrizTateti[f1][c1] == matrizTateti[f2][c2]);
}
