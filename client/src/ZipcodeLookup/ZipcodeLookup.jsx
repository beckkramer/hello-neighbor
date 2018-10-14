import React, { Component } from 'react';

export class ZipcodeLookup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {},
      zipcode: ''
    }

    this.getData = this.getData.bind(this);
    this.handleZipcodeChange = this.handleZipcodeChange.bind(this);
    this.handleZipcodeEntry = this.handleZipcodeEntry.bind(this);
  }

  handleZipcodeChange(e) {
    const isValidZipcode = /(\d{5})/;

    if(isValidZipcode.exec(e.target.value)) {
      this.setState({zipcode: e.target.value});
    }
  }

  handleZipcodeEntry(e) {
    e.preventDefault();
    
    if(this.state.zipcode.length === 5) {

      fetch('/api/location/' + this.state.zipcode)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({location: {
            city: data[0].City,
            latitude: data[0].Lat,
            longitude: data[0].Long,
            state: data[0].State
          }});
        });
    }
  }

  render() {
    return(
      <form onSubmit={e => this.handleZipcodeEntry(e)}>

        <p>Current Coordinates: {this.state.location.city}, {this.state.location.state} : {this.state.location.latitude}, {this.state.location.longitude}</p> 

        <label htmlFor="zipcode">Search by Zipcode: </label>
        <input
          id="zipcode"
          onChange={(e) => this.handleZipcodeChange(e)} />

        <button type="submit">Find Birds</button>
      </form>
    );
  }
}