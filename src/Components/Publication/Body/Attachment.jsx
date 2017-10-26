import React from 'react'
import ReactDOM from 'react-dom'


export default class Attachment extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="row publication-body--attachement">
				<img src={this.props.data.picture} alt={this.props.data.title} />
			</div>
		);
	}
}