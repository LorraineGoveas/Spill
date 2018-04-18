import React from 'react';
import { Button } from 'material-ui';
import { Search } from '@material-ui/icons';
import { Paper,FormControl} from 'material-ui';
import Input, {InputLabel, InputAdornment} from 'material-ui/input';

class SearchField extends React.Component {
	render() {
		return (
			<Paper style={{height: "2.8em"}} >
				<FormControl fullWidth>
					<InputLabel>Search</InputLabel>
					<Input
						endAdornment={
							<InputAdornment>
								<Button size="small" href={"/search/results"}> <Search>Search</Search></Button>
							</InputAdornment>
						}
					/>
				</FormControl>
			</Paper>
		);
	}
}

export { SearchField }