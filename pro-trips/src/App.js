import './App.css';
import HomeComponent from './components/HomeComponent';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AddTripComponent from './components/AddTripComponent';
import ListComponent from './components/ListComponent';
function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path='/'><HomeComponent/></Route>
        <Route path='/addTrips'><AddTripComponent/></Route>
        <Route path='/listOfTrips'><ListComponent/></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
