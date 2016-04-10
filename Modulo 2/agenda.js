// JavaScript Document

function agenda (titulo, inic) {
	var _titulo = titulo;
	var _contenido = inic;

	return {
	  titulo: function() {return _titulo;},
	  meter:  function(nombre, tf) {_contenido[nombre]=tf;},
	  tf:     function(nombre) {return _contenido[nombre];},
	  borrar: function(nombre) {delete _contenido[nombre];},
      toJSON: function() {return JSON.stringify(_contenido);},
      //inicio del metodo listar
      listar: function(){
	            var _lista = "";
	            for (var nombre in _contenido) {
		        _lista = _lista + nombre + ", " + _contenido[nombre] + " \n";
		          };
	              console.log(_lista); //imprimimos por pantalla el resultado
	           }
    //fin del metodo listar
	};
  }
  var _amigos = agenda ("Amigos",{ Pepe: 113278561, José: 157845123, Jesús: 178512355});
  _amigos.listar(); //utilizamos el metodo listar sobre _amigos