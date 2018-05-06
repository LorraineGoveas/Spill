import React from 'react';
import { Card } from 'material-ui';
import { Grid, Button } from 'material-ui';
import {ModeEdit} from '@material-ui/icons';
import IconButton from 'material-ui/IconButton';

const CommentPrompt = () => {

	const CommentPromptSettings = {
		container: {
			container: true,
			direction: "row",
			justify: "flex-start",
			alignItems: "center",
			style: {
				height: "48px",
			}
		},
		buttonGridItem: {
			item: true,
			xs: 10,
			sm: 10,
		},
		button: {
			fullWidth: true,
			size: "small",
			style: {
				textTransform: 'none',
				color: "grey",
				// backgroundColor: "red"
			},
		},
		iconGridItem: {
			item: true,
			xs: 1,
			sm: 1,
		}
	};


	return(
		<Grid {...CommentPromptSettings.container}>
			<Grid {...CommentPromptSettings.buttonGridItem}>
				<Button {...CommentPromptSettings.button}>
					Tell us about an environmental issue in your area
				</Button>
			</Grid>

			<Grid {...CommentPromptSettings.iconGridItem}> <IconButton> <ModeEdit/> </IconButton></Grid>
		</Grid>
	)
};

	const CenterPromptForComments = () => {
		const CenterPromptForCommentsStyle = {
			style: {
				display: "inline-block",
				borderColor: "black",
				borderWidth: "2px",
				backgroundColor: "white",
				color: "grey"
			}
		};
		return(
			<div>
				<Card {...CenterPromptForCommentsStyle}>
					<CommentPrompt/>
				</Card>
			</div>
		);
	};

	export {CenterPromptForComments}