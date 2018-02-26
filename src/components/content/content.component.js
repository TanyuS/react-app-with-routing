import React, { Component } from 'react';
import './content.css';
import SearchForm from '../search-form/search-form.component';
import Results from '../results/results.component';

class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: ''
		}
	}

	render() {
		return (
	    	<div className="content">
				<SearchForm value={this.state.searchValue} onSearch={this.handleSearch} />
				<div className="results" />
				<Results searchValue={this.state.searchValue} />
	    	</div>
		);
	}

	handleSearch = (inputText) => {
		this.setState({
			searchValue: inputText
		});
	}
}

export default Content;
