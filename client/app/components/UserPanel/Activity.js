import React from 'react';
import { Grid } from 'material-ui';
import {RecentPost} from "./UserProfile/UserPost";
import {SectionTitle} from "./SectionTitle";

const Activity = (props) => {
	const Settings = {
		parent: {
			style: {
				display: "flexGrow",
				marginTop: "25px",
				padding: "10px",
			}
		},
		grid: {
			container: true,
			spacing: 8,
			direction: "column",
			justify: "flex-start",
			alignItems: "stretch",
		}
	};
	return(
		<div {...Settings.parent}>
			<Grid {...Settings.grid}>
				<Grid item xs={12}> <SectionTitle title={"Recent Activity"} /> </Grid>
				<Grid item xs={12}> <RecentPost/> </Grid>

			</Grid>
		</div>
	);
};

export {Activity};