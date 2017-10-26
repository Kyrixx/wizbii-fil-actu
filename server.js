var express = require('express')
var app = express()
var fs = require('fs') // FileStream Node Module
var child = require('child_process') // ChildProcess Node Module
var { curl } = require('./src/apicall.js')

var { port } = require('./config.js')

app.use(express.static('public')); // Middleware pour définir le dossier "public"

// On cherche notre fichier HTML
app.get('/', (request, response) => {
	fs.readFile('./index.html', (err, data) => {
		if(err) throw err
		response.writeHead(200, 'Content-Type : text/html')
		response.end(data)
	})
})

// Récupération de l'accès token
app.get('/authorize', (request, response) => {
	response.writeHead(200, 'Content-Type : text/json')
	var cmd = 'curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d \'username=decouverte%40wizbii.com&password=decouvertewizbii&client_id=test&grant_type=password\' \'https://api.wizbii.com/v1/account/validate\''
	curl(cmd, (data) => {
		response.end(data["access-token"])
	})
})

// Récupération des données de l'api
app.get('/data', (request, response) => {
	response.writeHead(200, 'Content-Type : text/plain')
	var cmd = 'curl -v -X POST -H "Authorization: Bearer 8edjjh0jsggscgoscokk8ok0gc40ss0" -d \'{}\' \'https://api.wizbii.com/v2/dashboard/?direction=newest\''
	curl(cmd, (data) => {
		response.end(JSON.stringify(data))
	})
})

app.listen(port) // On lance le serveur