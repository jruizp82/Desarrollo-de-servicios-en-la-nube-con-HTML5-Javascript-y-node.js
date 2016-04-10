function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;
 
  return {
    // Devuelve el nombre de la agenda
    titulo: function() { 
      return _titulo; 
    },
    
    // Mete un nuevo nombre y teléfono en la agenda
    meter: function(nombre, tf) { 
      _contenido[nombre]=tf; 
    },
    
    // Devuelve el teléfono de un nombre de la agenda
    tf: function(nombre) { 
      return _contenido[nombre]; 
    },
    
    // Borra el teléfono de un nombre de la agenda
    borrar: function(nombre) { 
      delete _contenido[nombre]; 
    },

    // Lista todos los nombres y teléfonos de la agenda
    listar: function() {
      var listado = ""; // Variable que almacenará el string con todos los nombres y teléfonos
      for (var nombre in _contenido) { //bucle for in para iterar en todo el objeto
        listado = listado + nombre + ", " + _contenido[nombre] + "\n";
      }
      console.log(listado) // Muestra el listado por pantalla
    }, 
    
    // Convierte a JSON el objeto
    toJSON: function() { 
      return JSON.stringify(_contenido);}
  }
}

var amigos = agenda ("Amigos", { Pepe: 113278561, José: 157845123, Jesús: 178512355 }); // Crea una agenda y la almacena en amigos

amigos.listar(); // llama al metodo listar para mostrar la agenda de amigos por consola