import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import updateLocation from '../../actions/location';

class ZipcodeLookup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {},
      zipcode: ''
    }

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
          const location = {
            city: `${data[0].City}, ${data[0].State}`,
            latitude: data[0].Lat,
            longitude: data[0].Long,
          };

          this.setState({location});
          this.props.updateLocation(location);
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateLocation: updateLocation}, dispatch);
}

export default connect(null, mapDispatchToProps)(ZipcodeLookup);