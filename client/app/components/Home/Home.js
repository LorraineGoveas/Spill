import React, { Component } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Paper} from 'material-ui';
import { DummyPreview } from "./DummyPreview";
import AddIcon from '@material-ui/icons/Add';
import { Modal } from 'material-ui';
import {CommentBox} from "../Comment/CommentBox";

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
								   backgroundColor: "red",
								   height: "0",
								   paddingTop: "56.25%",
								   margin: "auto"
							   }}/>
				)
			}
			<CardContent>
				<Typography align={"center"} variant={"headline"}> {props.title} </Typography>
				<Typography align={"center"} component={"p"}> {props.content} </Typography>
			</CardContent>
		</Card>
	);
};

function displayPreviews() {
	const xsItemSize = 12; // 1 Item per row on mobile devices
	const smItemSize = 4; // 4 Items per row on desktop screens
	return (
		DummyPreview.map((preview) => {
			const {image, title, content} = preview;
			return(
				<Grid key={preview.id} item xs={xsItemSize} sm={smItemSize}>
					<Preview image={image} title={title} content={content}/>
				</Grid>
			)
		})
	)
}

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.handleClose = this.handleClose.bind(this);
		this.handlePostButtonClick = this.handlePostButtonClick.bind(this);
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
		// TODO: Fetch
	}

	componentWillUnmount() {
		// TODO: Destroy
	}

	render() {
		const AddPostButtonStyle = {
			position: "fixed",
			right: "2.5rem",
			bottom: "2.5rem",
		};

		// const AddPostButton = () => {
		// 	return(
		// 		<div >
		// 			<Button style={AddPostButtonStyle} variant={"fab"} color={"secondary"} label={"add"}><AddIcon/></Button>
		// 		</div>
		// 	);
		// };

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
						{displayPreviews()}
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
							<CommentBox/>
						</Paper>
					</Modal>
				</div>
			</div>
		);
	}
}

export default Home;
