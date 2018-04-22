import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Button, TextField, Avatar, IconButton} from 'material-ui';
import AddPhotoIcon from '@material-ui/icons/AddAPhoto';
import PinDropIcon from '@material-ui/icons/PinDrop';

class CommentBox extends React.Component {
	render() {
		return (

			<div>
				<Card>
					<CardHeader
						avatar={ <Avatar> F </Avatar> }
						title="Frodo Baggins"
						subheader="April 22, 2018"
					/>

					<CardContent>
						<TextField
							label="What would you like to post?"
							rows="7"
							multiline
							defaultValue=""
							margin="normal"
						/>
					</CardContent>

					<CardActions>
						<IconButton label="Add to favorites"> <AddPhotoIcon /> </IconButton>
						<IconButton label="Share"> <PinDropIcon /> </IconButton>
						<Button variant="raised"> Cancel </Button>
						<Button variant="raised" color="primary"> Post </Button>
					</CardActions>

				</Card>

			</div>
		);
	}
}

export { CommentBox }