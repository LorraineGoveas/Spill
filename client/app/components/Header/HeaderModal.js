import React from 'react';

import { Typography, Button, Modal, Paper} from 'material-ui';

class HeaderModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
		this.handleClose = this.handleClose.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
	}


	handleOpen() {this.setState({ open: true });};

	handleClose() {this.setState({ open: false });};

	render() {
		const modalStyle= {
			position: "absolute",
			right: "0",
			width: "250px",
			marginTop: "50px"
		};

		return (
			<div>
				<Button color={"inherit"} onClick={this.handleOpen}>{this.props.buttonTitle}</Button>

				<Modal open={this.state.open} onClose={this.handleClose}>
					<div style={modalStyle}>{this.props.children}</div>
				</Modal>

			</div>
		);
	}
}
export { HeaderModal };