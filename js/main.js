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
const listaProductos = [
    {
        id: 1,
        producto: "mantequilla",
        marca: "Iberia",
        fechaExpira: "2023-04-07"
    },
    {
        id: 2,
        producto: "leche",
        marca: "Alpura",
        fechaExpira: "2023-04-09"
    },
    {
        id: 3,
        producto: "huevos",
        marca: "Rancho Grande",
        fechaExpira: "2023-05-07"
    },
    {
        id: 4,
        producto: "pan",
        marca: "Bimbo",
        fechaExpira: "2023-08-07"
    },
    {
        id: 5,
        producto: "cerveza",
        marca: "Coronona",
        fechaExpira: "2023-09-17"
    },
    {
        id: 6,
        producto: "salsa picante",
        marca: "Valentina",
        fechaExpira: "2024-04-07"
    },
]
function buscarProductoId(id) {  //buscar por id
    return listaProductos.filter((producto) => producto.id === id);
}
console.log(buscarProductoId(3));

function buscarMarca(marca){ //buscar por marca
    return listaProductos.filter((producto) => producto.marca === marca);
}
console.log(buscarMarca("Iberia"));
//buscar por rango de fecha

function buscarProductocoPorFecha (fechaA, fechaB){
    fechaA = new Date (fechaA);
    fechaB = new Date (fechaB);
    return listaProductos.filter((producto)=>{
        const fechaExpira = new Date(producto.fechaExpira);
        return fechaExpira <= fechaA && fechaExpira >= fechaB;
    });
}
console.log(buscarProductocoPorFecha("2023-05-07", "2023-04-09"));

console.log("Desafio 5 la fila ordenada")
const arreglo = [];
setInterval(agregarElemento, 8000, () =>Math.floor(Math.random()* 100));
function agregarElemento(numeroAleatorio) {
    const prioridad = numeroAleatorio();
    arreglo.push(prioridad);
    arreglo.sort((a, b)=> a - b);
   // console.log(arreglo);
}
console.log("Desafio 6 el precio promedio")
const casas = [{
    id: 1,
    habitaciones: 4,
    tamaño: 200,
    localidad:"San José",
    precio: 150000
},
{
    id: 2,
    habitaciones: 2,
    tamaño: 75,
    localidad:"San José",
    precio: 80000
},
{
    id: 3,
    habitaciones: 3,
    tamaño: 100,
    localidad:"San José",
    precio: 80000
},
{
    id: 4,
    habitaciones: 3,
    tamaño: 110,
    localidad:"San José",
    precio: 80000
}, 
{
    id: 5,
    habitaciones: 2,
    tamaño: 75,
    localidad:"San José",
    precio: 80000,
},
{
    id: 6,
    habitaciones: 3,
    tamaño: 110,
    localidad:"Herendia",
    precio: 85000
},
{
    id: 7,
    habitaciones: 2,
    tamaño: 60,
    localidad:"Cartago",
    precio: 40000
},
{
    id: 8,
    habitaciones: 4,
    tamaño: 200,
    localidad:"Cartago",
    precio: 140000
}
];
const acumulado = {};
for(const casa of casas){
    if(!acumulado[casa.localidad]){
        acumulado[casa.localidad] ={acumuladoPrecio: 0 , contador: 0};
        }
        acumulado[casa.localidad].acumuladoPrecio += casa.precio;
        acumulado[casa.localidad].contador += 1;
}
console.log(acumulado);

const localidades = Object.keys(acumulado);
for(const localidad of localidades){
    console.log(localidad +  " "  +  Math.floor(acumulado [localidad].acumuladoPrecio / acumulado[localidad].contador));
}
console.log("Desafio 7 orden alfabetico")
const apellidosNombre = [
    "Ariadna Islas",
    "Francisco Vega",
    "Patricia Huerta",
    "Emma Gonzalez",
    "Carlos Camilo",
    "Yesenia Solano",
    "Manuel Hernandez",
    "Pedro García"
];
const ordenados = apellidosNombre.sort((a, b)=>{
  const apellidosNombreA = a.split(" ")[0];  
  const apellidosNombreB = b.split(" ")[0];  
  return apellidosNombreA < apellidosNombreB? -1 : apellidosNombreA > apellidosNombreB? 1 : 0;
});
console.log(ordenados);
console.log("Desafio 8 Carrito de compras")
class Producto{
    _nombre;
    _precio;
    _fechaVencimiento;
    constructor(nombre, precio, _fechaVencimiento){
        this._nombre = nombre;
        this._precio = precio;
        this. _fechaVencimiento = new Date (fechaVencimiento);
    }
}
function carritocompra(productos){
    const hoy = new Date();
    const productosValidos = productos.filter((producto) =>producto._fechaVencimiento > hoy);
    return productosValidos.reduce((acumulador,producto) => acumulador += producto._precio, 0);
}
console.log(carritocompra);
console.log("Desafio 9 Calculadora");
