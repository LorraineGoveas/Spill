import React, { Component } from 'react';

export class Albert extends Component {
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

Albert.defaultProps = {
  name: "Albert Fernandez Saucedo",
  role: "Front-end",
  experience: "Novice",
  goals: "Continue to learn and play with all the new technoligies!",
  hobbies: "Reading, Gaming, and Building things!"
}