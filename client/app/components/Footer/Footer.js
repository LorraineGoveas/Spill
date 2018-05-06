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
				<BottomNavigation value={0} showLabels
								  style={{backgroundColor: theme.palette.primary.dark,}}
				>
					<BottomNavigationAction href={"/team/about"} label="About"
											style={{color: theme.palette.secondary.main}}/>
					<BottomNavigationAction label="Contact" style={{color: "white"}}/>
					<BottomNavigationAction href={"/report/issue"} label="Report an Issue" style={{color: "white"}}/>
					<BottomNavigationAction label="Terms" style={{color: "white"}}/>
				</BottomNavigation>
			{/*</footer>*/}
			</div>
		);
	}
}

export default Footer;
