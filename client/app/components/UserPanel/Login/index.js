import React from 'react';
import { Input, TextField, Typography, Button, Grid, Paper} from 'material-ui';

const ButtonOptions = () => {
	return(
		<div>
			<Button>Update</Button> <Button>Cancel</Button>
		</div>
	);
};

const LoginField = (props) => {
	return(
		<div>
			<Typography variant={"caption"}> Email </Typography>
			<Paper style={{backgroundColor: "white"}}>
				<TextField type={"search"} placeholder={props.placeholder}/>
			</Paper>
		</div>
	)
};

const PasswordField = () => {
	return(
		<div>
			<Typography variant={"caption"}> Password </Typography>
			<Paper style={{backgroundColor: "white"}}>
				<TextField type={"password"} placeholder={"Password"}/>
			</Paper>
		</div>
	)
};

const Login = () => {
	return(
		<Paper style={{
			backgroundColor: "lightGray",
			padding: "10px"
		}}>
			<Grid
				container
				spacing={16}
				direction={"column"}
				justify={"center"}
				alignItems={"flex-start"}
			>
				<Grid item xs> <LoginField placeholder={"Email"}/></Grid>
				<Grid item xs> <PasswordField/></Grid>
				<Grid item xs> <ButtonOptions/></Grid>
			</Grid>
		</Paper>
	);
};

export default Login;