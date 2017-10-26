var requests = {
	curl: function(cmd, callback) {	// Execution d'une commande CLI (Requêtes HTTP(S) via curl)
		require('child_process').exec(
			cmd, // Commande à exécuter
			{maxBuffer: 1024 * 1000}, // Augmentation de la taille du buffer pour la récupération des données API
			(error, stdout, stderr) => {
			  if (error) throw error
			  callback(JSON.parse(stdout)) // On renvoie les données API dans la fonction callback (async)
			}
		);
	},

	htmlRequest: function(options, callback) // Execution d'une requête HTTP via le module de NodeJS
	{
	    var req = require('http').request(options, function(res)
	    {
	        var output = '';
	        res.setEncoding('utf8');

	        res.on('data', function (chunk) {
	            output += chunk;
	        });

	        res.on('end', function() {
	            callback(res.statusCode, output);
	        });
	    });

	    req.on('error', function(err) {
	    	console.log(err);
	    });

	    req.end();
	}
}



module.exports = requests