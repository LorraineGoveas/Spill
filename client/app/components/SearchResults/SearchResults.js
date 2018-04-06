import React, { Component } from 'react';
import style from 'styled-components';
import { Map } from '../Map';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



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
            category: '',
            selectedPlaceLat: 37.3382,
            selectedPlaceLng: -121.8863,
            dropDownOpen: false
        };

        this.dropDownToggle = this.dropDownToggle.bind(this);
        this.searchSomething = this.searchSomething.bind(this);

        this.searchTextChanged = this.searchTextChanged.bind(this);
        this.categoryTextChanged = this.categoryTextChanged.bind(this);

        this.moveTheMap = this.moveTheMap.bind(this);

    }

    dropDownToggle() {
        this.setState({
            dropDownOpen: !this.state.dropDownOpen
        });
    }

    searchTextChanged(event) {
        this.setState({searchKey: event.target.value})
    }

    categoryTextChanged(event) {
        this.setState({category: event.target.value})
    }

    searchSomething() {
        const keyword = this.state.searchKey
        const category = this.state.category

        if(category == ''){
            fetch(`/api/postRecords/${keyword}/search`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    places: json
                });
            });
        } else {
            fetch(`/api/postRecords/${keyword}/${category}/catSearch`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    places: json
                });
            });
        }

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

                <input type="text" value={this.state.value}
                onChange={this.categoryTextChanged}
                placeholder="Any Category.."></input>



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
