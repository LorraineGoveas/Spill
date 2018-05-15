import React, { Component } from 'react';
import style from 'styled-components';


const CenterPage = style.div`
    text-align: center;
`

export class ReportIssue extends Component {

	constructor(props) {
		super(props);

        this.state = {
            damageType: 'Wind Damage',
            locationName: 'name',
            address: 'addr',
            city: 'city',
            state: 'state',
            zip: 'zip'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.locationNameChanged = this.locationNameChanged.bind(this);
        this.addressChanged = this.addressChanged.bind(this);
        this.cityChanged = this.cityChanged.bind(this);
        this.stateChanged = this.stateChanged.bind(this);
        this.zipChanged = this.zipChanged.bind(this);

	}

    handleChange(event) {
        this.setState({damageType: event.target.value});
    }

    locationNameChanged(event) {
        this.setState({locationName: event.target.value});
    }

    addressChanged(event) {
        this.setState({address: event.target.value});
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
        const name = this.state.locationName
        const type = this.state.damageType
        const city = this.state.city
        const state = this.state.state
        const zip = this.state.zip
        const address = this.state.address

        fetch(`/api/postRecords/${type}/${name}/${address}/${city}/${state}/${zip}/ReportIssue`, { method: 'POST' })

        alert('You have succesfully submitted your issue!')

        event.preventDefault();
    }

	render() {
		return (
			<CenterPage>

            <form onSubmit={this.handleSubmit}>
                <br/>
                <label>
                    Type of Issue
                    <br/>
                    <select value={this.state.damageType} onChange={this.handleChange}>
                        <option value="Wind Damage">Wind Damage</option>
                        <option value="Tree Damage">Tree Damage</option>
                        <option value="Chemical Spill">Chemical Spill</option>
                        <option value="Oil Spill">Oil Spill</option>
                    </select>
                </label>
                <br/>
                <br/>
                <input type="text" value={this.state.value}
                onChange={this.locationNameChanged}
                placeholder="Location Name.."></input>
                <br/>
                <br/>
                <input type="text" value={this.state.value}
                onChange={this.addressChanged}
                placeholder="Address.."></input>
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
                <input type="submit" value="Submit" />
            </form>

			</CenterPage>
		);
	}
}
