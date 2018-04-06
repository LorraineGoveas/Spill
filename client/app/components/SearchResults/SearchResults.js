import React, { Component } from 'react';
import style from 'styled-components';
import { Map } from '../Map'

const DataTable = style.table`
    width: 100%;
    text-align: center;
`

export class SearchResults extends Component {

    constructor(props){
        super(props)

        this.state = {
            places: [],
            searchKey: '',
            selectedPlaceLat: 37.3382,
            selectedPlaceLng: -121.8863
        };

        this.searchSomething = this.searchSomething.bind(this);
        this.searchTextChanged = this.searchTextChanged.bind(this);
        this.moveTheMap = this.moveTheMap.bind(this);

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

    moveTheMap(lat, lng){

        this.setState({
            selectedPlaceLat: parseFloat(lat),
            selectedPlaceLng: parseFloat(lng)
        })

    }

    render() {


        return (
            <div>

                <Map
                    center={{lat:this.state.selectedPlaceLat, lng:this.state.selectedPlaceLng}}
                    zoom={12}
                    containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
                    mapElement={ <div style={{ height: `100%` }} /> }
                />

                <button onClick={this.searchSomething}>Search</button>

                <input type="text" value={this.state.value}
                onChange={this.searchTextChanged}
                placeholder="Search.."></input>

                <DataTable>
                    <tr>
                        <th>Select</th>
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
                            <td><button onClick={() => this.moveTheMap(place.location_lat, place.location_lng)}>Select</button></td>
                            <td><img src={place.image_src}/></td>
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
