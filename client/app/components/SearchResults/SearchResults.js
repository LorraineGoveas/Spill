import React from 'react';
import {Paper, Grid, Card, CardContent, Typography, Button} from 'material-ui';
import { Map } from '../Map';
import Tooltip from 'material-ui/Tooltip';

const styles = {
	ResultsPost: {
		color: "black",
		textAlign: "center",
	},
};

const SearchResult = (props) => {
	const ResultPreview = () => (
		<Grid container spacing={8}>
			<Grid item xs={12}>
				<Paper style={{padding: "10px"}}>
					<Typography variant="subheading" align="center">{props.title}</Typography>
				</Paper>
			</Grid>
			<Grid item xs>
				<Paper style={{padding: "10px"}}>
					<Typography variant="caption" align="left">{props.previewContent}</Typography>
				</Paper>
			</Grid>
		</Grid>
	);

	const ResultButtons = () => (
		<Grid container
			  spacing={8}
			  direction={"row"}
			  justify={"flex-end"}
			  alignItems={"center"}
			  style={{margin: "auto"}}
		>
			<Grid item xs={5}> {/*Empty Space*/} </Grid>
			<Grid item xs>
				<Paper>
					<Button variant="flat" color="default">View Post</Button>
				</Paper>
			</Grid>

			<Grid item xs>
				<Paper style={{padding: "10px"}}>Distance Miles</Paper>
			</Grid>

		</Grid>
	);

	return (
		<Card>
			<CardContent>
				<Grid
					container
					spacing={16}
					direction={'row'}
					justify={'center'}
					alignItems={'flex-start'}
				>
					<Grid item xs={12}><ResultPreview/></Grid>
					<Grid item xs><ResultButtons/> </Grid>
				</Grid>
			</CardContent>
		</Card>
	)
};

const SearchResultsLabel = (props) => {
	if (!props.searchInput) {
		return (
			<Typography
				variant="display1"
				align="center"
				style={{padding: "20px"}}>
				All Results
			</Typography>
		)
	}
	return (
		<Typography
			variant="display1"
			align="center"
			style={{padding: "20px"}}>
			Search Results for: <b>{props.searchInput}</b>
		</Typography>)
};

const MapCardStyle = {
	position: "fixed",
	right: "0",
	top: "10em",
	height: `22.5em`,
	width: '22.5em',
};

const MapElementStyle = {
	height: `100%`,
	width: '100%',
};

const MapsContainer = (props) => (
	<Map
		center={{lat:props.latitude, lng:props.longitude}}
		zoom={12}
		containerElement={ <Card style={MapCardStyle}/> }
		mapElement={ <div style={MapElementStyle}/> }
	/>);


function displayFetchedData(place, i) {
	// console.log("displayFetchedData()");
	const {image_src, location_name, address, city, state, zip, type, status} = place;
	{/*<div onClick={() => { this.moveTheMap(place.location_lat, place.location_lng)}}>*/}
	return (
		<div key={i}>
			<SearchResult title={type} previewContent={(
				<div>
					<div><img src={image_src}/></div>
					<div>{location_name}</div>
					<div>{address}</div>
					<div>{city}</div>
					<div>{state}</div>
					<div>{zip}</div>
					<div>{type}</div>
					<div>{status}</div>
				</div>
			)}/>
		</div>
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
			selectedPlaceLatitude: 37.3382,
			selectedPlaceLng: -121.8863,
			dropDownOpen: false,
			shouldSearch: true,
			didFetch: false,
		};
		this.initiateSearch = this.initiateSearch.bind(this);
		this.searchTextChanged = this.searchTextChanged.bind(this);
		this.categoryTextChanged = this.categoryTextChanged.bind(this);
		this.moveTheMap = this.moveTheMap.bind(this);
		this.handleSearchFromHeader = this.handleSearchFromHeader.bind(this);
	}

	componentDidMount() {
		// Boilerplate for receiving props via Link
		const { sampleInfo, shouldSearch} = this.props.location.state;
		// console.log("sampleInfo: " + sampleInfo);
		this.setState({
			searchInput: sampleInfo,
			searchKey: sampleInfo,
			shouldSearch: shouldSearch,
		});
	}

	/*
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log("Should update?");
		console.log("current search input: " + this.state.searchInput);
		console.log("search input: " + nextState.searchInput);
		this.setState({
			shouldSearch: true,
			searchInput: nextState.searchInput,
		});
		return false;
	}
	*/

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("didUpdate()");
		// console.log("Prev state: " + prevState.searchInput);
		// console.log("Current input: " + this.props.location.state.sampleInfo);
		// if (this.state.searchInput == '') {
		// 	console.log("Fetching all");
		// 	this.fetchAllResults()
		// }

		if (!(prevState.searchInput == this.props.location.state.sampleInfo)) {
			this.setState({
				searchInput: this.props.location.state.sampleInfo,
			});
			// if (this.state.shouldSearch) {
			this.initiateSearch()
		}
	}

	handleSearchFromHeader() {
		this.initiateSearch();
	}

	moveTheMap(lat, lng) {
		this.setState({
			selectedPlaceLatitude: parseFloat(lat),
			selectedPlaceLng: parseFloat(lng)
		});
	}

	fetchAllResults() {
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
		console.log("initiateSearch()");
		
		if (searchKey != ''){
		  this.fetchResultsWithSearch(searchKey)
	    }
	    else if (searchKey == ''){
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
		const {selectedPlaceLatitude, selectedPlaceLng, places, searchInput} = this.state;
		return(
			<div>
				<SearchResultsLabel searchInput={searchInput}/>
				<Paper style={styles.ResultsPost}>
					{/*<MapsContainer latitude={selectedPlaceLatitude} longitude={selectedPlaceLng}/>*/}
					{places.slice(0,30).map(displayFetchedData, this)}
				</Paper>
			</div>
		);
	}
}

export { SearchResults }