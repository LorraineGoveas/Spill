import React from 'react';
import { Paper, Card, CardContent, Grid, Typography, Button} from 'material-ui';

const PostTitle = () => {
	return(
		<Paper>
			<Typography variant={"headline"}>
				Title of Post
			</Typography>
		</Paper>
	);
};

const Comment = () => {
	return(
		<Paper>
			<Typography variant={"caption"} style={{padding: "15px"}}>
				Frodo wrote a comment on another users post. This is a preview of that
				comment.
				This section contains whatever Frodo wrote in reply to this post.
				This is an example post that will be filled later from the database.
				I am making this placeholder long on purpose to indicate this section
				is indeed where comments belong. I hope this is enough to make my
				point. I am now going to copy and paste this to make it longer. Here it comes.
				This section contains whatever Frodo wrote in reply to this post.
				This is an example post that will be filled later from the database.
				I am making this placeholder long on purpose to indicate this section
				is indeed where comments belong. I hope this is enough to make my
				point. I am now going to copy and paste this to make it longer. Here it comes.
			</Typography>
		</Paper>
	);
};

const PostButton = (props) => {
	return(
		<Card>
			<Button>
				<Typography noWrap={"true"} variant={"caption"}>
					{props.label}
				</Typography>
			</Button>
		</Card>
	);
};

const DistanceLabel = (props) => {
	return(
		<Typography noWrap={"true"} variant={"caption"}>{props.label}</Typography>
	);
};

const OptionsForPost = () => {
	return(
		<Grid
			container
			spacing={8}
			direction={"row"}
			justify={"center"}
			alignItems={"baseline"}
			wrap={"nowrap"}
		>
			<Grid item xs> <PostButton label={"View Post"}/></Grid>
			<Grid item xs> <DistanceLabel label={"7.2 hours ago"}/></Grid>
		</Grid>
	);
};

const PostDetails = () => {
	return(
		<Grid
			container
			spacing={8}
			direction={"column"}
			justify={"center"}
			alignItems={"flex-end"}
		>
			<Grid item xs style={{alignSelf: "stretch"}} > <PostTitle/></Grid>
			<Grid item xs style={{alignSelf: "stretch"}} > <Comment/></Grid>
			<Grid item xs> <OptionsForPost/></Grid>
		</Grid>
	);
};

const CommentsPreview = () => {
	return(
		<Card>
			<CardContent>
				<Grid
					container
					spacing={24}
					direction={"row"}
					justify={"flex-start"}
					alignItems={"flex-start"}
					wrap={"noWrap"}
				>
					<Grid item xs> <PostDetails/> </Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default CommentsPreview;