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
		backgroundColor: "white",
		color: "black",
		textAlign: "center",
	},
};

const SearchResult = () => {
	const ResultPreview = () => (
		<Grid container spacing={8}>
			<Grid item xs={12}>
				<Paper style={{padding: "10px"}}>
					<Typography variant="subheading" align="center">Post Title</Typography>
				</Paper>
			</Grid>
			<Grid item xs>
				<Paper style={{padding: "10px"}}>
					<Typography variant="caption" align="left">Preview of post</Typography>
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

// Hardcoded width and height for containerElement needs to be fixed
const MapsContainer = (props) => (
	<Map
		center={{lat:props.latitude, lng:props.longitude}}
		zoom={12}
		containerElement={ <Card style={{ height: `500px`, width: '500px' }} /> }
		mapElement={ <div style={{ height: `100%`, width: '100%' }} /> }
	/>
);

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
		}
	}


	//TODO: Populate other fields with data
	render(){
		const {selectedPlaceLatitude, selectedPlaceLng} = this.state;
		const ResultsArea = () => (
			<Grid container
				  direction="column"
				  justify={"center"}
				  alignItems={"stretch"}
				  spacing={8}>
				<Grid item xs> <SearchResult/> </Grid>
				<Grid item xs> <SearchResult/> </Grid>
			</Grid>
		);

		return(
			<div>
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
			</div>
		);
	}
}