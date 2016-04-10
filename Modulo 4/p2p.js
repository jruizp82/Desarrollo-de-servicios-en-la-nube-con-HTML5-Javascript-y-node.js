var express = require('express');
var app = express();

app.get('/preguntas', function(req, res) {
	res.send("<html><body>"
		+ "<h3>Ejercicio P2P módulo 4</h3>"

		+ "<form method ='get' action='/respuesta'>"
		+ "<input type='hidden' name='pregunta' value='america'/>"
		+ "¿Quien descubrió América? &nbsp <input type='text' name='respuesta1' />"
		+ "<input type='submit' value='Responder' />"
		+ "</form>"

		+"<p>"

		+ "<form method ='get' action='/respuesta'>"
		+ "<input type='hidden' name='pregunta' value='lisboa'/>"
		+ "¿Capital de Portugal? &nbsp <input type='text' name='respuesta2' />"
		+ "<input type='submit' value='Responder' />"
		+ "</form>"

		+ "<body><html>")
});

app.get('/respuesta', function(req, res) {
	if(req.query.pregunta === "america") {
		resp = req.query.respuesta1.toLowerCase();
		if(resp === "colón" || resp === "colon") {
			res.send("Correcto, América fue descubierta por Colón."
	 		+ "<p><a href='/preguntas'>Volver a la página inicial</a>");
		} else {
	    	res.send("Incorrecto. " + (resp || '" "') + " no descubrió América."
    		+ "<p><a href='/preguntas'>Volver a la página inicial</a>")
 		}
	}

	if(req.query.pregunta === "lisboa") {
		resp = req.query.respuesta2.toLowerCase();
		if(resp === "lisboa") {
			res.send("Correcto, la capital de Portugal es Lisboa."
	 		+ "<p><a href='/preguntas'>Volver a la página inicial</a>");
		} else {
	    	res.send("Incorrecto. " + (resp || '" "') + " no es la capital de Portugal."
    		+ "<p><a href='/preguntas'>Volver a la página inicial</a>")
 		}
 	}
});

app.listen(8000);
console.log("Servidor escuchando en puerto 8000");
