let auto ={
  marca: "volkswagen",
  color: "blanco",
  hp : 110
}
console.log(`Las caracteristicas del auto son: ${auto.marca} ${auto.color} ${auto.hp}`);

let persona ={
  nombre : "karina",
  apellido: "sanchez",
  id: 1234,

  nombreCompleto : function(){
    return this.nombre + " " + this.apellido;
  }
};
console.log(persona.nombreCompleto());

let venta ={
  nombre : "cochito",
  descripción: "cochito de plastico color rosa, al apretarlo emite sonido",
  precio: "$100",
  nombre2 : "cochito",
  descripción2: "cochito de plastico color negro , al apretarlo emite sonido y saca la lengua",
  precio2: "$200",
  

  
  carrito : function(){
    return this.nombre + " " + this.descripción + " "+ this.precio + " " + this.nombre2+ " "+ this.descripción2 + " "+
    this.precio2;
  }
}
console.log(venta.carrito());