import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Grid, Button, TextField, Avatar, IconButton} from 'material-ui';
import AddPhotoIcon from '@material-ui/icons/AddAPhoto';
import PinDropIcon from '@material-ui/icons/PinDrop';

class CommentBox extends React.Component {
	render() {
		return (

			<Card style={{ height: "100%"}}>
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
						fullWidth
						style={{backgroundColor: "white", color: "black"}}
					/>
				</CardContent>

				<CardActions>
					<Grid
						container
						direction={"row"}
						justify={"flex-start"}
						alignItems={"flex-start"}
					>
						<Grid item xs={6} sm>
							<IconButton label="Add Photo"> <AddPhotoIcon /> </IconButton>
						</Grid>

						<Grid item xs={6} sm>
							<IconButton label="SetLocation"> <PinDropIcon /> </IconButton>
						</Grid>

						<Grid item xs sm>
							<Button variant="raised"> Cancel </Button>
						</Grid>

						<Grid item xs sm >
							<Button variant="raised" color="primary"> Post </Button>
						</Grid>
					</Grid>
				</CardActions>
			</Card>


		);
	}
}

export { CommentBox }