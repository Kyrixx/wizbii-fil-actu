import React from 'react'
import ReactDOM from 'react-dom'
import UserProfile from './Header/UserProfile.jsx'
import Tags from './Header/Tags.jsx'


export default class Header extends React.Component {
	constructor(props) {
		super(props)

		
	}
	render() {
		return (
			<div className="row publication-header">
				<div className="col-12">
					<UserProfile data={this.props.userProfile}/>
					<Tags data={this.props.tags}/>
				</div>
			</div>
		);
	}
}