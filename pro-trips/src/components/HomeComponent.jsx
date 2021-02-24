import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './homeComponent.css';
class HomeComponent extends Component {
    render() {
        return (
            <div className="home">
                <Link to='/addTrip'><button>Add Trip</button></Link>
                <Link to='/listOfTrips'><button>Display Triplist</button></Link>
            </div>
        );
    }
}

export default HomeComponent;