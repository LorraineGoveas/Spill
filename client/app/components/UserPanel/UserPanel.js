import React from 'react';
import { Paper, Grid } from 'material-ui';
import UserProfile from "./UserProfile";
import AccountSettings from "./AccountSettings";
import CommentsPreview from "./Comments";
import RecentActivity from "./RecentActivity";

/**
 * The layout of this page consists of nested Grid Containers
 * The left side (Account Settings) is a vertical Grid Container
 * The right side is also a vertical Grid container
 * Both of these containers are contained inside MainContainer, which is a horizontal Grid Container
 */

// TODO: Make this responsive, remove hard coded width
// TODO: User Profile and Recent Activity should be grouped. AccountSettings should float left
// TODO: [Important] - Replace content react-style when when settings button is clicked


export class UserPanel extends React.Component{
	render(){
		return(

			<Paper style={{margin: "30px", padding: "20px", minWidth: "700px"}}>
				<Grid
					container
					spacing={24}
					direction={"row"}
					justify={"flex-start"}
					alignItems={"center"}
				>
					<Grid item xs={3}> <AccountSettings/> </Grid>
					<Grid item xs> <UserProfile/> </Grid>
				</Grid>
				<RecentActivity/>
				<CommentsPreview/>
			</Paper>
		);
	}
}