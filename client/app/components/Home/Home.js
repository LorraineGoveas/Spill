import React, { Component } from 'react';
import { Grid, Card, CardHeader, CardContent, CardActions, Button, Typography, TextField } from 'material-ui';

const PreviewTitle = () => {
	return(
		<div>
			<Typography align={"center"} variant={"display3"}> Latest Posts </Typography>
		</div>
	);
};
const LoginArea = () => {
	const LoginField = (props) => {
		return(
			<div>
				<Typography variant={"caption"}> Email </Typography>
				<TextField type={"search"} placeholder={props.placeholder}/>
			</div>
		)
	};

	return(
		<Card style={{float: "right", margin: "10px"}}>
			<CardHeader title={"Log in to Spill"}/>
			<Grid
				container
				spacing={8}
				direction={"column"}
				justify={"flex-start"}
				alignItems={"flex-start"}
			>

				<Grid item xs={12} style={{margin: "15px"}}> <LoginField placeholder={"Email"}/></Grid>
				<Grid item xs={12} style={{margin: "15px"}}> <LoginField placeholder={"Password"}/></Grid>
				<Grid item xs>
					<Button color="primary" variant="flat" href={"/user/login"}>Create Account</Button>
				</Grid>
			</Grid>
		</Card>

	)
};
const Preview= () => {
	return(
		<Card>
			<CardContent>
				<Typography align={"center"} variant={"headline"}> Preview </Typography>
			</CardContent>
		</Card>
	);
};

class Home extends Component {

	render() {
		const previewItemSize = {xs: 12, sm: 4};
		return (
			<div>
				<LoginArea/>
				<div style={{margin: "30px", padding: "10px"}}>
					<Grid
						container
						spacing={8}
						direction={"row"}
						justify={"center"}
						alignItems={"center"}
					>
						<Grid item xs={previewItemSize.xs} sm={12}> <PreviewTitle/> </Grid>
						<Grid item xs={previewItemSize.xs} sm={previewItemSize.sm}> <Preview/> </Grid>
						<Grid item xs={previewItemSize.xs} sm={previewItemSize.sm}> <Preview/> </Grid>
						<Grid item xs={previewItemSize.xs} sm={previewItemSize.sm}> <Preview/> </Grid>
						<Grid item xs={previewItemSize.xs} sm={previewItemSize.sm}> <Preview/> </Grid>
						<Grid item xs={previewItemSize.xs} sm={previewItemSize.sm}> <Preview/> </Grid>
						<Grid item xs={previewItemSize.xs} sm={previewItemSize.sm}> <Preview/> </Grid>

						<Grid item xs={12} > <hr/> </Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default Home;
