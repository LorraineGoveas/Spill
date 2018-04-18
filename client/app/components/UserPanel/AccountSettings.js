import React from 'react';
import { Paper, Grid, MenuItem, MenuList, Typography, Button} from 'material-ui';
const SettingsItem = (props) => {
	return(
		<MenuItem><Button><Typography align={"left"}>{props.label}</Typography></Button></MenuItem>
	);
};

const SettingsMenu = () => {
	return(
		<Paper>
			<MenuList>
				<SettingsItem label={"Overview"}/>
				{/*<SettingsItem label={"History"}/>*/}
				<MenuItem><Button href="/user/history"><Typography align={"left"}>History</Typography></Button></MenuItem>
				<MenuItem><Button href="/user/login"><Typography align={"left"}>Login</Typography></Button></MenuItem>
				<SettingsItem label={"Help"}/>
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