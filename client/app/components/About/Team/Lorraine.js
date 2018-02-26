import React, { Component } from 'react';
import style from 'styled-components';

const CenterPage = style.div`
    text-align: center;
`

export class Lorraine extends Component {
  render() {
    return (
        <CenterPage>
      <div>
          <img src={"/assets/img/lorraineProfileImage.jpg"} alt={"Lorraine"}
               width={"200"} heigth={"200"} />
        <h1> <div>{this.props.name}</div> </h1>

        <h3>Role:</h3>
        <div> {this.props.role} </div>

        <h3> Experience with Role: </h3>
        <div>{this.props.experience}</div>

        <h3> Goals after Graduation: </h3>
        <div>{this.props.goals}</div>
        
        <h3> Hobbies outside of school: </h3>
        <div>{this.props.hobbies}</div>
      </div></CenterPage>
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