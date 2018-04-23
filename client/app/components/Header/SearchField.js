import React from 'react';
import { Button } from 'material-ui';
import { Search } from '@material-ui/icons';
import { Paper,FormControl} from 'material-ui';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';

class SearchField extends React.Component {
	render() {
		const SearchButton = () => (
			<Button size="small" href={"/search/results"}>
				<Search>Search</Search>
			</Button>
		);
		return (
			<Paper>
				<FormControl fullWidth>
					<InputLabel>Search</InputLabel>
					<Input endAdornment={
						<InputAdornment>
							<SearchButton/>
						</InputAdornment>
					}/>
				</FormControl>
			</Paper>
		);
	}
}

export { SearchField }