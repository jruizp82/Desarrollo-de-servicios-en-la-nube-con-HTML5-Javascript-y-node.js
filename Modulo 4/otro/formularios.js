var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/preguntas', function(req, res){
    res.send(
        '<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
             '<meta charset="UTF-8">' +
         '</head>' +
             '<title>Preguntas y Respuestas</title>' +
         '<body>' +
             '<h1>Formularios de Preguntas</h1>' +
             '<form method="post" action="/respuestas">' +
                 '¿Quién descubrió América?  ' +
                 '<input type="hidden" name="id" value="america"/>' +
                 '<input type="text" name="nombre" placeholder="Responda aquí"/>' +
                 '<br><br>' +
                 '<input id="p1" type="submit" value="Enviar"/>' +				 
             '</form>' +
             '<form method="post" action="/respuestas">' +
			 	 '<br>' +	
                 '¿Capital de Portugal?  ' +
                 '<input type="hidden" name="id" value="portugal"/>' +
                 '<input type="text" name="capital" placeholder="Responda aquí"/>' +
                 '<br><br>' +
                 '<input id="r2" type="submit" value="Enviar"/>' +
             '</form>' +
         '</body>' +
         '</html>'
    );
});

app.post('/respuestas', function(req, res){

    var resp;

    if(req.body.id == "america") 
    {
        resp = req.body.nombre.toLowerCase(); 
        resp = resp.replace(/ó/g, "o"); 

        if(resp == "cristobal colon" || resp == "colon") 
        {
            res.send('Correcto');
        }
        else res.send(
            'Incorrecto. La respuesta correcta es "Cristóbal Colón"<br><br>'
            + '<a href="/preguntas"> Volver a la página inicial'
            );
        }
    else 
    {
        resp = req.body.capital.toLowerCase(); 

        if(resp == "lisboa")
        {
            res.send('Correcto');
        }
        else res.send(
            'La respuesta correcta es "Lisboa"<br><br>'
            + '<a href="/preguntas"> Volver a la página inicial'
            );
    }

});

app.set('ip', 'localhost');
app.set('port', 3000);

app.listen(app.get('port'), function(){
    console.log("Esperando vista en " + app.get('ip') + ":" + app.get('port') + "/preguntas");
});