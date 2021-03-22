// Destructuring Objects

const mascota = {
    nombre: 'Tom',
    edad: 10,
    vivo: true,
    razas: ['raza1', 'raza2'],
}

const nombreMascota = mascota.nombre;

const {nombre, edad} = mascota;

console.log(nombre);