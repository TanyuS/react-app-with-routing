import React, { Component } from 'react';

class ResultElement extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
	    	<div className="content">
				{this.props.name}
	    	</div>
		);
	}

}

export default ResultElement;
