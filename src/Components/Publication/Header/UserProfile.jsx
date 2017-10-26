import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import moment_fr from 'moment/locale/fr'

moment.locale('fr')


export default class UserProfile extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="row publication-header--userprofile">
				<div className="col-sm-1">
					<img className="publication-header--avatar" src={this.props.data.profile.avatar} />
				</div>
				<div className="col-sm-11 publication-header--user">
					<p>{this.props.data.profile.name} - {moment(this.props.data.date).fromNow()}</p>
				</div>
			</div>
		);
	}
}