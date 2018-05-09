import React from 'react';
import { Typography, Grid, TextField, Button} from 'material-ui';
import { Search } from '@material-ui/icons';
import IconButton from 'material-ui/IconButton';
import theme from '../Theme';
import {Link} from 'react-router-dom';
import {StyledLink} from "../utils/StyledLink";
import Tooltip from 'material-ui/Tooltip';
import logo from '../../../public/assets/img/SpillLogo.png';
/**
 * TopHeader contains the logo, current page, and search bar.
 * When the user clicks the search button in the search bar, TopHeader should communicate with the
 * SearchResults page - passing whatever the user entered in the form as props.
 */


const Logo = () => (
	<div><table>
		<tr><td>
			<img src={logo} alt="logo_image" height="200" width="250" /></td><td>
			<Typography variant={"headline"} align={"center"} color={"inherit"}> SPILL </Typography></td>
		</tr></table>
	</div>
);

const CurrentPageLabel = (props) => {
	return(
		<StyledLink to={{pathname: props.href}}>
			<Button
				size={"small"}
				style={{color: "white"}}
			> {props.currentPage} </Button>
		</StyledLink>
	)
};

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchKey: "",
		};
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.searchTextChanged = this.searchTextChanged.bind(this);
	}

	searchTextChanged(event) {
		this.setState({
			searchKey: event.target.value
		})
	}

	handleKeyPress(event) {
		if (event.key === "Enter") {
			console.log("Enter");
		}
	}

	render() {
		const SearchBarSettings = {
			container: true,
			direction: "row",
			justify: "flex-start",
			alignItems: "center",
			style: {
				backgroundColor: "white",
				color: "black",
				textAlign: "center",
				height: "44px",
			}
		};

		const SearchBarItemSettings = {
			buttonGridItem: {
				item: true,
				xs: 10,
				sm: 11,
			},
			textField: {
				id: "search",
				label: "Search",
				fullWidth: true,
				value: this.state.searchKey,
			},
			editGridItem: {
				item: true,
				xs: 2,
				sm: 1,
			}
		};

		return(

			<Grid {...SearchBarSettings}>

				<Grid {...SearchBarItemSettings.buttonGridItem}>
					<TextField
						{...SearchBarItemSettings.textField}
						onKeyPress={this.handleKeyPress}
						onChange={this.searchTextChanged}/>
				</Grid>

				<Grid {...SearchBarItemSettings.editGridItem}>
					<Link to={{
						pathname: "/search/results/",
						state: {
							sampleInfo: this.state.searchKey,
							shouldSearch: true,
						}
					}}>
						<Tooltip title={"Note: To get updated search, for now you have to move to a different page and navigate back to this one."}>
						<IconButton> <Search/> </IconButton>
						</Tooltip>
					</Link>
				</Grid>
			</Grid>
		)
	}
}

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