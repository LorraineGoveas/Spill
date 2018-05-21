import React from 'react';
import {Card, CardHeader, Grid, Typography, Button, TextField} from 'material-ui';
import {StyledLink} from "../utils/StyledLink";

const SignInMenuItem = (props) => {
	return(<Button size="small" style={{color: "black"}}>{props.label}</Button>)
};

class SignInWindow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			email: "",
			password: "",
		};

		this.submitAll = this.submitAll.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		console.log("Submitting: " + event.target.name);
		event.preventDefault();
	}

	submitAll() {
		console.log("Submitting form with values: ");
		console.log("\tEmail: " + this.state.email);
		console.log("\tPassword: " + this.state.password);
	}
	render() {
		const GridContainer = {
			container: true,
			spacing: 8,
			direction: "column",
			justify: "flex-start",
			alignItems: "flex-start",
		};

		const GridItem = {
			item: true,
			xs: 12,
			style: {
				margin: "15px",
			}
		};

		return (
			<Card style={{width: "100%", height: "100%",}}>
				<CardHeader title={"Log in to Spill"}/>

				<Grid {...GridContainer}>
					<Grid {...GridItem}>
						<Typography variant={"caption"}> Email </Typography>
						<form onSubmit={this.handleSubmit} name={"email"}>
							<TextField type={"text"}
									   placeholder={"Email"}
									   name={"email"}
									   value={this.state.email}
									   onChange={this.handleInputChange}/>
						</form>
					</Grid>

					<Grid {...GridItem}>
						<form onSubmit={this.handleSubmit} name={"password"}>
							<Typography variant={"caption"}> Password </Typography>
							<TextField type={"password"}
									   placeholder={"Password"}
									   name={"password"}
									   value={this.state.password}
									   onChange={this.handleInputChange}/>
						</form>
					</Grid>


					<Grid item xs={12}>
						<Button size="small" variant="flat" onClick={this.submitAll}>Next</Button>
						{/*<StyledLink to={{pathname: "/user/signUp"}}>*/}
						<SignInMenuItem label={"Create Account"} onClick={this.submitAll}/>
						{/*</StyledLink>*/}
					</Grid>
				</Grid>
			</Card>
		)
	}
}

export {SignInWindow};
