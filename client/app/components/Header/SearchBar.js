import React from 'react';
import { Grid, TextField } from 'material-ui';
import { Search } from '@material-ui/icons';
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class WrappedSearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchKey: "",
			invalidInput: false,
		};

		this.searchTextChanged = this.searchTextChanged.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	searchTextChanged({target: {value}}) {
		// RegEx for letters and numbers
		// Check if search input matches the given RegEx
		const acceptedChars = /^[0-9a-zA-Z]+$/;
		if (value.length > 0 && value.match(acceptedChars) === null) {
			this.setState({
				invalidInput: true,
			})
		} else {
			this.setState({
				invalidInput: false,
			})
		}
		this.setState({
			searchKey: value
		})
	}

	handleKeyPress(event) {
		const {history} = this.props;
		if (event.key === "Enter") {
			if (this.state.invalidInput) { return } // Don't search if the input isn't valid

			if (this.props.location.pathname === "/search/results/") {
				// TODO: Find a better solution instead of reloading, as this version is slow
				window.location.reload();
			}
			history.push({
				pathname: "/search/results/",
				state: {
					inputSearch: this.state.searchKey,
					shouldSearch: true,
				}
			})
		}
	}

	render() {
		const errorText = "Invalid input";

		const Settings = {
			gridContainer: {
				container: true,
				direction: "row",
				justify: "flex-start",
				alignItems: "center",
				style: {
					backgroundColor: "white",
					color: "black",
					textAlign: "center",
					height: "44px",
				}
			},
			searchGridItem: {
				item: true,
				xs: 10,
				sm: 11,
			},
			searchField: {
				id: "search",
				label: this.state.invalidInput ? errorText : "Search",
				fullWidth: true,
				value: this.state.searchKey,
				onChange: this.searchTextChanged
			},
			searchIcon: {
				item: true,
				xs: 2,
				sm: 1,
			}
		};

		const {gridContainer, searchGridItem, searchIcon, searchField} = Settings;
		const SearchLink = props => <Link to={{
			pathname: "/search/results/",
			state: {
				inputSearch: this.state.searchKey,
				shouldSearch: true,
			}}} {...props}/>;

		return (
			<Grid {...gridContainer}>
				<Grid {...searchGridItem}>
					<TextField {...searchField} error={this.state.invalidInput} onKeyPress={this.handleKeyPress} onChange={this.searchTextChanged}/>
				</Grid>
				<Grid {...searchIcon}>
					{/*Disable when input is invalid*/}
					<IconButton component={SearchLink} disabled={this.state.invalidInput}> <Search/> </IconButton>
				</Grid>
			</Grid>
		)
	}
}

const SearchBar = withRouter(WrappedSearchBar);
export default SearchBar