import React from 'react';
import { Button } from 'material-ui';
import { Search } from '@material-ui/icons';
import { Paper,FormControl} from 'material-ui';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import {SearchResults} from "../SearchResults/SearchResults";

// HEADER
class SearchField extends React.Component {
	search(){
		console.log("Enter Button Pressed");
        window.location.replace("/search/results");
	}
	
	render() {
		const SearchFunct = () => {
			return(
				<Paper>
					{DisplayFetchedData}
				</Paper>
			);
		};

		return (
			<Paper style={{height: "2.8em"}} >
				<FormControl fullWidth onKeyPress={event =>{if(event.key === "Enter"){
					this.search();
				}}}>
					<InputLabel>Search</InputLabel>
					<Input endAdornment={
						<InputAdornment>
							<Button size="small" onClick={this.searchSomething} href={"/search/results"}>
								<Search>Search</Search>
							</Button>
						</InputAdornment>
					}/>
				</FormControl>
			</Paper>
		);
	}
}

export { SearchField }
