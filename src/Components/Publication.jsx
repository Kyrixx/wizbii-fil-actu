import React from 'react'
import ReactDOM from 'react-dom'
import Body from './Publication/Body.jsx'
import Header from './Publication/Header.jsx'
import Footer from './Publication/Footer.jsx'

export default class Publication extends React.Component {
	constructor(props) {
		super(props)
		
		// Réorganisation des données de l'api
		this.state = {
			userprofile: {
				profile: this.props.data.publication.profile,
				date: this.props.data.publication.date_created,
				language: this.props.data.publication.language
			},

			tags: this.props.data.publication.tags,

			attachment: {
				picture: this.props.data.publication.attachment_picture,
				source: this.props.data.publication.attachment_picture_source,
				height: this.props.data.publication.attachment_picture_height,
				width: this.props.data.publication.attachment_picture_width,
				title: this.props.data.publication.attachment_title
			},
			content: this.props.data.publication.content
			/*,
			footer: {
				this.props.data.publication.comments,
				this.props.data.publication.likes,
				this.props.data.publication.shares,
				this.props.data.publication.reports 
			}
			others:{
				this.props.data.publication.data_bag,
				this.props.data.publication.delta,
				this.props.data.publication.external_id,
				this.props.data.publication.language,
				this.props.data.publication.locale,
				this.props.data.publication.type,
				this.props.data.publication.visibility,
				this.props.data.publication.status,
				mentions: this.props.data.publication.mentions
			}*/
		}
	}
	render() {
		if(this.props.data.publication.status === "visible")
			return (
				<div className="publication">
					<Header userProfile={this.state.userprofile} tags={this.state.tags} />
					<Body content={this.state.content} attachment={this.state.attachment}/>
					<Footer />
				</div>
			)
		else
			return <div className="publication">Publication invisible</div>
	}
}

