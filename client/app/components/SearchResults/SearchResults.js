import React from 'react';
import { Paper, Card, Typography } from 'material-ui';
import { Map } from '../Map';
import  { GridListTile } from 'material-ui/GridList';
import { OverlayForFetchedData } from "../Home/HomeComponents";
import GridList from 'material-ui/GridList';

const SearchResultsLabel = (props) => {
	const Label = (props) => (
		<Typography
			variant="display1"
			align="center"
			style={{padding: "20px"}}>
			{props.text}

			<b>{props.input}</b>
		</Typography>
	);

	if (!props.searchInput) {
		return (<Label text={"All Results"}/>)
	} else {
		return(<Label text={"Search Results for: "} input={props.searchInput}/>)
	}
};

const MapsContainer = (props) => {
	const MapCardStyle = {
		right: "0",
		top: "10em",
		height: "100%",
	};

	const MapElementStyle = {
		height: `100%`,
		width: '100%',
	};

	return(
		<Map
			center={{lat:props.latitude, lng:props.longitude}}
			zoom={12}
			containerElement={ <Card style={MapCardStyle}/> }
			mapElement={ <div style={MapElementStyle}/> }
		/>
	);
};

function displayFetchedData(place, i) {
	const {image_src, location_name, address, city, state, zip, type, status,} = place;
	const coordinates = {

		// Webstorm complains about this, but this is the only way to get it to work

		latitude: parseFloat(place.location_lat),
		longitude: parseFloat(place.location_lng),
	};

	const Description = () => (
		<div>
			{type}
			<br/>
			{city}, {state} {zip}
			<br/>
			{address}
			<br/>
			{status}
		</div>
	);

	const FetchedImageSettings = {
		src: image_src,
		alt: location_name,
		style: {
			width: "100%",
			height: "100%",
			objectFit: "cover",
		}
	};

	const GridListStyles = {
		cellHeight: 255,
		cols: 2,
		transform: 'translateZ(0)',
		style: {
			marginTop: "24px",
			marginLeft: "24px",
			marginRight: "24px",
			marginBottom: "24px",
		}
	};

	return (
		<Paper key={i}
			   style={{
				   padding: "12px",
				   margin: "24px",
			   }}>
			<Typography variant={"headline"} align={"center"}> {type} </Typography>
			<GridList {...GridListStyles}>
				<GridListTile cols={1}>
					<img {...FetchedImageSettings}/>
					<OverlayForFetchedData title={location_name}>
						<Description/>
					</OverlayForFetchedData>
				</GridListTile>

				<GridListTile cols={1}>
					<MapsContainer latitude={coordinates.latitude} longitude={coordinates.longitude}/>
				</GridListTile>
			</GridList>
		</Paper>
	);
}

class SearchResults extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			searchInput: '',
			places: [],
			searchKey: '',
			category: '',
			dropDownOpen: false,
			shouldSearch: true,
			didFetch: false,
		};

		this.performNewSearch = this.performNewSearch.bind(this);
		this.initiateSearch = this.initiateSearch.bind(this);
		this.searchTextChanged = this.searchTextChanged.bind(this);
		this.categoryTextChanged = this.categoryTextChanged.bind(this);
		this.handleSearchFromHeader = this.handleSearchFromHeader.bind(this);
	}

	componentDidMount() {
		if (this.props.location.state) {
			const { inputSearch, shouldSearch} = this.props.location.state;
			this.setState({
				searchInput: inputSearch,
				searchKey: inputSearch,
				shouldSearch: shouldSearch,
			});
		} else {
			this.setState({
				searchInput: "",
				searchKey: "",
				shouldSearch: true,
			});
		}

	}

	performNewSearch(input) {
		this.setState({
			searchInput: input
		});
		this.initiateSearch();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.location.state) {
			const { inputSearch } = this.props.location.state;
			// If the previous search input is not equal to the current search input,
			// perform a new search with the updated input
			if (!(prevState.searchInput === inputSearch)) {
				this.performNewSearch(inputSearch)
			}
		}
	}

	handleSearchFromHeader() {
		this.initiateSearch();
	}

	fetchAllResults() {
		console.log("Fetching all results");
		fetch(`/api/postRecords/allResults`).then(res => res.json()).then(json => {
			this.setState({places: json});
		});
	}

	fetchResultsWithSearch(searchKey) {
		fetch(`/api/postRecords/${searchKey}/SearchAnything`)
			.then(res => res.json())
			.then(json => {
				this.setState({
					places: json
				});
			});
	}

	initiateSearch() {
		const {searchKey} = this.state;
		// console.log("initiateSearch()");

		if (searchKey != ''){
			this.fetchResultsWithSearch(searchKey)
		} else if (searchKey == ''){
			this.fetchAllResults()
		}

	}

	searchTextChanged(event) {
		this.setState({searchKey: event.target.value});
	}

	categoryTextChanged(event) {
		this.setState({category: event.target.value})
	}

	render(){
		const {places, searchInput} = this.state;
		return(
			<div>
				<SearchResultsLabel searchInput={searchInput}/>
				{places.slice(0,30).map(displayFetchedData, this)}
			</div>
		);
	}
}

export { SearchResults }