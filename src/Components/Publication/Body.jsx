import React from 'react'
import ReactDOM from 'react-dom'
import Attachment from './Body/Attachment.jsx'
import Content from './Body/Content.jsx'


export default class Body extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="col-sm row publication-body">
				<Content data={this.props.content}/>
				<Attachment  data={this.props.attachment}/>
			</div>
		);
	}
}