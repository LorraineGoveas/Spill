import React from 'react';
import { Grid, Button } from 'material-ui';
import { AccountPopover } from "./AccountPopover";
import {StyledLink} from "../utils/StyledLink";
import Tooltip from 'material-ui/Tooltip';
/**
 * All props are passed down by Header
 */
const SignInOption = (props) => {
	return(
		<div>
			<Button color={"inherit"} onClick={props.handleSignInClick}> Sign In </Button>
		</div>
	)
};
const HomeLink = props => <StyledLink to={{pathname: "/",}} {...props} style={{color:"white"}}/>;
const HazardLink = props => <StyledLink to={{pathname: "/report/issue"}} {...props} style={{color:"white"}}/>;
const SearchLink = props => <StyledLink to={{pathname: "/search/results"}} {...props} style={{color:"white"}}/>;
const HelpLink = props => <StyledLink to={{pathname: "/"}} {...props} style={{color:"white"}}/>;

const OptionsHeader = (props) => {
	const GridItemSettings = {
		mobileItem: {
			item: true,
			xs: 6,
			sm: 2,
		},
		emptyItem: {
			item: true,
			xs: 6,
			sm: 2,
			lg: 3,
		},
		rightItem: {
			item: true,
			xs: 6,
			sm: 1,
		}
	};
	const {mobileItem, emptyItem, rightItem} = GridItemSettings;

	const AccountOption = () => {
		return(
			<div>
				{props.isLoggedIn ? <AccountPopover/> : <SignInOption handleSignInClick={props.handleSignInClick}> Sign In </SignInOption>}
			</div>
		)
	};
	return(
		<Grid
			container
			direction={"row"}
			justify={"flex-start"}
			alignItems={"center"}
			style={{minHeight: "48px",}}
		>
			<Grid {...mobileItem}>
				<Button component={HomeLink} onClick={() => {props.onClick("Home")}}>
					Home
				</Button>
			</Grid>

			<Grid {...mobileItem}>
				<Button component={HazardLink} onClick={() => {props.onClick("Post")}}>
					Post a Hazard
				</Button>
			</Grid>

			<Grid {...mobileItem}>
				<Button component={SearchLink} onClick={() => {props.onClick("Search")}}>
					Search
				</Button>
			</Grid>

			<Grid {...mobileItem}>
				<Tooltip title={"Warning: Help is not implemented yet"}>
					<Button component={HelpLink} onClick={() => {props.onClick("Help")}}>
						Help
					</Button>
				</Tooltip>
			</Grid>

			<Grid {...emptyItem}>
				{/*EMPTY. This is for right-aligning the Account Button*/}
				</Grid>
			<Grid {...rightItem}>
				<AccountOption/>
			</Grid>
		</Grid>
	)
};

export {OptionsHeader}