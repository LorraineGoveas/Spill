import React, { Component } from 'react';
import style from 'styled-components';


const CenterPage = style.div`
    text-align: center;
`

export class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
          teamMembers: [],
          selectedMember: String
        };

        this.selectedMember = 'Peter Mutch'
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
        this.selectedMember = memberName
        this.forceUpdate()
    }

    render() {
        return (
            <CenterPage>


            <button onClick={() => this.switchMember('Peter Mutch')}>Peter</button>
            <button onClick={() => this.switchMember('Sid Bola')}>Sid</button>
            <button onClick={() => this.switchMember('Alaric Gonzales')}>Alaric</button>
            <button onClick={() => this.switchMember('Lorraine Goveas')}>Lorraine</button>
            <button onClick={() => this.switchMember('Albert Fernandez Saucedo')}>Albert</button>
            <button onClick={() => this.switchMember('Harpreet Singh')}>Harpreet</button>



                <div>

                    <img src={this.getMember(this.selectedMember).image_src}
                        alt={this.getMember(this.selectedMember).img_alt}
                        width={this.getMember(this.selectedMember).img_width}
                        height={this.getMember(this.selectedMember).img_height} />

                    <h1> <div>{this.getMember(this.selectedMember).name}</div> </h1>

                    <h3>Role:</h3>
                    <div>{this.getMember(this.selectedMember).role}</div>

                    <h3> Experience with Role: </h3>
                    <div>{this.getMember(this.selectedMember).experience}</div>

                    <h3> Goals after Graduation: </h3>
                    <div>{this.getMember(this.selectedMember).goals}</div>

                    <h3> Hobbies outside of school: </h3>
                    <div>{this.getMember(this.selectedMember).hobbies}</div>
                </div>

            </CenterPage>
        );
  }
}
