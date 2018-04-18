import React from 'react';
import { Paper, Card, CardContent, Grid, Typography, Button} from 'material-ui';

const PostTitle = () => {
	return(
		<Typography variant={"headline"}>
			Title of Post
		</Typography>
	);
};

const PostPreview = () => {
	return(
		<Typography variant={"subheading"}>
			Preview of the contents of this post
		</Typography>
	);
};

const PostButton = (props) => {
	return(
		<div>
			<Button variant={"raised"} color={"secondary"}>
				<Typography noWrap={"true"} variant={"caption"}>
					{props.label}
				</Typography>
			</Button>
		</div>
	);
};

const TimeSincePost = (props) => {
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
			<Grid item xs> <TimeSincePost label={"5.2 hours ago"}/></Grid>
		</Grid>
	);
};

const PostContents = () => {
	return(
		<Grid
			container
			spacing={8}
			direction={"column"}
			justify={"center"}
			alignItems={"flex-end"}
		>
			<Grid item xs style={{alignSelf: "stretch"}} > <PostTitle/></Grid>
			<Grid item xs style={{alignSelf: "stretch"}} > <PostPreview/></Grid>
			<Grid item xs> <OptionsForPost/></Grid>
		</Grid>
	);
};

const PostImage = () => {
	return(
		<Paper style={{height: "150px"}}>
			<Typography align={"center"}> Image </Typography>
		</Paper>
	);
};

export const RecentPost = () => {
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
					<Grid item xs> <PostContents/> </Grid>
					<Grid item xs={4}> <PostImage/></Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};