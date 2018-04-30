import React from 'react';
import {Card, CardHeader, Grid, Typography, Button, TextField} from 'material-ui';

/*
SignInWindow is a window that contains the email and password fields,
as well as the next and create account buttons.

This window is presented when the user clicks on the Sign In button located in the Options Header
 */

const EmailPasswordField = (props) => {
	return(
		<div>
			<Typography variant={"caption"}> {props.caption} </Typography>
			<TextField type={props.type} placeholder={props.placeholder}/>
		</div>
	)
};

class SignInWindow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		}
	}

	render() {
		return (
			<Card style={{
				width: "100%",
				height: "100%",
			}}

			>
				<CardHeader title={"Log in to Spill"}/>
				<Grid
					container
					spacing={8}
					direction={"column"}
					justify={"flex-start"}
					alignItems={"flex-start"}
				>

					<Grid item xs={12} style={{margin: "15px"}}>
						<EmailPasswordField type={"text"} caption={"Email"} placeholder={"Email"}/>
					</Grid>

					<Grid item xs={12} style={{margin: "15px"}}>
						<EmailPasswordField type={"password"} caption={"Password"} placeholder={"Password"}/>
					</Grid>

					<Grid item xs={12}>
						<Button size="small" variant="flat" onClick={this.props.handleNextButton}>Next</Button>
						<Button size="small" variant="flat" href={"/user/signUp"}>Create Account</Button>
					</Grid>
				</Grid>
			</Card>
		)
	}
}

export {SignInWindow};
