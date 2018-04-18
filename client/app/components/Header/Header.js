import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid} from 'material-ui';
import { SearchField } from "./SearchField";

const Title = () => {
	return(
		<Button color='inherit' href="/">
			<Typography variant="title" color="inherit" noWrap={"true"}>
				Spill
			</Typography>
		</Button>
	);
};

const HeaderContents = () => {
	return(
		<Toolbar>
			<Grid
				container
				direction={"row"}
				justify={"center"}
				alignItems={"center"}
			>
				<Grid item xs={12} sm={2}><Title/></Grid>
				<Grid item sm={9}><SearchField/></Grid>
				<Grid item ><Button color='inherit' href="/user/userPanel">Account</Button></Grid>
			</Grid>
		</Toolbar>
	);
};
const Header = () => {
	return (
		<AppBar position="static">
			<HeaderContents/>
		</AppBar>
	);
};

export default Header;