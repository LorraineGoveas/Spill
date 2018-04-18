import {createMuiTheme} from "material-ui/styles/index";
import grey from 'material-ui/colors/grey';
import teal from 'material-ui/colors/teal';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#8e8e8e',
			main: grey[700],
			dark: '#373737',
			contrastText: '#ffffff',
		},
		secondary: {
			light: '#b2fef7',
			main: teal[200],
			dark: '#49a94',
			contrastText: '#000000',
		},
	},
});

export default theme;