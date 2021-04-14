import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import AddDoctor from "./Components/Dashboard/AddDoctor/AddDoctor";
import AllPatients from "./Components/Dashboard/AllPateints/AllPatients";
import Appointments from "./Components/Dashboard/Appointments/Appointments";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
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
            <Route path='/dashboard/appointments'>
              <Appointments/>
            </Route>
            <Route path='/dashboard/patients'>
              <AllPatients/>
            </Route>
            <Route path='/dashboard/addDoctor'>
              <AddDoctor/>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard/>
            </PrivateRoute>
           
          </Switch>
        </Router>
        </userContext.Provider>
  );
}

export default App;
