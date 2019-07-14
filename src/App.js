import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

// class App extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			people: people,
// 			searchField: ''
// 		}
// 	}

// 	onSearchChange(event){
// 		console.log(event);
// 	}
// 	render() {
// 		return (
// 			<div className='tc'>
// 				<h1>People</h1>
// 				<SearchBox searchChange={this.onSearchChange}/>
// 				<CardList people={ this.state.people }
// 				/>
// 			</div>
// 		);
// 	}
// };

class App extends Component {
		constructor() {
		super()
		this.state = {
			people: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://swapi.co/api/people')
			.then(response=> response.json())
			.then(results => this.setState({ people: people.results }));
}

	onSearchChange= (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredPeople = this.state.people.filter(people => {
			return people.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
			return (
			<div className='tc'>
				<h1>People</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList people={ filteredPeople }
				/>
			</div>
		)	
		}
}

export default App;