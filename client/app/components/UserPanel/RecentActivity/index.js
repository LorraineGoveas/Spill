import React from 'react';
import { Paper,  Grid, Typography} from 'material-ui';
import { RecentPost } from "../UserProfile/UserPost";

const Title = () => {
	return(
		<Typography variant={"headline"} align={"center"}>
			Recent Activity
		</Typography>
	);
};

const RecentActivity = () => {
	return(
		<Paper style={{ marginTop: "25px", padding: "10px"}}>
			<Grid
				container
				direction={"column"}
				justify={"flex-start"}
				alignItems={"stretch"}
			>
				<Grid item xs> <Title/> </Grid>
				<Grid item xs> <RecentPost/> </Grid>
				<Grid item xs> <RecentPost/> </Grid>
			</Grid>
		</Paper>
	);
};

export default RecentActivity;