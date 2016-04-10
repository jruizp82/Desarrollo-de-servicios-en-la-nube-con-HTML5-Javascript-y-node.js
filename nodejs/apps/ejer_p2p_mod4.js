var express = require ('express');

var app = express();

app.get('/preguntas', function(req, res) {
	res.send('<html><body><h1>Preguntas</h1><br>'
		+	 '<form method="get" action="/respuesta">'
		+	 '<input type="hidden" name="id" value="1" /><br>'
		+	 '¿Quién descubrió América?<br> '
		+	 '<input type="text" name="america" /><br>'
		+    '<input type="submit" value="Enviar" /></form><br>'
		+	 '<form method="get" action="/respuesta">'
		+	 '<input type="hidden" name="id" value="2" /><br>'
		+	 '¿Capital de Portugal?<br> '
		+	 '<input type="text" name="portugal" /><br>'
		+    '<input type="submit" value="Enviar" /></form></body></html>');
});

app.get('/respuesta', function(req, res) {

	var respuesta = '';

	if (req.query.id == 1) {
		respuesta = req.query.america.toLowerCase();
		respuesta = respuesta.replace(/ó/g, "o");
		if(respuesta == 'cristobal colon' || respuesta == 'colon') {			
			respuesta = 'La respuesta es correcta.';
		}
		else {
			respuesta = 'La respuesta es incorrecta. La respuesta correcta es Cristobal Colón.';
		}
	}
	else {
		respuesta = req.query.portugal.toLowerCase();
		if(respuesta == 'lisboa') {			
			respuesta = 'La respuesta es correcta.';
		}
		else {
			respuesta = 'La respuesta es incorrecta. La respuesta correcta es Lisboa.';
		}
	}
	res.send('<html><body><h1>Respuesta</h1><br>'
		+	 respuesta + '<br><br>'
		+	 '<a href="/preguntas">Volver a la página inicial</a></body></html');
		
});

app.listen(8000);