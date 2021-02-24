import './App.css';
import HomeComponent from './components/HomeComponent';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import AddTripComponent from './components/AddTripComponent';
import ListComponent from './components/ListComponent';
import { Component } from 'react';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      tripList:[],
      redirect:false
    }
  }
  pushElements=(event,tourDetails)=>{
    console.log(event);
    console.log(tourDetails);
    console.log("Coming here");
    let modifiedList=this.state.tourList;
    modifiedList.push(tourDetails);
    this.setState({
      tripList:modifiedList,
      redirect:true
    });
  }
  render()
  {
  console.log(this.props.history);
  return (
    <div>
      <Router>
      {(this.state.redirect===true)?<Redirect to='/listOfTrips'/>:<Redirect to='/'/>}
      <Switch>
        <Route exact path='/'><HomeComponent/></Route>
        <Route path='/addTrip'><AddTripComponent  pushElements={(tourDetails)=>this.pushElements(this,tourDetails)}/></Route>
        <Route path='/listOfTrips'><ListComponent tripList={this.state.tripList}/></Route>
      </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
