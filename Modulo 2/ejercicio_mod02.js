function agenda(titulo, inic){
	var _titulo = titulo;
	var _contenido = inic;
	return{
		titulo: function(){return _titulo;},
		meter: function(nombre, tf){_contenido[nombre]=tf;},
		tf: function(nombre){return _contenido[nombre];},
		borrar: function(nombre){delete _contenido[nombre];},
		toJSON: function(){return JSON.stringify(_contenido);},

        	listar: function(){ //creamos nueva función listar
			var listado = ""; //creamos nueva variable string vacío
            		var i; //creamos nueva variable i, para iterar
        		for(i in _contenido){ //hacemos la iteración del objeto
            		listado = listado + i + ", " + _contenido[i] + "\n";
            		}
			console.log(listado); //imprime en pantalla la lista pedida
		}
    	};
}
var amigos = agenda("Amigos",
	{Pepe: 113278561,
	José: 157845123,
	Jesús: 178512355
	});

amigos.listar(); //llamada al método listado, que imprime la lista solicitada