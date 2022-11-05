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

const mensajeOculto = [
    [72,101,108,108,111],
    [42,44,43,46,39],
    [87,111,114,108,100],
    [42,58,41,42,42]
]

verMatriz(mensajeOculto);

//convertir cada elemento en la matriz a su valor de tipo caracter
//mostrar la matriz obtenida

/*

    Requisitos

    X convertir cada elemento en un caracter
    X mostrar el resultado
        X mostrar la matriz
*/

// CTRL + espacio -> MENU DE SUGERENCIAS COMPORTAMIENTOS/OTRAS COSAS IMPORTANTES
/**
 * Decodifica la matirz recibida 
 * @param {Array <Array>} matrizCodificada codigo numericos de tabla ascci a decodificar
 * @returns el resultado de la matriz decodificada
 */
function decifrarMatriz(matrizCodificada){
    let matrizResultado = [];
    let vectorFila = [];
    matrizCodificada.forEach((fila) => {
        fila.forEach(colElm => {
            /* colElm = String.fromCharCode(colElm); */
            vectorFila.push(  String.fromCharCode(colElm)  );
        });
        matrizResultado.push( vectorFila );
        vectorFila = [];
    });
    return matrizResultado;
}


verMatriz( decifrarMatriz(mensajeOculto) );