import React from 'react';
import { AppBar, Modal} from 'material-ui';
import { SignInWindow } from "./SignInWindow";
import { TopHeader } from "./TopHeader";
import { OptionsHeader } from "./OptionsHeader";

/*
Header holds the state of whether the user is signed in or not
State Dependent Actions related to Search, Login, and Navigation are managed by Header
Two Rows:
	Top Header with Logo, Current Page, and Search Bar
	Options Header with Home, Browse, Search, Help, and AccountOptions
*/

function getHrefForCurrentPage(currentPage) {
	if (currentPage === "home") {
		return "/"
	} else if (currentPage === "browse") {
		return "/search/results" // Proof of concept, this shouldn't actually be the link
	}
}

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: "home",
			open: false,
			isLoggedIn: false
		};

		this.handlePageClick = this.handlePageClick.bind(this);
		this.beginSignInProcess = this.beginSignInProcess.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.signInSuccess = this.signInSuccess.bind(this);
		this.signInFail = this.signInFail.bind(this);
		this.validateCredentials = this.validateCredentials.bind(this);
	}

	handlePageClick(label) {
		this.setState({
			currentPage: label,
		})
	}

	beginSignInProcess() {
		this.setState({
			open: true,
		});
		console.log("Sign In");
	}

	validateCredentials() {
		console.log("Validating...");
		this.signInSuccess();
		// this.signInFail();
	}

	signInFail() {
		console.log("Sign in failure");
	}

	signInSuccess() {
		this.setState({
			open: false,
			isLoggedIn: true,
		});
		console.log("Successfully signed in");
	}

	handleLogout() {
		this.setState({
			isLoggedIn: false,
			open: false,
		});
		console.log("Logged out");
	}

	// TODO: Current Page state should persist when user navigates to new page
	render() {
		// If the user is not signed in, when the user clicks the "Sign In" button, the Sign In Window will appear

		const {currentPage} = this.state;
		const ShowSignInWindow = () => (
			<Modal open={this.state.open}>
				<div style={{
					position: "absolute",
					right: "0",
					width: "250px",
					marginTop: "50px",
					marginRight: "25px",
				}}>


					<SignInWindow handleNextButton={this.validateCredentials}/>
				</div>
			</Modal>
		);

		return(
			<AppBar position="static">
				<TopHeader currentPage={currentPage} href={getHrefForCurrentPage(currentPage)}/>

				<OptionsHeader onClick={this.handlePageClick}
							   isLoggedIn={this.state.isLoggedIn}
							   handleSignInClick={this.beginSignInProcess}
				/>
				<ShowSignInWindow/>
			</AppBar>
		)
	}
}
export default Header;