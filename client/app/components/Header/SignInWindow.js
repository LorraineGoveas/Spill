import React from 'react';
import {Card, CardHeader, Grid, Typography, Button, TextField} from 'material-ui';
import {StyledLink} from "../utils/StyledLink";
import ReCAPTCHA from 'react-google-recaptcha';
/*
SignInWindow is a window that contains the email and password fields,
as well as the next and create account buttons.

This window is presented when the user clicks on the Sign In button located in the Options Header
 */

const SignInMenuItem = (props) => {
	return(<Button size="small" style={{color: "black"}}>{props.label}</Button>)
};

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

	onChange(response){
		this.setState({
			'g-recaptcha-response': response
		});
	}

	render() {
		return (

			<Card style={{
				width: "100%",
				height: "100%",
			}}

			>
				<CardHeader title={"Log in to Spill"}/><form>
				<Grid
					container
					spacing={20}
					direction={"column"}
					justify={"flex-start"}
					alignItems={"flex-start"}
				>

					<Grid item xs={12} style={{margin: "20px"}}>
						<EmailPasswordField type={"text"} caption={"Email"} placeholder={"Email"}/>
					</Grid>

					<Grid item xs={12} style={{margin: "20px"}}>
						<EmailPasswordField type={"password"}
											caption={"Password"}
											placeholder={"Password"}/>
					</Grid>

					<Grid item xs={12}>
						<Button size="small"
								variant="flat"
								onClick={this.props.handleNextButton}>Next</Button>
						<StyledLink to={{pathname: "/user/signUp"}}>
							<SignInMenuItem label={"Create Account"}/>
						</StyledLink>

					</Grid>
					<ReCAPTCHA
						size={"normal"}
						ref={"recaptcha"}
						sitekey={"6LexLFgUAAAAAMB359gHbk6n-BOjuuy9fuSnJkha"}
						onChange={this.onChange.bind(this)}/>
				</Grid></form>
			</Card>
		)
	}
}

export {SignInWindow};
