const productos = [
    {id:1, nombre:"zapatillas", precio: "$ " + 1500, img: "./img/productos/zapatillas.jpg"},
    {id:2, nombre: "campera", precio: "$ " + 2000, img:"./img/productos/campera.jpg"},
    {id:3, nombre: "botas", precio: "$ " + 5000, img: "./img/productos/botas.jpg"},
    {id:4, nombre: "celular", precio: "$ "+ 3000, img:"./img/productos/celular.jpg"},
    {id:5, nombre: "bici", precio: "$ " + 15000, img:"./img/productos/bici.jpg"},
    {id:6, nombre: "tv", precio:"$ "+ 50000, img:"./img/productos/tele.jpg"},
];


const listaProductos = document.getElementById("contenedorProductos");

for (const producto of productos) {
    const div= document.createElement(`div`);
    div.innerHTML = `<div class="card">
    <p>${producto.nombre}</p>
    <img src=${producto.img}>
    <h3>${producto.precio}</h3>
    <button>agregar</button>
   </div>` ;
    listaProductos.append (div)
    
}

//función de búsqueda // encuentra elemento 

function searchProd(arr, filtro){
    const encontrado = arr.find((el) => {
        return el.nombre.includes(filtro);
    });
    return encontrado
}
//filter  // array 
function filtroProducto(arr, filtro){
    const filtrado = arr.filter((el) => {
        return el.nombre.includes(filtro);

    });
    return filtrado;
}

//btnSearch / form con el preventDefault
const btnSearch = document.querySelector (`#btnSearchJs`),
 inputSearch = document.querySelector (`#inputSearchJs`),
 contenedor = document.querySelector(`#contenedorSearch`);
 

//evento

btnSearch.addEventListener(`click`, ()=>{
    const filtrado = filtroProducto(productos, inputSearch.value)
    console.log(filtrado);
   
});
//event es un objeto 
contenedor.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const filtrado = filtroProducto(productos, inputSearch.value)
    console.log(filtrado);
   
});

/*   
// Definimos los productos en formato JSON
var productos = [
    { nombre: "Camiseta", precio: 25.99 },
    { nombre: "Zapatillas", precio: 59.99 }
];

// Función para mostrar los productos en la página
function mostrarProductos() {
    var productosDiv = document.getElementById("productos");
    productosDiv.innerHTML = "";

    productos.forEach(function(producto) {
        var productoDiv = document.createElement("div");
        productoDiv.textContent = producto.nombre + " - $" + producto.precio.toFixed(2);
        productosDiv.appendChild(productoDiv);
    });
}

// Función para guardar los productos en localStorage
function guardarProductos() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

// Función para cargar los productos desde localStorage
function cargarProductos() {
    var productosGuardados = localStorage.getItem("productos");
    if (productosGuardados) {
        productos = JSON.parse(productosGuardados);
    }
}

// Al cargar la página, cargar y mostrar los productos
window.onload = function() {
    cargarProductos();
    mostrarProductos();
};

// Al cerrar la página, guardar los productos en localStorage
window.onbeforeunload = function() {
    guardarProductos();
};
*/