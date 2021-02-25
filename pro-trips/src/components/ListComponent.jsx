import React, { Component } from 'react';
import './listComponent.css';
import {Link} from 'react-router-dom';
class ListComponent extends Component {
    constructor(props)
    {
        super(props);
        this.tripList=this.props.tripList;
    }
    generateTourLists=()=>{
        
        return this.tripList.map((tripPlace,index)=>{
            console.log(tripPlace.dateOfTrip.getYear());
            let [month, date, year]    = tripPlace.dateOfTrip.toLocaleDateString("en-US").split("/")
            return (
            <tr key={index}>
                <td>{date}/{month}/{year}</td>
                <td>{tripPlace.placeOfTrip}</td>
                <td>{tripPlace.typeOfTrip}</td>
            </tr>)
        })
    }
    render() {
        let tripListTable=this.generateTourLists();
        return(
            <div className="table">
                <h1>Your trip List</h1>
                <table>
                    <thead>
                        <tr>
                        <td>Date Of Trip</td>
                        <td>Place Of Trip</td>
                        <td>Type of trip</td>
                        </tr>
                    </thead>
                    <tbody>{tripListTable}</tbody>
                </table>
                <Link to='/'><button>Home</button></Link>
            </div>
        )
    }
}

export default ListComponent;