import React from 'react';
import { render } from 'react-dom';

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/Home/Home';
import { About } from './components/About/About';
import { ReportIssue } from './components/ReportIssue/ReportIssue';
import { SearchResults } from './components/SearchResults/SearchResults'
import { UserPanel } from './components/UserPanel/UserPanel';
import Login from './components/UserPanel/Login';
import SignUp from './components/SignUp/SignUp';
import CommentsPreview from './components/UserPanel/Comments';
import {MuiThemeProvider} from "material-ui/styles/index";
import theme from './components/Theme';

// TODO: Add Disclaimer to Home Page
// TODO: Update Header to have a Search Text Field at all times

render((
	<Router >
		<MuiThemeProvider theme={theme}>
			<App>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/team/about" component={About}/>
					<Route path="/report/issue" component={ReportIssue}/>
					<Route path="/user/userPanel" component={UserPanel}/>
					<Route path="/user/signUp" component={SignUp}/>
					<Route path="/user/login" component={Login}/>
					<Route path="/user/history" component={CommentsPreview}/>
					<Route path="/search/results" component={SearchResults}/>
					<Route component={NotFound}/>
				</Switch>
			</App>
		</MuiThemeProvider>
	</Router>
), document.getElementById('app'));
