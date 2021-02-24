import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
class AddTripComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            dateOfTrip:new Date(),
            placeOfTrip:"",
            typeOfTrip:""
        }
        this.tripTypeOption=[
            {value:"Trek",label:"Trek"},
            {value:"Tropic",label:"Tropic"},
            {value:"Club",label:"Club"}
        ]
    }
    handleDateChange=(newDate)=>{
        this.setState({
            dateOfTrip:newDate
        });
        console.log(this.state.dateOfTrip);
    }
    handlePlaceChange=(event)=>{
        const newPlace=event.target.value;
        this.setState({
            placeOfTrip:newPlace
        })
        console.log(this.state.placeOfTrip);
    }
    handeTripTypeChange=(updated)=>{
        this.setState({
            typeOfTrip:updated.value
        })
        console.log(this.state.typeOfTrip);
    }
    render() {
        //
        return (
            <div>
                <form onSubmit={this.props.pushElements.bind(this,this.state)}>
                    <DatePicker onChange={this.handleDateChange.bind(this)}  value={this.state.dateOfTrip}/>
                    <input type="text" name="placeOfTrip" placeholder="Place" onChange={this.handlePlaceChange.bind(this)}/>
                    <Select options={this.tripTypeOption} onChange={this.handeTripTypeChange.bind(this)}/>
                    <button type="submit">Add to list</button>
                </form>
            </div>
        );
    }
}

export default AddTripComponent;