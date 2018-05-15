import React from 'react';
import {BottomNavigation, BottomNavigationAction} from 'material-ui';
import theme from '../Theme';
class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){

		return(
			<div>
				<hr/>
				<BottomNavigation value={0}
								  showLabels
								  style={{backgroundColor: theme.palette.primary.dark,}}>
					<BottomNavigationAction label="About"
											style={{color: theme.palette.secondary.main}}
											href={"/team/about"}/>
					<BottomNavigationAction label="Contact"
											style={{color: "white"}}/>
					<BottomNavigationAction href={"/report/issue"}
											label="Report an Issue"
											style={{color: "white"}}/>
					<BottomNavigationAction label="Terms"
											style={{color: "white"}}/>
				</BottomNavigation>
			</div>
		);
	}
}

export default Footer;
