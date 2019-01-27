import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class Test extends Component {
	componentDidMount() {
		let params = queryString.parse(this.props.location.search);
		console.log(params);
	}

	render() {
		return (
			<div>
			
			</div>
		)
	}
}
export default withRouter(Test);

