import React, { Component } from 'react';
import './search-form.css';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		const {value} = this.props;
		
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<div className="form__title">Search</div>
				<input defaultValue={value} ref={(input) => { this.textInput = input; }} name="artist" />
				<button className="form__button" type='submit'>find</button>
			</form>
		);
	}

	handleSubmit(e) {
		e.preventDefault();

		const requestText = this.textInput.value;
		
		if(requestText && requestText.length > 0) {
			this.props.onSearch(requestText);
		}
	}
}

export default SearchForm;
