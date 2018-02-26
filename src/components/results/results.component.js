import React, { Component } from 'react';

class Results extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		}
	}

	render() {
		return this.renderContent();
	}

	renderContent() {
		const {searchValue} = this.props;
		if(searchValue || searchValue.length > 0) {
			return (
				this.state.data.map(function(element){
					return (<a href='/'>{element}</a>);
		    	})
			)
		}
		return null;
	}

	componentDidMount() {
		const url = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=' + this.props.searchValue + '&format=json'
		
	}

	function httpGetAsync(theUrl, callback) {
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function() { 
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            callback(xmlHttp.responseText);
	    }
	    xmlHttp.open("GET", theUrl, true); 
	    xmlHttp.send(null);
	}
}

export default Results;
