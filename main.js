// Filtrar números pares: Dada una lista de números, crea una función en JavaScript que recorra la lista y filtre solo los números pares. Devuelve una nueva lista que contenga únicamente los números pares encontrados.
let filtrarPares = (lista) =>{
    let pares = [];
    for(let i = 0; i < lista.length; i++){
        if(lista[i] % 2 == 0){
            pares.push(lista[i])
        }
    }
    return pares;
}

console.log(filtrarPares([1,2,3,4,5,6]));
console.log(filtrarPares([1,2,10,3,8,6]));
