import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Modal} from 'material-ui';
import { SearchField } from "./SearchField";
import { LoginArea } from "./LoginArea";
import {AccountPopover} from "./AccountPopover";
const Title = (props) => {
	return(
		<Button color='inherit' href="/">
			<Typography variant="title" color="inherit">
				{props.label}
			</Typography>
		</Button>
	);
};

// TODO: Compare user input with database login fields to see if it's valid
function validateCredentials() {
	return true;
}

class HeaderLayout extends React.Component {
	constructor(props) {
		super(props);
		// TODO: isLoggedIn should be fetched from the database
		this.state = {
			isLoggedIn: false,
			open: false
		};
		this.handleClose = this.handleClose.bind(this);
		this.handleSignInButton = this.handleSignInButton.bind(this);
		this.handleNextButton = this.handleNextButton.bind(this);
	}

	handleSignInButton() {this.setState({ open: true });};

	handleClose() {this.setState({ open: false });};

	handleNextButton(e) {
		e.preventDefault();
		if (validateCredentials()) {
			this.setState({ isLoggedIn: true });
			this.handleClose()
		} else {
			// TODO: Handle situation where user enters invalid login or password
			console.log("Invalid Credentials not yet implemented")
		}
	}

	render() {
		const loginModalStyle= {
			position: "absolute",
			right: "0",
			width: "250px",
			marginTop: "50px",
			marginRight: "25px",
		};

		const SignInButton = () => (
			<Button color={"inherit"} onClick={this.handleSignInButton}> Sign In </Button>
		);

		// TODO: Present drop down menu when user clicks on AccountButton
		const HeaderOption = () => (
			<div>
				{this.state.isLoggedIn ? <AccountPopover/> : <SignInButton/>}
				<Modal open={this.state.open} onClose={this.handleClose}>
					<div style={loginModalStyle}>
						<LoginArea handleNextButton={this.handleNextButton}/>
					</div>
				</Modal>
			</div>
		);

		return(
			<Toolbar>
				<Grid
					container
					direction={"row"}
					justify={"center"}
					alignItems={"center"}
				>
					<Grid item xs={12} sm={2}><Title label={"Spill"}/></Grid>
					<Grid item xs={9} sm={8}><SearchField/></Grid>
					<Grid item xs={3} sm={2}><HeaderOption/></Grid>
				</Grid>
			</Toolbar>
		)
	}
}

const Header = () => {
	return(
		<AppBar position="static">
			<HeaderLayout/>
		</AppBar>
	)
};

export default Header;