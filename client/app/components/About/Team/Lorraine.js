import React, { Component } from 'react';

export class Lorraine extends Component {
  render() {
    return (
      <div>
        <h1> <div>{this.props.name}</div> </h1>

        <h3>Role:</h3>
        <div> {this.props.role} </div>

        <h3> Experience with Role: </h3>
        <div>{this.props.experience}</div>

        <h3> Goals after Graduation: </h3>
        <div>{this.props.goals}</div>
        
        <h3> Hobbies outside of school: </h3>
        <div>{this.props.hobbies}</div>
      </div>
    );
  }
}

Lorraine.defaultProps = {
  name: "Lorraine Goveas",
  role: "Back-end",
  experience: "Novice",
  goals: "Go on a vacation",
  hobbies: "Exercise and Traveling with my family"
}