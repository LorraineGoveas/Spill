import React, { Component } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Paper} from 'material-ui';
import { DummyPreview } from "./DummyPreview";
import AddIcon from '@material-ui/icons/Add';
import { Modal } from 'material-ui';
import { CommentBox } from "../Comment/CommentBox";

const CommentsModalStyle = {
	margin: "auto",
	width: "50vw",
	height: "50vh",
};

const PreviewTitle = () => {
	return(
		<div>
			<Typography align={"center"} variant={"display3"}> Latest Posts </Typography>
		</div>
	);
};

const Preview = (props) => {
	return(
		<Card>
			{(props.image === undefined) ? "" :
				(
					<CardMedia image={props.image}
							   style={{
								   backgroundColor: "grey",
								   height: "0",
								   paddingTop: "56.25%",
								   margin: "auto"
							   }}/>
				)
			}
			<CardContent>
				<Typography align={"center"} variant={"headline"}> {props.title} </Typography>
				<Typography align={"center"} component={"p"}> {props.children} </Typography>
			</CardContent>
		</Card>
	);
};

// TODO: image_src with whitespace in filename does not render
function DisplayFetchedData(place, i) {
	const {image_src, location_name, address, city, state, zip, type, status} = place;
	const sizeForMobile = 12; // 1 Item per row on mobile devices
	const desktopSize = 4; // 4 Items per row on desktop screens
	console.log("image source: ", image_src);
	return (
		<Grid key={i} item xs={sizeForMobile} sm={desktopSize}>
			<Preview image={image_src} title={location_name}>
				<h3> {type} </h3>
				<div> {city}, {state} {zip}</div>
				<div> {address} </div>
				<div> {status} </div>
			</Preview>
		</Grid>
	)
}

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false, // Used for CommentsBox Modal
			places: [], // Used for backend
		};
		this.handleClose = this.handleClose.bind(this);
		this.handlePostButtonClick = this.handlePostButtonClick.bind(this);
		this.fetchAllResults = this.fetchAllResults.bind(this);
	}

	handlePostButtonClick() {
		console.log("Clicked");
		this.setState({
			open: true
		})
	}

	handleClose() {
		this.setState({
			open: false
		})
	}

	componentDidMount() {
		this.fetchAllResults(); // Fetch all results
	}

	componentWillUnmount() {
		this.setState({places: []}); // Clear current places state
	}

	fetchAllResults() {
		fetch(`/api/postRecords/allResults`).then(res => res.json()).then(json => {
			this.setState({places: json});
		});
	}

	render() {
		const AddPostButtonStyle = {
			position: "fixed",
			right: "2.5rem",
			bottom: "2.5rem",
		};

		return (
			<div>
				<div style={{margin: "30px", padding: "10px"}}>
					<Grid
						container
						spacing={8}
						direction={"row"}
						justify={"center"}
						alignItems={"center"}
					>
						<Grid item xs={12} sm={12}> <PreviewTitle/> </Grid>
						{this.state.places.map(DisplayFetchedData)}
						<Grid item xs={12} > <hr/> </Grid>
					</Grid>
					<Button
						style={AddPostButtonStyle}
						variant={"fab"}
						color={"secondary"}
						label={"add"}
						onClick={this.handlePostButtonClick}
					>
						<AddIcon/>
					</Button>

					<Modal open={this.state.open} onClose={this.handleClose}>
						<Paper style={CommentsModalStyle}>
							<CommentBox handleCancel={this.handleClose}/>
						</Paper>
					</Modal>
				</div>
			</div>
		);
	}
}

export default Home;
