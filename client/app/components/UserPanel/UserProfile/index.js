import React from 'react';
import { Paper, Card, CardContent, Grid, Typography, Avatar} from 'material-ui';

const UserProfileLabel = (props) => {
	return(
		<Typography variant={"headline"} color={"textSecondary"}>{props.label}</Typography>
	);
};

const UserActivityLabel = (props) => {
	return(
		<div>
			<Typography variant={"body2"}>
				{props.postCount} Posts
			</Typography>
			<Typography variant={"body2"}>
				{props.commentsCount} Comments
			</Typography>
		</div>
	);
};

const UserProfileDetails = () => {
	return(
		<Grid
			container
			spacing={8}
			direction={"column"}
			justify={"flex-start"}
			alignItems={"stretch"}
		>
			<Grid item xs> <UserProfileLabel label={"Frodo Baggins"}/> </Grid>
			<Grid item xs> <UserProfileLabel label={"San Francisco, CA"}/> </Grid>
			<Grid item xs={4}> <UserActivityLabel postCount="21" commentsCount="47"/> </Grid>
		</Grid>
	);
};

const ProfilePicture = (props) => {
	let size = "15vh";
	return(
		<Avatar style={{width: size, height: size}}>{props.initials}</Avatar>
	)
};

const UserProfile = () => {
	return(
		<Paper style={{padding: "10px", minWidth: "450px"}}>
			<Grid container
				  spacing={8}
				  direction={"row"}
				  justify={"flex-start"}
				  alignItems={"center"}
			>
				<Grid item xs={5}> <ProfilePicture initials={"FB"}/> </Grid>
				<Grid item xs> <UserProfileDetails/> </Grid>
			</Grid>
		</Paper>
	);
};

export default UserProfile;