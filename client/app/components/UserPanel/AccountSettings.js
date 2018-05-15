import React from 'react';
import { Paper, MenuItem, MenuList, Typography} from 'material-ui';
import {StyledLink} from "../utils/StyledLink";
import Tooltip from 'material-ui/Tooltip';

const SettingsMenu = () => {
	return(
		<Paper>
			<MenuList>
				<StyledLink to={{pathname: "/user/userPanel/overview"}}>
					<MenuItem>Overview</MenuItem>
				</StyledLink>

				<StyledLink to={{pathname: "/user/userPanel/activity"}}>
					<MenuItem>Activity</MenuItem>
				</StyledLink>

				<StyledLink to={{pathname: "/user/userPanel/updatePassword"}}>
					<MenuItem>Update Password</MenuItem>
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
		<div>
			<SettingsTitle/>
			<SettingsMenu/>
		</div>
	);
};

export default AccountSettings;