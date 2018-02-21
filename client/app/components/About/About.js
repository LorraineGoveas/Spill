import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const TeamList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
`

const TeamItem = styled.li`
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
`
const StyledLink = styled(Link)`
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
    &:hover {
        color: #8cb8ff;
    }
`

export class About extends Component {
  render() {
    return (
        <div>

            <TeamList>
                <TeamItem><StyledLink to="/team/peter">Peter</StyledLink></TeamItem>
                <TeamItem><StyledLink to="/team/sid">Sid</StyledLink></TeamItem>
                <TeamItem><StyledLink to="/team/alaric">Alaric</StyledLink></TeamItem>
                <TeamItem><StyledLink to="/team/harpreet">Harpreet</StyledLink></TeamItem>
                <TeamItem><StyledLink to="/team/lorraine">Lorraine</StyledLink></TeamItem>
                <TeamItem><StyledLink to="/team/albert">Albert</StyledLink></TeamItem>
            </TeamList>

        </div>


        /*
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
      */
    );
  }
}

About.defaultProps = {
  name: "Name",
  role: "Empty",
  experience: "Empty",
  goals: "Empty",
  hobbies: "Empty"
}
