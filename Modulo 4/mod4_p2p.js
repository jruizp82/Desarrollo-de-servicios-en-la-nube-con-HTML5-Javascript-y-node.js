var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// el middleware de las preguntas... Personalmente hubiese utilizado el 'methodOverride()'
// para llamar al middleware de las respuestas, pero el enunciado especifica que sea con 
// un 'GET'... Paso el indentificador oculto 'id' con el número de pregunta que se contesta.
app.get('/preguntas', function(req, res){
	res.send(
		'<html><body>'
		+ '<h1>Ejercicio P2P Obligatorio del Módulo 4</h1><br>'
		+ '<form method="get" action="/respuestas">'
		+	'<input type="hidden" name="id" value="0"/>'
		+ 	'<h2>1- ¿Quién descubrió América?:</h2>'
		+ 	'<input type="text" name="preg"/>'
		+ 	'<input type="submit" value="Enviar"/>'
		+ '</form><br>'
		+ '<form method="get" action="/respuestas">'
		+	'<input type="hidden" name="id" value="1"/>'
		+ 	'<h2>2- ¿Cuál es la capital de Portugal?:</h2>'
		+ 	'<input type="text" name="preg"/>'
		+ 	'<input type="submit" value="Enviar"/>'
		+ '</form>'
		+ '</body></hmtl>');
});

// éste es el middleware que verifica las respuestas
app.get('/respuestas', function(req, res){

	// matriz con las respuestas que nosotros queramos que sean las buenas...
	var respuestas = ['Cristóbal Colón','Lisboa'];

	// comprobamos las respuestas con las respuestas guardadas en la matriz con el índice que le hemos
	// como parámtro oculto, todo en minúsculas; y dependiendo de esto, sólo cambiamos la parte que
	// corresponda de la frase que debe mostrar... así no ahorramos repetir comprobaciones y más texto.
	if (req.query.preg.toLowerCase() === respuestas[req.query.id].toLowerCase()) {
		texto = "correcta. ¡Felicidades!.";
	} 
	else {
		texto = "incorrecta.<br>La respuesta correcta es <strong>" + respuestas[req.query.id] + "</strong>.";
	}

	res.send('<h3><br>Tu respuesta <i>' + req.query.preg + '</i> es ' + texto
		+ '<br><br><a href="/preguntas">Volver a la página principal</a></h3>');
});

// si el usuario no introduce la ruta válida, da igual porque lo redirijo
// aunque no tiene mucho sentido redirijir a la fuerza a un usuario,
//pero aquí lo hago para que pruebes el programa sí o sí...
app.get('*', function(req,res){res.redirect('/preguntas')});

app.listen(8000);