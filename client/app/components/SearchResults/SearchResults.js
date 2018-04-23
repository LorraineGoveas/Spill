import React from 'react';
import {Paper, Grid, Card, CardContent, Typography, Button} from 'material-ui';
import { Map } from '../Map';

//TODO: Add back SearchResults functionality from pre-styling
const styles = {
	TitleStyle: {
		backgroundColor: "lightGray",
		textAlign: "center",
	},
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


const SearchResultsLabel = (props) => (
	<Typography
		variant="display1"
		align="center"
		style={{padding: "20px"}}>
		Search Results for: <b>{props.searchInput}</b>
	</Typography>
);

export class SearchResults extends React.Component{
	constructor(props){
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

		if(category == '' && searchKey == ''){
			fetch(`/api/postRecords/allResults`)
				.then(res => res.json())
				.then(json => {
					this.setState({
						places: json
					});
				});
		} else if (category == '' && searchKey != ''){
			fetch(`/api/postRecords/${searchKey}/locSearch`)
				.then(res => res.json())
				.then(json => {
					this.setState({
						places: json
					});
				});
		} else if (category != '' && searchKey == ''){
			fetch(`/api/postRecords/${category}/catSearch`)
				.then(res => res.json())
				.then(json => {
					this.setState({
						places: json
					});
				});
		} else {
			fetch(`/api/postRecords/${searchKey}/${category}/catLocSearch`)
				.then(res => res.json())
				.then(json => {
					this.setState({
						places: json
					});
				});
		}
	}

	searchTextChanged(event) {
		this.setState({searchKey: event.target.value})
	}

	categoryTextChanged(event) {
		this.setState({category: event.target.value})
	}
	render(){
		const {selectedPlaceLatitude, selectedPlaceLng} = this.state;
		const MapCardStyle = {
			height: `25em`,
			width: '25em'
		};

		const MapElementStyle = {
			height: `100%`,
			width: '100%'
		};

		const MapsContainer = (props) => (
			<Map
				center={{lat:props.latitude, lng:props.longitude}}
				zoom={12}
				containerElement={ <Card style={MapCardStyle}/> }
				mapElement={ <div style={MapElementStyle}/> }
			/>
		);
		return(
			<div>
				<Button onClick={this.searchSomething}>Search</Button>

				<SearchResultsLabel searchInput={"Wind Damage"}/>

				<Paper style={styles.ResultsPost}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="flex-start"
						spacing={16}
					>
						<Grid item xs={7}><SearchResult/></Grid>
						<Grid item xs={5} style={{alignSelf: "flex-end"}}>
							<div >
								<MapsContainer latitude={selectedPlaceLatitude} longitude={selectedPlaceLng}/>
							</div>
						</Grid>

						<Grid item xs><SearchResult/></Grid>
					</Grid>
				</Paper>

				{this.state.places.map((place, i) =>
					{
						const {image_src, location_name, address, city, state, zip, type, status} = place;
						return (
							<div key={i}>
								<SearchResult title={type} previewContent={location_name}/>
								<div><Button onClick={() => this.moveTheMap(place.location_lat, place.location_lng)}>Select</Button></div>
								<div><img src={image_src}/></div>
								<div>{location_name}</div>
								<div>{address}</div>
								<div>{city}</div>
								<div>{state}</div>
								<div>{zip}</div>
								<div>{type}</div>
								<div>{status}</div>
							</div>
						)}
				)}
			</div>
		);
	}
}

/*
						<div><Button onClick={() => this.moveTheMap(place.location_lat, place.location_lng)}>Select</Button></div>
						<div><img src={place.image_src}/></div>
						<div>{place.location_name}</div>
						<div>{place.address}</div>
						<div>{place.city}</div>
						<div>{place.state}</div>
						<div>{place.zip}</div>
						<div>{place.type}</div>
						<div>{place.status}</div>
 */

/*

				<SearchResultsLabel searchInput={"Wind Damage"}/>
				<Paper style={styles.ResultsPost}>
					<Grid
						container
						direction="row"
						justify="space-between"
						alignItems="flex-start"
						style={{padding: "10px"}}
						spacing={16}>
						<Grid item xs><ResultsArea/></Grid>
						<Grid item xs>
							<MapsContainer latitude={selectedPlaceLatitude} longitude={selectedPlaceLng}/>
						</Grid>
					</Grid>
				</Paper>
 */