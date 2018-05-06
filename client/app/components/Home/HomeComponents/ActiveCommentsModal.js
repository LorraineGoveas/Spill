import React from 'react';
import {  Paper} from 'material-ui';
import { Modal } from 'material-ui';
import {CommentBox} from "../../Comment/CommentBox";

const ActiveCommentsModal = (props) => {
	const ActiveCommentsStyle = {
		style: {
			margin: "auto",
			width: "50vw",
		}
	};

	console.log("Handler: " + props.handleClose);
	return(
		<Modal open={props.open} onClose={props.handleClose}>
			<Paper {...ActiveCommentsStyle}>
				<CommentBox handleCancel={props.handleClose}/>
			</Paper>
		</Modal>
	)
};

export { ActiveCommentsModal }