
class Persona{
  constructor ( nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }
  mensaje (){
    return `El nombre de la persona es : ${ this.nombre} y tiene una edad de: ${ this.edad}`;
}
}

function imprimirDatos(){
  let persona1 = new Persona (document.getElementById("nombre").value, document.getElementById("edad").value)
  console.log(persona1.nombre, persona1.edad);
  alert(persona1.nombre + " " + persona1.edad);
};

