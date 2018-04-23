import React from 'react';
import { Button } from 'material-ui';
import { Search } from '@material-ui/icons';
import { Paper,FormControl} from 'material-ui';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import {SearchResults} from "../SearchResults/SearchResults";

// HEADER
class SearchField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			places: [],
			searchKey: '',
			category: '',
			selectedPlaceLatitude: 37.3382,
			selectedPlaceLng: -121.8863,
			dropDownOpen: false
		};

		this.searchSomething = this.searchSomething.bind(this);
		this.searchTextChanged = this.searchTextChanged.bind(this);
		this.categoryTextChanged = this.categoryTextChanged.bind(this);
	}

	searchSomething() {
		const {searchKey, category} = this.state;
		this.setState({
			places: []
		});
	}

	searchTextChanged(event) {
		this.setState({searchKey: event.target.value})
	}

	categoryTextChanged(event) {
		this.setState({category: event.target.value})
	}

	render() {
		const SearchFunct = () => {
			return(
				<Paper>
					{DisplayFetchedData}
				</Paper>
			);
		};

		return (
			<Paper>
				<FormControl fullWidth
							 // style={{backgroundColor: "red"}}
				>
					<InputLabel> Search </InputLabel>
					<Input endAdornment={
						<InputAdornment>
							<Button size="small" onClick={this.searchSomething} href={"/search/results"}>
								<Search>Search</Search>
							</Button>
						</InputAdornment>
					}/>
				</FormControl>
			</Paper>
		);
	}
}

export { SearchField }