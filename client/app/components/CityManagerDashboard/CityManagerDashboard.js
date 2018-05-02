import React from 'react';
import Paper  from 'material-ui/Paper';
import Grid  from 'material-ui/Grid';
import Typography  from 'material-ui/Typography';
import Card, {CardContent} from 'material-ui/Card';
import AccountSettings from '../UserPanel/AccountSettings';
import UserProfile from '../UserPanel/UserProfile';
import DashboardTable from './DashboardTable';

const DashboardTitle = () => {
        return (
            <Typography variant={"headline"} align={"center"}>
                City Manager Dashboard
            </Typography>
        );
};

export class CityManagerDashboard extends React.Component{

    render(){
        return(
            <div>
                <Paper style={{margin: "30px", padding: "20px", minWidth: "700px"}}>
                    <Grid
                        container
                        spacing={24}
                        direction={"row"}
                        justify={"flex-start"}
                        alignItems={"center"}
                    >
                        <Grid item xs={3}> <AccountSettings/> </Grid>
                        <Grid item xs> <UserProfile/> </Grid>
                    </Grid>

                </Paper>
                <Paper style={{ marginTop: "25px", padding: "10px"}}>
                    <Grid
                        container
                        direction={"column"}
                        justify={"flex-start"}
                        alignItems={"stretch"}
                    >
                        <Grid item xs> <DashboardTitle/> </Grid>

                        <Grid item xs>
                            <Card>
                                <CardContent>
                                        <Grid
                                        container
                                        spacing={24}
                                        direction={"row"}
                                        justify={"flex-start"}
                                        alignItems={"flex-start"}
                                        >
                                            <DashboardTable/>
                                        </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}


/*
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
                <Grid item xs><Title/> </Grid>
                <Grid item xs><Title/></Grid>
            </Grid>
        </Paper>
    );
};

export class CityManagerDashboard extends React.Component{

    render(){
        return (

            <Paper style={{margin: "30px", padding: "20px", minWidth: "700px"}}>
                <Grid
                    container
                    spacing={24}
                    direction={"row"}
                    justify={"flex-start"}
                    alignItems={"center"}
                >
                    <Grid item xs={3}> <AccountSettings/> </Grid>
                    <Grid item xs> <UserProfile/> </Grid>
                </Grid>
                <RecentActivity/>

            </Paper>
        );
    }
}
*/
