function bookstore(){

}


class Book{
  constructor(Título, Género, Autor, Leído, FechaLeído){
      this._Título = Título;
      this._Género = Género;
      this._Autor = Autor;
      this._Leído = Leído;
      this._FechaLeído = FechaLeído;
  }

  get Título(){
      return this._Título;
  }

  set Título(Título){
      this._Título = Título;
  }

  get Género(){
      return this._Género;
  }
  
  set Género(Género){
      this._Género = Género;
  }

  get Autor(){
      return this._Autor;
  }
  
  set Autor(Autor){
      this._Autor = Autor;
  }

  get Leído(){
      return this._Leído;
  }
  
  set Leído(Leído){
      this._Leído = Leído;
  }

  get FechaLeído(){
      return this._FechaLeído;
  }
  
  set FechaLeído(FechaLeído){
      this._FechaLeído = FechaLeído;
  }

  datosDelLibro(){
      return 'Título: '+this._Título+'<br>'+'Género: '+this._Género+'<br>'+'Autor: '+this._Autor+'<br>' 
      +'Leído: '+this._Leído+'<br>'
      +'Fecha: '+this._FechaLeído;
  }
}

let libro1 = new Book("Eragon", "Christopher Paollini", true , Date());
document.getElementById("libro1").innerHTML = libro1.datosDelLibro();

let libro2 = new Book(" Eldest", "Christopher Paollini", false , Date());
document.getElementById("Brisingr").innerHTML = libro2.datosDelLibro();

let libro3 = new Book(" El legado", "Christopher Paollini", false , Date());
document.getElementById("libro3").innerHTML = libro3.datosDelLibro();

let libro4 = new Book("Leonora Carrington", "Elena Poniatowska", false , Date());
document.getElementById("libro4").innerHTML = libro4.datosDelLibro();


var i = 0;

class BookList {
  constructor(){
    this._Books = [];
  }
  _Read(){
    var cont = 0;
    for(let i=0; i<this._Books.length; i++){
      if(this._Books[i]._Leído === true){
        cont++;
      }
    }
    return cont;
  }
  _NotRead(i){
    return this._Books.length-i;
  }
  _NextBook(){
    let j = i+1;
    while(j < this._Books.length){
      if(this._Books[j]._Leído !== false){
        i++;
      }else{
        return this._Books[j];
      }
      j++;
    }
  }
  _CurrentBook(){
    while(this._Books[i]._Leído !== false){
      i++;
    }
    return this._Books[i];
  }
  _LastBook(){
    return this._Books[this._Books.length-1];
  }
  add(Book){
    this._Books.push(Book);
  }
  finishCurrenBook(vari){
    //console.log(vari)
    vari._Leído = true;
    vari._FechaLeído = Date.now();
    document.getElementById("libro1").innerHTML = libro1.datosDelLibro();
    document.getElementById("libro2").innerHTML = libro2.datosDelLibro();
    document.getElementById("libro3").innerHTML = libro3.datosDelLibro();
    document.getElementById("libro4").innerHTML = libro4.datosDelLibro();
    document.getElementById("libro5").innerHTML = libro5.datosDelLibro();
  }
}
let booklist = new BookList();
booklist.add(libro1);
booklist.add(libro2);
booklist.add(libro3);
booklist.add(libro4);
booklist.add(libro5);
console.log(booklist._Books);

var act = booklist._Read();

function printRead(){
  document.getElementById("leido").innerHTML = ("cantidad de libros leidos:)
}
console.log("Cantidad de libros leidos: ",act);
console.log("Cantidad de libros no leidos: ",booklist._NotRead(act));
console.log("Libro que lees actualmente: ",booklist._CurrentBook()._Título);
console.log("Libro siguiente: ",booklist._NextBook()._Título);
console.log("Ultimo libro de tu Booklist: ",booklist._LastBook().Título);
booklist.finishCurrenBook(booklist._CurrentBook());
console.log(booklist._Books);
console.log("Libro que lees actualmente: ",booklist._CurrentBook()._Título);
console.log("Libro siguiente: ",booklist._NextBook()._Título);
console.log("Ultimo libro de tu Booklist: ",booklist._LastBook().Título);