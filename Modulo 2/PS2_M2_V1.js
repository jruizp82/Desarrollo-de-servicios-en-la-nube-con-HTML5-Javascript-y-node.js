function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;

  return {
    titulo: function() {return _titulo;},
    meter:  function(nombre, tf) {_contenido[nombre]=tf;},
    tf:     function(nombre) {return _contenido[nombre];},
    borrar: function(nombre) {delete _contenido[nombre];},
    toJSON: function() {return JSON.stringify(_contenido);},
    
	//METODO LISTAR
    
	listar: function(){
              var _lista = "";
              var _separador =",";
			  var _long;
			  var _conta;
			 
			  _long = Object.keys(_contenido).length;	//Permite conocer la longitud de objeto _contenido
			  _conta = 1;								//Para determinar si es el último elemento para cambiar la , por :
			  
			  //console.log("valor de la longitud del objeto contenido " + _long);
			  
			  for (var nombre in _contenido) {
				if (_long === _conta++) { _separador =":" };
				_lista = _lista + nombre + _separador + " " + _contenido[nombre] + " \n";
                };
                console.log(_lista); 
              }
  };
}
var amigos = agenda ("Amigos",{ Pepe: 113278561, José: 157845123, Jesús: 178512355});
amigos.listar(); 