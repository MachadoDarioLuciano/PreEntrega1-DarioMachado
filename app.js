// Array de productos con SKU, precio, nombre, imagen y categoría
const productos = [
    { sku: '001', nombre: 'Manzana', precio: 100, imagen: 'images/manzana.jpeg', categoria: 'Fruta' },
    { sku: '002', nombre: 'Banana', precio: 55, imagen: 'images/banana.jpg', categoria: 'Fruta' },
    { sku: '003', nombre: 'Zanahoria', precio: 33, imagen: 'images/zanahoria.jpeg', categoria: 'Verdura' },
    { sku: '004', nombre: 'Naranja', precio: 68, imagen: 'images/naranja.jpeg', categoria: 'Fruta' },
    { sku: '005', nombre: 'Frutilla', precio: 80, imagen: 'images/frutilla.jpeg', categoria: 'Fruta' },
    { sku: '006', nombre: 'Pera', precio: 72, imagen: 'images/pera.jpg', categoria: 'Fruta' },
    { sku: '007', nombre: 'Lechuga', precio: 25, imagen: 'images/lechuga.jpeg', categoria: 'Verdura' },
    { sku: '008', nombre: 'Tomate', precio: 35, imagen: 'images/tomate.jpeg', categoria: 'Verdura' },
    { sku: '009', nombre: 'Pepino', precio: 20, imagen: 'images/pepino.jpg', categoria: 'Verdura' },
    { sku: '010', nombre: 'Uva', precio: 90, imagen: 'images/uva.jpeg', categoria: 'Fruta' }
];

let carrito = [];
let total = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(sku) {
    const producto = productos.find(p => p.sku === sku);
    carrito.push(producto);
    guardarCarritoEnStorage();
    actualizarCarrito();
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    const listaCarrito = document.querySelector('#lista-carrito');
    listaCarrito.innerHTML = '';
    carrito.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });
    total = carrito.reduce((sum, item) => sum + item.precio, 0);
    document.querySelector('#total').textContent = total;
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    total = 0;
    guardarCarritoEnStorage();
    actualizarCarrito();
}

// Función para mostrar los productos en la página
function mostrarProductos() {
    const productosContainer = document.querySelector('#productos');
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Categoría: ${producto.categoria}</p>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito('${producto.sku}')">Agregar al Carrito</button>
        `;
        productosContainer.appendChild(div);
    });
}

// Función para guardar el carrito en Local Storage
function guardarCarritoEnStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar el carrito desde Local Storage
function cargarCarritoDeStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCarrito();
    }
}

// Llamar a la función para mostrar los productos y cargar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    cargarCarritoDeStorage();
});
