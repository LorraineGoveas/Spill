import React, { Component } from 'react';
import style from 'styled-components';

const CenterPage = style.div`
    text-align: center;
`

export class Peter extends Component {
  render() {
    return (

        <CenterPage>
            <div>
          <img src={this.props.image_src} alt={this.props.alt}
               width={this.props.width} height={this.props.height}/>

        <h1><div>{this.props.name}</div> </h1>

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

Peter.defaultProps = {
    image_src: "/assets/img/peterProfileImage.jpg",
    alt: "Peter",
    height: "240",
    width: "220",
  name: "Peter Mutch",
  role: "Team Lead",
  experience: "Intermediate",
  goals: "Biomedical Software Engineer",
  hobbies: "Rock Climbing"
}