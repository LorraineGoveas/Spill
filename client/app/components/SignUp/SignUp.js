import React, { Component } from 'react';
import style from 'styled-components';


const CenterPage = style.div`
    text-align: center;
`


class SignUp extends Component {
	constructor(props) {
		super(props);

        this.state = {
            username: 'name',
            email: 'email@email.com',
            firstName: 'first',
			lastName: 'last',
            city: 'city',
            state: 'state',
            zip: 'zip'
        };

		this.handleSubmit = this.handleSubmit.bind(this);

        this.usernameChanged = this.usernameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
		this.firstNameChanged = this.firstNameChanged.bind(this);
        this.lastNameChanged = this.lastNameChanged.bind(this);
        this.cityChanged = this.cityChanged.bind(this);
        this.stateChanged = this.stateChanged.bind(this);
        this.zipChanged = this.zipChanged.bind(this);

	}

    usernameChanged(event) {
        this.setState({username: event.target.value});
    }

    firstNameChanged(event) {
        this.setState({firstName: event.target.value});
    }

	lastNameChanged(event) {
        this.setState({lastName: event.target.value});
    }

	emailChanged(event) {
        this.setState({email: event.target.value});
    }

    cityChanged(event) {
        this.setState({city: event.target.value});
    }

    stateChanged(event) {
        this.setState({state: event.target.value});
    }

    zipChanged(event) {
        this.setState({zip: event.target.value});
    }


    handleSubmit(event) {
        const username = this.state.username
        const email = this.state.email
		const firstName = this.state.firstName
		const lastName = this.state.lastName
        const city = this.state.city
        const state = this.state.state
        const zip = this.state.zip

        fetch(`/api/user/${username}/${email}/${city}/${state}/${zip}/${firstName}/${lastName}/addUser`, { method: 'POST' })

        alert('This was submitted ' + username + email + firstName + lastName + city + state + zip )

        event.preventDefault();
    }


	render() {
		return (
			<CenterPage>

	            <form onSubmit={this.handleSubmit}>
	                <br/>
	                <br/>
	                <input type="text" value={this.state.value}
	                onChange={this.usernameChanged}
	                placeholder="Username"></input>
	                <br/>
	                <br/>
	                <input type="text" value={this.state.value}
	                onChange={this.emailChanged}
	                placeholder="Email.."></input>
	                <br/>
	                <br/>
	                <input type="text" value={this.state.value}
	                onChange={this.cityChanged}
	                placeholder="City"></input>
	                <br/>
	                <br/>
	                <input type="text" value={this.state.value}
	                onChange={this.stateChanged}
	                placeholder="State"></input>
	                <br/>
	                <br/>
	                <input type="text" value={this.state.value}
	                onChange={this.zipChanged}
	                placeholder="Zip"></input>
	                <br/>
	                <br/>
					<input type="text" value={this.state.value}
	                onChange={this.firstNameChanged}
	                placeholder="First Name"></input>
	                <br/>
	                <br/>
					<input type="text" value={this.state.value}
	                onChange={this.lastNameChanged}
	                placeholder="Last Name"></input>
	                <br/>
	                <br/>
	                <input type="submit" value="Submit" />
	            </form>

			</CenterPage>
		);
	}
}

export default SignUp;
