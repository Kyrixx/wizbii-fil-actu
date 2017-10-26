import React from 'react'
import ReactDOM from 'react-dom'


export default class Tags extends React.Component {
	constructor(props) {
		super(props)
		this.tagList = this.tagList.bind(this)
	}

	tagList(list) {
		let output = [];
		this.props.data.map( (tag, i) => {
			output.push(<a href="#" key={i}>{'#' + tag.name + ' '}</a>)
		})
		return (<div>{output}</div>)
	}

	render() {
		return (
			<div className="row publication-header--tags">
				{this.tagList(this.props.data)}
			</div>
		);
	}
}