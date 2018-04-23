import React from 'react';
import {Card, CardHeader, Grid, Typography, Button, TextField} from 'material-ui';
const LoginField = (props) => {
	return(
		<div>
			<Typography variant={"caption"}> {props.caption} </Typography>
			<TextField type={props.type} placeholder={props.placeholder}/>
		</div>
	)
};

const LoginArea = (props) => {
	return(
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
					<LoginField type={"text"} caption={"Email"} placeholder={"Email"}/>
				</Grid>
				<Grid item xs={12} style={{margin: "15px"}}>
					<LoginField type={"password"} caption={"Password"} placeholder={"Password"}/>
				</Grid>
				<Grid item xs={12}>
					<Button size="small" variant="flat" onClick={props.handleNextButton}>
						Next
					</Button>
					<Button size="small" variant="flat" href={"/user/signUp"}>
						Create Account
					</Button>
				</Grid>
			</Grid>
		</Card>
	)
};
export {LoginArea};