import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import SignUp from "./Components/Login/SignUp/SignUp";


export const userContext = createContext();
function App() {
  const [loginUser, setLoginUser] = useState([]);
  return (
        <userContext.Provider value={[loginUser, setLoginUser]}>
            <Router>
          <Switch>
            <Route path='/home'>
              <Home/>
            </Route>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/signup'>
              <SignUp/>
            </Route>
            <Route path='/appointment'>
              <Appointment/>
            </Route>
          </Switch>
        </Router>
        </userContext.Provider>
  );
}

export default App;
