var express = require('express');
var app = express();

//carga del formulario

app.get('/pregunta1', function(req, res){
	res.send('
			<html>
			<head>
				<title>MOOC 4</title>
			</head>
			<body>
				<form method="GET" action="/america">
					¿Quien descubrio America? <br>
					<input type="text"  name="america" value="Teclee la respuesta" />
					<input type="submit" value="enviar">
					<br>
				</form>
			</body>
			</html>
		');
});

app.get('/respuesta1', function(req, res){
	if (req.query.america == 'colon'){res.send('La respuesta es correcta');}
	else{res.send('La respuesta es incorrecta');}
})

app.get('/pregunta2', function(req, res){
	res.send('
			<html>
			<head>
				<title>MOOC 4</title>
			</head>
			<body>
				<form method="GET" action="/portugal">
					¿Cual es la capital de Portugal? <br>
					<input type="text"  name="portugal" value="Teclee la respuesta" />
					<input type="submit" value="enviar">
					<br>
				</form>
			</body>
			</html>
		');
});

app.get('/respuesta2', function(req, res){
	if (req.query.portugal == 'Lisboa'){res.send('La respuesta es correcta');}
	else{res.send('La respuesta es incorrecta');}
})