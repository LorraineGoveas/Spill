import React from 'react';
import Button from 'material-ui/Button';
import Popover from 'material-ui/Popover';
import {Grid} from 'material-ui';

const AccountMenuPopover = () => (
	<Grid
		container
		direction={"column"}
	>
		<Grid item><Button fullWidth href={"/user/userPanel"}>Profile</Button></Grid>
		<Grid item><Button fullWidth> Settings </Button></Grid>
		<Grid item><Button fullWidth href={"/cityManagerDash/CityManagerDashboard"}> Panel </Button></Grid>
		<Grid item><Button fullWidth> Log Out </Button></Grid>
	</Grid>
);

class AccountPopover extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			anchorReference: 'anchorEl',
		};
		this.anchorEl = null;
		this.handleButton = this.handleButton.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleButton() {
		this.setState({open: true});
	};

	handleClose () {
		this.setState({open: false});
	};

	render() {
		const {open, anchorReference,} = this.state;
		return (
			<div>
				<Button
					color={"inherit"}
					buttonRef={ (node) => {this.anchorEl = node}}
					variant="flat"
					onClick={this.handleButton}
				>
					Account
				</Button>

				<Popover
					open={open}
					anchorEl={this.anchorEl}
					anchorReference={anchorReference}
					anchorPosition={{ top: 200, left: 400 }}
					onClose={this.handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "left",
					}}
				>
					<AccountMenuPopover/>
				</Popover>
			</div>
		);
	}
}

export {AccountPopover}