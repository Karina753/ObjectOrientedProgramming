
// Declaracion de objetos
/*
var persona1 = {
  nombre:"Guillermo",
  apellido:"Chang",
  id: 1234,

}

var persona2 = {
  nombre:"Ariadna",
  apellido:"Cadena",
  id: 5678,
}

var persona3 = {
  nombre:"Marco",
  apellido:"Castro",
  id: 9012,
}

console.log(`La primera persona es: ${persona1.nombre}, la segunda persona es: ${persona2.nombre} y la tercera persona es: ${persona3.nombre} `);
*/

//Declaracion de class
/*
class Persona {
  constructor (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}

let persona1 = new Persona("Guillermo", "Chang", 34);

let persona2 = new Persona("Ivar","Alvarez",18);

let persona3 = {
  nombre:"Miguel",
  apellido:"Santiago",
  edad: 24
}

console.log(persona2);
console.log(persona1.nombre,persona1.apellido,persona1.edad);
console.log(persona3.nombre,persona3.apellido,persona3.edad);
*/
//ejemplo
/*
class Rectangle{
  constructor (height, width){
    this.height = height;
    this.width = width;
  }
  // Getter
  get area(){
    return this.calArea();
  }
  // Method
  calArea(){
    return this.height * this.width;
  }
}
 const square = new Rectangle (10,10);
 const rectangle = new Rectangle (20,30);

 console.log( square.calArea());//100
 console.log (rectangle.area);

 */

 // METODOS JSON , stringify: convierte un objeto o valor en de javascript en una cadena json
// pase: analiza una cadena JSON, contruyendo el valos JAVAScript u objeto descrito por la cadena.

 

var cadena = '{"participantes":['+'{"nombre" : "guillermo", "apellido" :"chang"},'+'{"nombre":"raul","apellido":"sanchez"},'+'{"nombre":"karina","apellido":"sanchez"}]}';

var objeto = JSON.parse(cadena);
console.log(cadena.participantes[2].nombre);
