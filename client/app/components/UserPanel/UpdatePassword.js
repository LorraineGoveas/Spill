import React from 'react';
import { TextField, Typography, Button, Grid, Paper} from 'material-ui';
import {SectionTitle} from "./SectionTitle";

class UpdatePassword extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			emailValue: "",
			passwordValue: "",
		};

		this.resetFields = this.resetFields.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			emailValue: event.target.value
		})
	}

	handlePasswordInputChange(event) {
		this.setState({
			passwordValue: event.target.value
		})
	}

	resetFields() {
		this.setState({
			emailValue: "",
			passwordValue: ""
		})
	}

	render() {
		const Settings ={
			parent: {
				style: {
					display: "inline-block",
					padding: "10px",
				}
			},
			grid: {
				container: true,
				spacing: 16,
				direction: "column",
				justify: "center",
				alignItems: "center",
			},
		};

		return(
			<div>
				<SectionTitle title={"Update your password"}/>
				<Grid {...Settings.grid} direction={"column"} spacing={8}>
					<Grid item xs={12} sm={3}>
						<Paper {...Settings.parent}>
							<Grid {...Settings.grid}>
								<Grid item xs={12}>
									<TextField type={"search"}
											   placeholder={"Email"}
											   label={"Email"}
											   value={this.state.emailValue}
											   onChange={this.handleInputChange}/>
								</Grid>

								<Grid item xs={12}>
									<TextField type={"password"}
											   placeholder={"Password"}
											   label={"Password"}
											   value={this.state.passwordValue}
											   onChange={this.handlePasswordInputChange}/>

								</Grid>

								<Grid item xs={12}>
									<Button>Update</Button>
									<Button onClick={this.resetFields}>Cancel</Button>
								</Grid>
							</Grid>
						</Paper>

					</Grid>

					<Grid item xs={12} sm={8}>
						<Paper style={{marginTop: "18px", padding: "48px"}}>
							<Typography variant={"headline"}> This is where you update your password </Typography>
							<Typography variant={"subheading"}> However, as of this moment, this is not working. </Typography>
						</Paper>
					</Grid>

				</Grid>
			</div>
		)
	}
}

export {UpdatePassword};