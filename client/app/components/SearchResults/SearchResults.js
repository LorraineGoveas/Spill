import React from 'react';
import {Paper, Grid, Card, CardContent, Typography, Button} from 'material-ui';
import { Map } from '../Map';

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
			shouldSearch: true
		};
		this.initiateSearch = this.initiateSearch.bind(this);
		this.searchTextChanged = this.searchTextChanged.bind(this);
		this.categoryTextChanged = this.categoryTextChanged.bind(this);
		this.moveTheMap = this.moveTheMap.bind(this);
		this.handleSearchFromHeader = this.handleSearchFromHeader.bind(this);
	}

	componentDidMount() {
		const { sampleInfo } = this.props.location.state; // Boilerplate for receiving props via Link
		this.setState({
			searchInput: sampleInfo,
			searchKey: sampleInfo,
		});
		console.log("State: " + this.state.searchInput);
		console.log("Sample Info: " + sampleInfo);
	}


	handleSearchFromHeader() {
		console.log(this.state.searchInput);
		console.log(this.state.searchKey);
		this.initiateSearch();
	}

	moveTheMap(lat, lng) {
		this.setState({
			selectedPlaceLatitude: parseFloat(lat),
			selectedPlaceLng: parseFloat(lng)
		});
	}

	fetchAllResults() {
		fetch(`/api/postRecords/allResults`)
			.then(res => res.json())
			.then(json => {
				this.setState({
					places: json
				});
			});
	}

	fetchResultsWithSearchKey(searchKey) {
		fetch(`/api/postRecords/${searchKey}/locSearch`)
			.then(res => res.json())
			.then(json => {
				this.setState({
					places: json
				});
			});
	}

	fetchResultsWithCategory(category) {
		fetch(`/api/postRecords/${category}/catSearch`)
			.then(res => res.json())
			.then(json => {
				this.setState({
					places: json
				});
			});
	}

	fetchResultsWithSearchAndCategory(searchKey, category) {
		fetch(`/api/postRecords/${searchKey}/${category}/catLocSearch`)
			.then(res => res.json())
			.then(json => {
				this.setState({
					places: json
				});
			});
	}

	// TODO: Prevent this from re-rendering
	initiateSearch() {
		const {searchKey, category} = this.state;
		if (searchKey == '') {
			console.log("KEYS: " + searchKey);
			if (category == '' && searchKey == '') {
				this.fetchAllResults()
			} else if (category == '' && searchKey != '') {
				this.fetchResultsWithSearchKey(searchKey)
			} else if (category != '' && searchKey == '') {
				this.fetchResultsWithCategory(category)
			} else {
				this.fetchResultsWithSearchAndCategory(searchKey, category)
			}
		}

		// event.preventDefault();
	}

	searchTextChanged(event) {
		this.setState({searchKey: event.target.value});
	}

	categoryTextChanged(event) {
		this.setState({category: event.target.value})
	}

	DisplayFetchedData(place, i) {
		const {image_src, location_name, address, city, state, zip, type, status} = place;
		return (
			<div key={i}>
				<SearchResult title={type} previewContent={(
					<div onClick={() => { this.moveTheMap(place.location_lat, place.location_lng)}}>
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

	searchIfNeeded() {
		if (this.state.shouldSearch) {
			this.initiateSearch();
		}
	}

	// TODO: Empty search causes terrible lag
	render(){
		const {selectedPlaceLatitude, selectedPlaceLng, places, searchInput} = this.state;
		this.searchIfNeeded();
		return(
			<div>
				<SearchResultsLabel searchInput={searchInput}/>
				<Paper style={styles.ResultsPost}>
					<MapsContainer latitude={selectedPlaceLatitude} longitude={selectedPlaceLng}/>
					{places.map(this.DisplayFetchedData, this)}
				</Paper>
			</div>
		);
	}
}

export { SearchResults }