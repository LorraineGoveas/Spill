import React, { Component } from 'react';
import {Typography, Grid, Card} from 'material-ui';
import Tabs, {Tab} from 'material-ui/Tabs';

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
	return (
		<Topic title={props.children}/>
	);
}

// TODO: AboutMe Style + Backend
export class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			teamMembers: [],
			selectedMember: "Peter Mutch"
		};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		fetch('/api/teamMembers')
			.then(res => res.json())
			.then(json => {
				this.setState({
					teamMembers: json
				});
			});
	}

	handleChange(event, value) {
		this.setState({
			value: value,
		});
	}

	getMember(name){
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
		return (
			<div style={{textAlign: "center"}}>
				<Tabs
					value={value}
					scrollable={true}
					scrollButtons="auto"
					onChange={this.handleChange}
				>
					<Tab label={"Peter"} onClick={() => this.switchMember('Peter Mutch')}/>
					<Tab label={"Sid"} onClick={() => this.switchMember('Sid Bola')}/>
					<Tab label={"Alaric"} onClick={() => this.switchMember('Alaric Gonzales')}/>
					<Tab label={"Lorraine"} onClick={() => this.switchMember('Lorraine Goveas')}/>
					<Tab label={"Albert"} onClick={() => this.switchMember('Albert Fernandez Saucedo')}/>
					<Tab label={"Harpreet"} onClick={() => this.switchMember('Harpreet Singh')}/>
				</Tabs>
				{/*</div>*/}

				<div style={{ margin: "30px" }}>
					{value === 0 && <TabContainer>Peter Mutch</TabContainer>}
					{value === 1 && <TabContainer>Sid Bola</TabContainer>}
					{value === 2 && <TabContainer>Alaric Gonzales</TabContainer>}
					{value === 3 && <TabContainer>Lorraine Goveas</TabContainer>}
					{value === 4 && <TabContainer>Albert Fernandez Saucedo</TabContainer>}
					{value === 5 && <TabContainer>Harpreet Singh</TabContainer>}
				</div>
				<div>
					<img src={this.getMember(selectedMember).image_src}
						 alt={this.getMember(selectedMember).img_alt}
						 width={this.getMember(selectedMember).img_width}
						 height={this.getMember(selectedMember).img_height} />
					<h1> <div>{this.getMember(selectedMember).name}</div> </h1>

					<h3>Role:</h3>
					<div>{this.getMember(selectedMember).role}</div>

					<h3> Experience with Role: </h3>
					<div>{this.getMember(selectedMember).experience}</div>

					<h3> Goals after Graduation: </h3>
					<div>{this.getMember(selectedMember).goals}</div>

					<h3> Hobbies outside of school: </h3>
					<div>{this.getMember(selectedMember).hobbies}</div>
				</div>

			</div>
		);
	}
}
