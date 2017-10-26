import React from 'react'
import ReactDOM from 'react-dom'
import Publication from './Publication.jsx'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.getPublications = this.getPublications.bind(this)
		this.getPublicationDataFromId = this.getPublicationDataFromId.bind(this)
		this.isFromProfile = this.isFromProfile.bind(this)
	}

	// Fonction pour vérifier via le poster_type si la publication vient d'un profil utilisateur
	isFromProfile(publiId) {
		return this.props.items.feed_items.feed_items.find( (it, i) =>  { 
			if (it.id == publiId)
				if(it.type == "publication")  
					return (it.publication.poster_type === "PROFILE")
			else 
				return false
		} )
	}

	// Fonction de récupération des données via l'ID de la publication
	getPublicationDataFromId(publiId) {
		return this.props.items.feed_items.feed_items.find( (it, i) =>  { 
			return ((it.id === publiId)) 
		} )
	}

	getPublications() {
		return this.props.items.display_recipe.feed_item_proxies.map( // On utilise le display_recipe pour obtenir les données dans le bon ordre
			(publi, i) => { 
				if(publi.type === "publication") { // On ne s'occupe que des données de type "publication"
					if(this.isFromProfile(publi.id)) // On ne s'occupe que des publications venant de profile utilisateurs (et non entreprise)
						return <Publication data={ this.getPublicationDataFromId(publi.id) } key={i} />
				}
			}
		)
	}

	render() {
		return (
			<div className="feed">
				{ this.getPublications() }
			</div>
		);
	}
}
