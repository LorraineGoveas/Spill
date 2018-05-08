import React from 'react';
import { Paper, Grid, MenuItem, MenuList, Typography} from 'material-ui';
import {StyledLink} from "../utils/StyledLink";
import Tooltip from 'material-ui/Tooltip';
const SettingsMenu = () => {
	return(
		<Paper>
			<MenuList>
				<StyledLink to={{pathname: "/user/login"}}>
					<MenuItem>Overview</MenuItem>
				</StyledLink>

				<StyledLink to={{pathname: "/user/history"}}>
					<MenuItem>History</MenuItem>
				</StyledLink>

				<StyledLink to={{pathname: "/user/login"}}>
					<MenuItem>Login</MenuItem>
				</StyledLink>

				<Tooltip title={"Warning: Help is not implemented yet"}>
					<StyledLink to={{pathname: "/user/userPanel"}}>
						<MenuItem>Help</MenuItem>
					</StyledLink>
				</Tooltip>

			</MenuList>
		</Paper>
	);
};

const SettingsTitle = () => {
	return(<Typography variant={"subheading"} align={"center"}> Account Settings</Typography>);
};

const AccountSettings = () => {
	return(
		<Grid
			container
			spacing={8}
			direction={"column"}
			justify={"flex-start"}
			alignItems={"stretch"}
		>
			<Grid item xs> <SettingsTitle/> </Grid>
			<Grid item xs> <SettingsMenu/> </Grid>
		</Grid>
	);
};

export default AccountSettings;