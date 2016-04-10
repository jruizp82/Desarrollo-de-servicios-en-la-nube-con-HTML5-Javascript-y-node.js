var fs = require('fs');		// importa módulo file system

if (process.argv.length < 4) {	// parámetros mal
	console.log('	syntax: "node merge.js <dest> <f1> <f2> .. <fn>');
	process.exit();		// finaliza proceso node
}

for (var i = 3; i < process.argv.length; i++) {		// recorre todos los archivos f1, f2, .. fn
	fs.readFile(
		process.argv[i],			// lee el archivo fi
		function(err, data) {
			fs.appendFile(
				process.argv[2],	// lo concatena en el archivo destino
				data,
				function (err) {
					if (err) throw err;
					console.log('concatenación correcta de ficheros');
				}
			);
		}
	);		
}

console.log('ficheros concatenados en el fichero destino');