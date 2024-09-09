// Array que contiene el inventario de productos
let inventario = [
  { nombre: "Manzanas", precio: 1500, cantidad: 30 },
  { nombre: "Naranjas", precio: 1700, cantidad: 25 },
  { nombre: "Bananas", precio: 2000, cantidad: 40 }
];

// Función para mostrar el inventario
function mostrarInventario() {
  console.log("Inventario de la verduleria:");
  inventario.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto.nombre} - Precio: $${producto.precio} - Cantidad: ${producto.cantidad}`);
  });
}

// Agregar un nuevo producto al inventario
function agregarProducto() {
  let nombre = prompt("Ingrese el nombre del nuevo producto:");
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));
  let cantidad = parseInt(prompt("Ingrese la cantidad disponible:"));
  
  inventario.push({ nombre, precio, cantidad });
  console.log(`Producto ${nombre} agregado al inventario.`);
}

// Actualizar la cantidad de un producto existente
function actualizarCantidad() {
  mostrarInventario();
  let indexProducto = parseInt(prompt("Ingrese el número del producto que desea actualizar:")) - 1;
  
  if (indexProducto >= 0 && indexProducto < inventario.length) {
    let nuevaCantidad = parseInt(prompt(`Ingrese la nueva cantidad para ${inventario[indexProducto].nombre}:`));
    inventario[indexProducto].cantidad = nuevaCantidad;
    console.log(`Cantidad de ${inventario[indexProducto].nombre} actualizada a ${nuevaCantidad}.`);
  } else {
    console.log("Producto no encontrado.");
  }
}

// Inicio del simulador
function menu() {
  let opcion;
  do {
    opcion = prompt(
      "Bienvenido a la tienda. Seleccione una opción:\n1. Mostrar inventario\n2. Agregar producto\n3. Actualizar cantidad\n4. Salir"
    );
    
    switch(opcion) {
      case "1":
        mostrarInventario();
        break;
      case "2":
        agregarProducto();
        break;
      case "3":
        actualizarCantidad();
        break;
      case "4":
        console.log("Gracias por usar el sistema de inventario.");
        break;
      default:
        console.log("Opción no válida.");
    }
  } while (opcion !== "4");
}

// Ejecutar el menú
menu();
