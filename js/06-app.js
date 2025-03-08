const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// con every todos los elmentos deben cumplir la condicion para true
// VERSION DEL AND
const resultado = carrito.every( producto => producto.precio < 500);
console.log(resultado);


// al menos uno se debe cumplir VERSION DEL OR
const resultado2 = carrito.some( producto => producto.precio < 500);
console.log(resultado);