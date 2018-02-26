import React, { Component } from 'react';
import style from 'styled-components';

const CenterPage = style.div`
    text-align: center;
`

export class Albert extends Component {
  render() {
    return (
        <CenterPage>
      <div>
          <img src={this.props.image_src} alt={this.props.alt}
               width={this.props.width} height={this.props.height} />
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

Albert.defaultProps = {
  image_src: "/assets/img/albertProfileImage.jpg",
    alt: "Albert",
    height: "240",
    width: "200",
  name: "Albert Fernandez Saucedo",
  role: "Front-end",
  experience: "Novice",
  goals: "Continue to learn and play with all the new technologies!",
  hobbies: "Reading, Gaming, and Building things!"
}