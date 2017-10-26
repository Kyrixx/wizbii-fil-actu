import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App.jsx'
import { htmlRequest } from './apicall.js'
import bootstrap from '../public/css/bootstrap.min.css'
import app_css from '../public/css/app.css'
import config from '../config.js'

// Options de la requête HTML pour la récupération des données de l'api
let htmlOptions = {
	hostname: config.hostname,
	port: config.port,
	path: '/data',
}

let items = {}
htmlRequest(htmlOptions, function(statusCode, data) {
	items = JSON.parse(data)
	ReactDOM.render(
		<App items={items}/>, 
		document.getElementById('app')
	)
})