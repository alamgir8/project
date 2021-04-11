
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <div className="container">
      <Router>
        <Header/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/signup'>
            <SignUp/>
          </Route>
          <Route path='/admin'>
            <Admin/>
          </Route>
          <Route path='*'>
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
     
    </div>
  );
}

export default App;
