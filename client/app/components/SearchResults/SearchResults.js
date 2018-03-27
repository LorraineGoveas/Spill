import React, { Component } from 'react';
import style from 'styled-components';

const DataTable = style.table`
    width: 100%;
    text-align: center;
`

export class SearchResults extends Component {

    constructor(props){
        super(props)

        this.state = {
            places: [],
            searchKey: ''
        };

        this.searchSomething = this.searchSomething.bind(this);
        this.searchTextChanged = this.searchTextChanged.bind(this);

    }

    searchTextChanged(event) {
        this.setState({searchKey: event.target.value})
    }

    searchSomething() {
        const keyword = this.state.searchKey

        this.setState({
            places : []
        })

        fetch(`/api/postRecords/${keyword}/search`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                places: json
            });
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.searchSomething}>Search</button>

                <input type="text" value={this.state.value}
                onChange={this.searchTextChanged}
                placeholder="Search.."></input>

                <DataTable>
                    <tr>
                        <th>Image</th>
                        <th>Name of Place</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Type of Incident</th>
                        <th>Status</th>
                    </tr>

                    {this.state.places.map((place, i) => (
                        <tr key={i}>
                            <td>{place.image_src}</td>
                            <td>{place.location_name}</td>
                            <td>{place.address}</td>
                            <td>{place.city}</td>
                            <td>{place.state}</td>
                            <td>{place.zip}</td>
                            <td>{place.type}</td>
                            <td>{place.status}</td>
                        </tr>
                    ))}

                </DataTable>

            </div>
        );
    }
}
