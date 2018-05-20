import React from 'react';
import theme from '../Theme';
import { withStyles } from 'material-ui/styles';
import { Button, Toolbar, Grid } from 'material-ui';
import { StyledLink} from "../utils/StyledLink";


const styles = {
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.primary.dark,
	},
	Button: {
		color: "white",
		textTransform: 'capitalize',
	},
};

class Footer extends React.Component {
	// TODO: Rename "Report an issue" to "Post a Hazard", then place this in Browse
	render() {
		const {classes} = this.props;
		const GridSettings = {
			container: true,
			direction: 'row',
			justify: 'flex-start',
			alignItems: 'center',
		};

		return (
			<footer>
				<Toolbar className={classes.root}>
					<Grid {...GridSettings}>
						<Grid item xs={6} sm={3} lg={2}>
							<StyledLink to={{pathname: "/team/about"}}>
								<Button className={classes.Button}>
									About the Team
								</Button>
							</StyledLink>
						</Grid>

						{/*<Grid item xs={6} sm={3} lg={2}>*/}
							{/*<StyledLink to={{pathname: "/report/issue"}}>*/}
								{/*<Button className={classes.Button}> Post a Hazard </Button>*/}
							{/*</StyledLink>*/}
						{/*</Grid>*/}

						<Grid item xs={5} sm={3} lg={2}>
							{/*<StyledLink to={{pathname: "/policy"}}>*/}
							<Button className={classes.Button}> Terms </Button>
							{/*</StyledLink>*/}
						</Grid>

					</Grid>
				</Toolbar>
			</footer>
		);
	}
}

export default withStyles(styles)(Footer);
