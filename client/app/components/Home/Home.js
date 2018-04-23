import React, { Component } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from 'material-ui';
import { DummyPreview } from "./DummyPreview";

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
	return(
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

	}

	componentDidMount() {
		// TODO: Fetch
	}
	componentWillUnmount() {
		// TODO: Destroy
	}

	render() {
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
				</div>
			</div>
		);
	}
}

export default Home;
