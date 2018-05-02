import React from 'react';
import { Button } from 'material-ui';
import { Search } from '@material-ui/icons';
import { Paper,FormControl} from 'material-ui';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';

class SearchField extends React.Component {
	 search(){
		console.log("Enter Button Pressed");
        window.location.replace("/search/results");
	}
	render() {
		const SearchIcon = () => (
			<Button height={10} width={10} href={"/search/results"} >
				<Search>Search</Search>
			</Button>
		);
		return (
			<Paper style={{height: "2.8em", paddingTop: 0, paddingBottom: 16, marginTop: 0,}} >
				<FormControl fullWidth onKeyPress={event =>{if(event.key === "Enter"){
					this.search();
				}}}>
					<InputLabel>Search</InputLabel>
					<Input disableUnderline={true} endAdornment={
						<InputAdornment>
							<SearchIcon/>
						</InputAdornment>
					}/>
				</FormControl>
			</Paper>
		);
	}
}

export { SearchField }