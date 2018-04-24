import React, { Component } from 'react';
import {Typography, Grid, Card} from 'material-ui';
import Tabs, {Tab} from 'material-ui/Tabs';
import {aboutMeProfiles} from "./StoredAboutMe";

const Topic = (props) => {
	return(
		<Card>
			<Grid
				container
				direction={"column"}
				justify={"space-between"}
				alignItems={"center"}
				style={{marginTop: "20px"}}
			>
				<Grid item xs>
					<Typography variant={"headline"}>
						{props.title}
					</Typography>
				</Grid>

				<Grid item xs>
					<Typography variant={"body1"} paragraph={true}>
						{props.content}
					</Typography>
				</Grid>
			</Grid>
		</Card>
	);
};

function TabContainer(props) {
	return ( <Topic title={props.children}/>);
}

const Member = (props) => {
	return (
		<Typography>
			<img src={aboutMeProfiles[props.value].image_src}
				 alt={aboutMeProfiles[props.value].img_alt}
				 width={aboutMeProfiles[props.value].img_width}
				 height={aboutMeProfiles[props.value].img_height}
				 style={{maxWidth: "400px", maxHeight: "400px"}}
			/>
			<h1>{aboutMeProfiles[props.value].name}</h1>

			<h3>Role:</h3>
			<div>{aboutMeProfiles[props.value].role}</div>

			<h3> Experience with Role: </h3>
			<div>{aboutMeProfiles[props.value].experience}</div>

			<h3> Goals after Graduation: </h3>
			<div>{aboutMeProfiles[props.value].goals}</div>

			<h3> Hobbies outside of school: </h3>
			<div>{aboutMeProfiles[props.value].hobbies}</div>
		</Typography>
	);
}
export class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			teamMembers: [],
			selectedMember: "Peter Mutch"
		};
		this.handleChange = this.handleChange.bind(this);
		this.fetchMembers = this.fetchMembers.bind(this);
	}

	fetchMembers() {
		fetch(`/api/teamMembers`)
			.then(res => res.json())
			.then(json => {
				this.setState({
					teamMembers: json
				});
			});
	}

	componentDidMount() {
		this.fetchMembers(); // Fetch all results
	}

	handleChange(event, value) {
		this.setState({
			value: value,
		});
	}

	// getMember(name){
	// 	this.state.teamMembers.map((m) => (console.log("MEMBER:" + m)));
	// 	if (this.state.teamMembers[0]){
	// 		return this.state.teamMembers.find(function(member) {
	// 			return member.name === name
	// 		});
	// 	} else {
	// 		return "User Not Found";
	// 	}
	// }

	getMember(name){
		this.state.teamMembers.map((m) => (console.log("MEMBER:" + m)));
		if (this.state.teamMembers[0]){
			return this.state.teamMembers.find(function(member) {
				return member.name === name
			});
		} else {
			return "User Not Found";
		}
	}

	switchMember(memberName){
		this.setState({
			selectedMember: this.getMember(memberName)
		});

		console.log("MEMBER: " + memberName);
		console.log("ROLE: " + this.getMember(memberName).role); // TODO: Fix this, shouldn't be undefined
		this.forceUpdate();
	}

	render() {
		const {selectedMember, value} = this.state;

		const members = [
			{
				value: 0,
				name: "Peter",
				fullName: "Peter Mutch"
			},
			{
				value: 1,
				name: "Sid",
				fullName: "Sid Bola"
			},
			{
				value: 2,
				name: "Alaric",
				fullName: "Alaric Gonzales"
			},
			{
				value: 3,
				name: "Lorraine",
				fullName: "Lorraine Goveas"
			},
			{
				value: 4,
				name: "Albert",
				fullName: "Albert Fernandez Saucedo"
			},
			{
				value: 5,
				name: "Harpreet",
				fullName: "Harpreet Singh"
			},
		];

		return (
			<div style={{textAlign: "center"}}>
				<Tabs
					value={value}
					scrollable={true}
					scrollButtons="auto"
					onChange={this.handleChange}
					fullWidth
				>
					{members.map((member) =>
						(<Tab
							key={member.value}
							label={member.name}
							onClick={() => this.switchMember(member.fullName)}/>), this)}
				</Tabs>

				<div style={{ margin: "30px" }}>
					{value === 0 && <TabContainer><Member value={value}/></TabContainer>}
					{value === 1 && <TabContainer><Member value={value}/></TabContainer>}
					{value === 2 && <TabContainer><Member value={value}/></TabContainer>}
					{value === 3 && <TabContainer><Member value={value}/></TabContainer>}
					{value === 4 && <TabContainer><Member value={value}/></TabContainer>}
					{value === 5 && <TabContainer><Member value={value}/></TabContainer>}
				</div>

			</div>
		);
	}
}
