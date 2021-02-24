import React, { Component } from 'react';

class ListComponent extends Component {
    constructor(props)
    {
        super(props);
    }
    generateTourLists=()=>{
        let tripList=this.props.tripList;
        return tripList.map((tripPlace)=>{
            return (
            <tr>
                <td>{tripPlace.dateOfTrip.getDate()}/{tripPlace.dateOfTrip.getMonth()}/{tripPlace.dateOfTrip.getYear()}</td>
                <td>{tripPlace.placeOfTrip}</td>
                <td>{tripPlace.typeOfTrip}</td>
            </tr>)
        })
    }
    render() {
        let tourList=this.generateTourLists();
        return (
            <div>
                <table>
                    {tourList}
                </table>
            </div>
        );
    }
}

export default ListComponent;