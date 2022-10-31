//CREATE
let unVector = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];



//READ-LEER-VER-ACCEDER 
/* console.log( unVector[0][7] );
 */
//READ TIPICO
function mostrarMatrizV2(matriz) {
    let fila = "\n";
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            fila += "\t(" + matriz[i][j] + ")";
        }
        console.log(fila + "\n");
        fila = "";
    }
}

mostrarMatrizV2(unVector);

//UPDATE
unVector[1][1] = 12;
mostrarMatrizV2(unVector);
unVector[1][1] = unVector[2][0];
mostrarMatrizV2(unVector);

//DELETE
unVector[1].splice(1,1);
mostrarMatrizV2(unVector);
//DELETE UPDATE/CREATE
unVector[2].splice(0,1,'x');
mostrarMatrizV2(unVector);


//LIFO - LAST IN FIRST OUT - PILA
//CREATE SI O SI AGREGA AL FINAL
unVector[1].push("Hola");
mostrarMatrizV2(unVector);
//DELETE  SI O SI ELIMINA EL ULTIMO
unVector[0].pop();
mostrarMatrizV2(unVector);



