import React, { Component } from 'react';

export class Sid extends Component {
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

Sid.defaultProps = {
  name: "Sid Bola",
  role: "Back-end Lead",
  experience: "Intermediate",
  goals: "Begin work as a mobile dev",
  hobbies: "Guitar making, photography, rock climbing"
}