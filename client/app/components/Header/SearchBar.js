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

	// TODO: Handle invalid input appropriately. At the moment this is just a proof of concept
	searchTextChanged(event) {
		if (event.target.value.includes("@")) {
			console.log("Invalid input");
			this.setState({
				invalidInput: true,
			})
		} else {
			this.setState({
				invalidInput: false,
			})
		}
		this.setState({
			searchKey: event.target.value
		})
	}

	handleKeyPress(event) {
		const {history} = this.props;
		if (event.key === "Enter") {
			if (this.props.location.pathname === "/search/results/") {
				// TODO: Find a better solution instead of reloading, as this version is slow
				window.location.reload();
			}
			history.push({
				pathname: "/search/results/",
				state: {
					sampleInfo: this.state.searchKey,
					shouldSearch: true,
				}
			})
		}
	}

	render() {
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
				label: "Search",
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

		const SearchIcon = () => ( <IconButton> <Search/> </IconButton>);
		return (
			<Grid {...gridContainer}>

				<Grid {...searchGridItem}>
					<TextField {...searchField} error={this.state.invalidInput} onKeyPress={this.handleKeyPress} onChange={this.searchTextChanged}/>
				</Grid>

				<Grid {...searchIcon}>
					<Link to={{
						pathname: "/search/results/",
						state: {
							sampleInfo: this.state.searchKey,
							shouldSearch: true,
						}}}>
						<SearchIcon/>
					</Link>
				</Grid>
			</Grid>
		)
	}
}

const SearchBar = withRouter(WrappedSearchBar);
export default SearchBar