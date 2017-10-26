import React from 'react'
import ReactDOM from 'react-dom'


export default class Content extends React.Component {
	constructor(props) {
		super(props)
		this.formatText = this.formatText.bind(this)
	}

	// Fonction servant à formater le contenu de la publication
	formatText(text) {
		// On met en forme les liens http(s)
		let www_reg = /(https?:\/\/[^\s]+)/g;
	    let blocks = text.split(www_reg);
	    let message = blocks.map( (block, key) => {
	      if (block.match(www_reg)) {
	        return <a href={block} key={key}>{block}</a>;
	      } else {
	        return block;
	      }
	    })
	    
	    // On gère les retours chariots
	    let output = message.map( block => {
	    	if(typeof(block) === "string") 
		    	return block.split('\n').map( (item, key) => {
				  	return <span key={key}>{item}<br/></span>
				})
		    else
		    	return block
	    })

		return output
	}

	render() {
		return (
			<div className="row publication-body--content">
				<div className="col-12">
					<p>{this.formatText(this.props.data)}</p>
				</div>
			</div>
		);
	}
}

