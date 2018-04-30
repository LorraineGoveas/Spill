import React from 'react';
import { Typography, Grid, TextField, Button} from 'material-ui';
import { Search } from '@material-ui/icons';
import IconButton from 'material-ui/IconButton';

/*
TopHeader contains the logo, current page, and search bar.
When the user clicks the search button in the search bar, TopHeader should communicate with the
SearchResults page - passing whatever the user entered in the form as props.
 */

const Logo = () => (<Typography variant={"headline"} align={"center"} color={"inherit"}> SPILL </Typography>);

const CurrentPageLabel = (props) => {
	return(
		<Button color={"inherit"} href={props.href}> {props.currentPage} </Button>
	)
};

const searchBarStyle = {
	backgroundColor: "white",
	color: "black",
	textAlign: "center",
	height: "44px",
};

const SearchBar = () => {
	return(
		<Grid
			container
			direction={"row"}
			justify={"flex-start"}
			alignItems={"center"}
			style={searchBarStyle}
		>

			<Grid item xs={10} sm={11}>
				<TextField
					id="search"
					label="Search"
					fullWidth/>
			</Grid>
			<Grid item xs={2} sm> <IconButton> <Search/> </IconButton></Grid>
		</Grid>
	)
};

const TopHeaderStyle = {
	backgroundColor: "black",
	minHeight: "57px"
};

const TopHeader = (props) => {
	return(
		<Grid
			container
			direction={"row"}
			justify={"flex-start"}
			alignItems={"center"}
			style={TopHeaderStyle}
		>
			<Grid item xs={8} sm={2}> <Logo /> </Grid>
			<Grid item xs={4} sm={1}> <CurrentPageLabel currentPage={props.currentPage} href={props.href}/></Grid>
			<Grid item xs={12} sm={8}> <SearchBar/></Grid>
		</Grid>
	)
};
export {TopHeader}