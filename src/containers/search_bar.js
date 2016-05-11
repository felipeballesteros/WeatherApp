import React, { Component } from 'react';

import { Connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component {

	constructor(props){
		super(props);

		this.state = { term: '' };
	}

	onInputChange(event){
		this.setState({ term : event.target.value});
	}

	onFormSubmit(event){
		event.preventDefault();

		//We need to go and fetch weather data

	}

	render(){

		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange.bind(this)}
				/>

				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>

			</form>
		);
	}
}