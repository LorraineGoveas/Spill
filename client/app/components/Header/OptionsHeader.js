import React from 'react';
import { Grid, Button } from 'material-ui';
import { AccountPopover } from "./AccountPopover";

/*
All props are passed down by Header
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
				<Button
					color={"inherit"}
					href={"/"}
					onClick={() => {props.onClick("home", "/")}}>
					Home
				</Button>
			</Grid>
			<Grid item xs={mobileSize} sm={2}>
				<Button
					color={"inherit"}
					onClick={() => {props.onClick("browse", "/")}}>
					Browse
				</Button>
			</Grid>
			<Grid item xs={mobileSize} sm={2}>
				<Button color={"inherit"}
						href={"/search/results"}
						onClick={() => {props.onClick("search", "/search/results")}}>
					Search
				</Button>
			</Grid>
			<Grid item xs={mobileSize} sm={2}>
				<Button
					color={"inherit"}
					href={"/"}
					onClick={() => {props.onClick("help", "/")}}>
					Help
				</Button>
			</Grid>
			<Grid item xs={mobileSize} sm={3}>{/*EMPTY. This is for right-aligning the Account Button*/}</Grid>
			<Grid item xs={mobileSize} sm={1}>
				<AccountOption/>
			</Grid>
		</Grid>
	)
};

export {OptionsHeader}