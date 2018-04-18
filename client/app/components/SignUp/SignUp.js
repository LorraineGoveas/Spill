import React, { Component } from 'react';
import { TextField, Grid, Card, CardContent, Button, Typography} from 'material-ui';

const EmailPasswordFields = () => {
	const LoginItem = (props) => {
		return (
			<CardContent>
				<Typography>
					<TextField placeholder={props.fieldPlaceholder}/>
				</Typography>
			</CardContent>
		);
	};

	return(
		<Card>
			<LoginItem fieldPlaceholder={"Email"}/>
			<LoginItem fieldPlaceholder={"Password"}/>
		</Card>
	);
};
const SignUpButton = () => {
	return(
		<Button variant={"raised"} color={"secondary"}>
			<Typography color={'inherit'}>
				Sign Up
			</Typography>
		</Button>
	);
};
const LoginButton= () => {
	return(
		<Button variant={"raised"} color={"secondary"}>
			<Typography color={'inherit'}>
				Log In
			</Typography>
		</Button>
	);
};

class SignUp extends Component {
	render() {
		return (
			<Grid
				container
				spacing={8}
				direction={"column"}
				justify={"center"}
				alignItems={"center"}
			>
				<Grid item sm> <EmailPasswordFields/> </Grid>
				<Grid item sm> <SignUpButton/> <LoginButton/></Grid>
			</Grid>
		);
	}
}

export default SignUp;
