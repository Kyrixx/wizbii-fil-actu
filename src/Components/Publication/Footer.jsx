import React from 'react'
import ReactDOM from 'react-dom'


export default class Footer extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="row publication-footer">
				<div className="col-12">
					<div className="row publication-footer--buttons-row">
						<button className="btn btn-primary publication-footer--button"><img src="img/like.png" /></button>
						<button className="btn btn-info publication-footer--button"><img src="img/comment.png" /></button>
						<button className="btn btn-warning publication-footer--button"><img src="../img/share.png" /></button>
					</div>
				</div>
				<div className="col-12">
					<div className="row">
						<div className="form-group col-12">
							<textarea className="form-control publication-footer--textarea" placeholder="Write your comment here..."></textarea>
						</div>
					</div>
				</div>
			</div>
		);
	}
}