import React, { Component } from 'react';
import {Paper, Grid, Card, CardContent, Typography, Button} from 'material-ui';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = ({ children }) => (

	<div style={{backgroundColor: "#fafafa"}}>
		<Grid
			container
			direction={"column"}
			justify={"flex-start"}
			alignItems={"stretch"}
		>
            <Grid item xs> <Header /></Grid>
            <Grid item xs> <main style={{height: "75vh"}}>{children}</main> </Grid>
            <Grid item xs> <Footer style={{alignSelf: "flex-end"}}/></Grid>
		</Grid>
	</div>


);

export default App;
