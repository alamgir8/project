import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Event from './Components/Event/Event';
import AddEvent from './Components/AddEvent/AddEvent';


function App() {
  return (
    <div className="App">
            <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/event">
            <Event/>
          </Route>
          <Route path="/addEvent">
            <AddEvent/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
