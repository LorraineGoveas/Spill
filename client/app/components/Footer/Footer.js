import React from 'react';
import {BottomNavigation, BottomNavigationAction} from 'material-ui';

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
			{/*<footer*/}
				{/*style={{*/}
					{/*height: "100px",*/}
					{/*backgroundColor: "#373737"*/}
				{/*}}*/}
			{/*>*/}
				<hr/>
				<BottomNavigation value={0} showLabels style={{backgroundColor: "#373737"}}>
					<BottomNavigationAction href={"/team/about"} label="About" style={{color: "#7fdeea"}}/>
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
