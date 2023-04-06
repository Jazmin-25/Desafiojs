//Ejercicio 1 escribir una funcion que determine si el número es primo
console.log("Desafio 1")
function esPrimo(numero){

    if(numero <=1){
        return false;
    }

    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            return false;
        }
    }
    return true;
}

console.log(esPrimo(2));//true
console.log(esPrimo(7)); //true
console.log(esPrimo(10));  //false
console.log(esPrimo(15)); //false
console.log(esPrimo(29)); //true
console.log(esPrimo(11)); //true
console.log(esPrimo(8)); //false
console.log(esPrimo(5));//true
///
var datoA =110;
var datoB =20;
var datoC =5;

if(datoA > datoB){
    resultado ="La condición se cumplio";

    if (datoC < datoB){
        resultado = "Evaluación anidada verdadera";
    } else {
        resultado = "No se cumplio la evaluación anidada";
    }

}   else {
    resultado = "La condición no se cumplio";
}
console.log("El resultado de la evaluación anidada es: ", resultado);
//Ejercicio 2 revisa si los arreglos son iguales con un true y sino con false
console.log("Desafio 2")
function sonSimilares(arregloA, arregloB) {
    if(arregloA.length !== arregloB.length) {
        return false;
    }
    for(let indice = 0, total = arregloA.length; indice <= total; indice++){
        if(arregloA[indice] !== arregloB[indice]){
            return false;
        }
    }
    return true;
}

console.log(sonSimilares([1,2,3,4,5,8,5,3,2,8,9,3], [5,7,8,4,2,1,4,3,7,8,4,6]));
console.log(sonSimilares([1,2,3], [1,2,3]));
console.log(sonSimilares(["gato","perro"], ["perro","gato"]));
console.log(sonSimilares(["ingles","español","frances"], ["ingles","español","frances"]));
console.log("Desafio 3 crear num aleatorio") //hacer un número aleatorio con math
function numAleatorio(numeroA, numeroB){
    return Math.floor(Math.random()* (numeroA-numeroB)+ numeroB);
}
console.log(numAleatorio(5,10)); //no lo quiero en decimal
console.log(numAleatorio(-30,-20));
console.log(numAleatorio(900,10));
console.log(numAleatorio(-2,2));
console.log("Desafio 4 buscar producto")