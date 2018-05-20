import React from 'react';
import { Typography, Grid, TextField, Button} from 'material-ui';
import { Search } from '@material-ui/icons';
import IconButton from 'material-ui/IconButton';
import theme from '../Theme';
import {Link} from 'react-router-dom';
import {StyledLink} from "../utils/StyledLink";
import Tooltip from 'material-ui/Tooltip';
import {withRouter} from 'react-router-dom';
import SearchBar from './SearchBar';
/**
 * TopHeader contains the logo, current page, and search bar.
 * When the user clicks the search button in the search bar, TopHeader should communicate with the
 * SearchResults page - passing whatever the user entered in the form as props.
 */
const Logo = () => (
	<Typography variant={"headline"} align={"center"} color={"inherit"}> SPILL </Typography>
);

const CurrentPageLabel = (props) => {
	return(
		<Tooltip title={"Current Page"}>
			<Typography
				variant={"subheading"}
				style={{color: "white", textTransform: "uppercase"}}
			> {props.currentPage} </Typography>
		</Tooltip>
	)
};

const TopHeader = (props) => {
	const TopHeaderSettings = {
		container: true,
		direction: "row",
		justify: "flex-start",
		alignItems: "center",
		style: {
			backgroundColor: theme.palette.primary.dark,
			minHeight: "57px",
		}
	};

	return(
		<Grid {...TopHeaderSettings}>
			<Grid item xs={8} sm={2}> <Logo /> </Grid>
			<Grid item xs={4} sm={1}>
				<CurrentPageLabel currentPage={props.currentPage} href={props.href}/>
			</Grid>
			<Grid item xs={12} sm={8}> <SearchBar/></Grid>
		</Grid>
	)
};
export {TopHeader}