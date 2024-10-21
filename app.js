let productos = [];
let carrito = [];
let total = 0;

// Función para cargar los productos desde un archivo JSON
function cargarProductos() {
    fetch('data.json')  // Cargar el archivo JSON
        .then(response => response.json())
        .then(data => {
            productos = data; // Guardar los datos en la variable productos
            mostrarProductos(); // Mostrar los productos en la página
        })
        .catch(error => {
            console.error("Error al cargar los productos: ", error);
        });
}

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

// Simular procesamiento de compra con una promesa y setTimeout
function procesarCompra() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (carrito.length === 0) {
                reject("El carrito está vacío");
            } else {
                resolve("Compra realizada");
            }
        }, 2000); // 2 segundos de espera simulada
    });
}

// Evento para procesar la compra al hacer clic en el botón "Comprar"
document.querySelector('#btn-comprar').addEventListener('click', () => {
    procesarCompra()
        .then((mensaje) => {
            Swal.fire(mensaje);  // Muestra el mensaje de éxito
            vaciarCarrito();  // Vacia el carrito tras la compra
        })
        .catch((error) => {
            Swal.fire(error);  // Muestra el mensaje de error si el carrito está vacío
        });
});

// Llamar a la función para cargar los productos y el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos(); // Llamar a cargar productos desde el archivo JSON
    cargarCarritoDeStorage();
});