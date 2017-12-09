/*El objeto pelicula Debera tener ID, titulo, descripcion, año, duracion, actores, director
Debera tener metodos para editar todas sus propiedades, menos su ID, y para los actores tendra que ir agregando uno a uno*/

var Pelicula= function(id,titulo,descripcion,anio,duracion,actores,director){
	this.id=id;
	this.titulo=titulo;
	this.descripcion=descripcion;
	this.anio=anio;
	this.duracion=duracion;
	this.actores=actores;
	this.director=director;

	editarTitulo=function(titulo){
		this.titulo=titulo;
	}

	editarDescripcion=function(descripcion){
		this.descripcion=descripcion;
	}

	editarAnio=function(anio){
		this.anio=anio;
	}

	editarDuracion=function(duracion){
		this.duracion=duracion
	}

	agregarActor=function(actor){
		this.actores.push(actor);
	}

	editarDirector=function(director){
		this.director=director;
	}
}

var lotr=new Pelicula("1","Lord Of The Rings","Frodo debe destruir el Anillo Unico para que no caiga en manos de Sauron",2001,120,["Elijha Wood","Vigo Mortensen"],"James Cmaeron");
console.log(lotr.id);
console.log(lotr.titulo);
console.log(lotr.descripcion);
console.log(lotr.anio);
console.log(lotr.duracion);
console.log(lotr.actores);
console.log(lotr.director);

lotr.editarTitulo("El Señor de los Anillos - La Comunidad del Anillo");
lotr.editarDescripcion("Primera entrega de la trilogia de J.R.R. Tolkien");
lotr.agregarActor("Sean Bean");
lotr.agregarActor("Liv Taylor");

console.log(lotr.id);
console.log(lotr.titulo);
console.log(lotr.descripcion);
console.log(lotr.anio);
console.log(lotr.duracion);
console.log(lotr.actores);
console.log(lotr.director);