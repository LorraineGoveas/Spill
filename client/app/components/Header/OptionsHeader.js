import React from 'react';
import { Grid, Button } from 'material-ui';
import { AccountPopover } from "./AccountPopover";
import {StyledLink} from "../utils/StyledLink";
import Tooltip from 'material-ui/Tooltip';
/**
 * All props are passed down by Header
 */

const optionsHeaderStyle = {
	minHeight: "48px",
};

const SignInOption = (props) => {
	return(
		<div>
			<Button color={"inherit"} onClick={props.handleSignInClick}> Sign In </Button>
		</div>
	)
};

const OptionsHeader = (props) => {
	const mobileSize = 6;
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
			style={optionsHeaderStyle}
		>
			<Grid item xs={mobileSize} sm={2}>
				<StyledLink to={{pathname: "/"}}>
					<Button
						style={{color: "white"}}
						onClick={() => {props.onClick("home", "/")}}>
						Home
					</Button>
				</StyledLink>
			</Grid>

			<Grid item xs={mobileSize} sm={2}>
				<Tooltip title={"Warning: Browse is not implemented yet"}>
					<StyledLink to={{pathname: "/"}}>
						<Button style={{color: "white"}}
								onClick={() => {props.onClick("browse", "/")}}>
							Browse
						</Button>
					</StyledLink>
				</Tooltip>
			</Grid>

			<Grid item xs={mobileSize} sm={2}>
				<StyledLink to={{pathname: "/search/results"}}>
					<Button
						style={{color: "white"}}
						onClick={() => {props.onClick("search", "/search/results")}}>
						Search
					</Button>
				</StyledLink>
			</Grid>

			<Grid item xs={mobileSize} sm={2}>
				<Tooltip title={"Warning: Help is not implemented yet"}>
					<StyledLink to={{pathname: "/"}}>
						<Button
							style={{color: "white"}}
							onClick={() => {props.onClick("help", "/")}}>
							Help
						</Button>
					</StyledLink>
				</Tooltip>
			</Grid>

			<Grid item xs={mobileSize}
				  sm={2} lg={3}>{/*EMPTY. This is for right-aligning the Account Button*/}</Grid>
			<Grid item xs={mobileSize} sm={1}>
				<AccountOption/>
			</Grid>
		</Grid>
	)
};

export {OptionsHeader}