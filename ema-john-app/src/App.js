import logo from '../src/img/logo.png';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import NotFound from './component/NotFound/NotFound';
import ProductDetails from './component/ProductDetails/ProductDetails';
import Shipment from './component/Shipment/Shipment';
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [login, setLogin] = useState({});
  return (
    <div className="App">
        <userContext.Provider value={[login, setLogin]} >
          <h3>Email : {login.email}</h3>
          <Router>
          <Header></Header>
                <Switch>
                  <Route path="/shop">
                      <Shop></Shop>
                  </Route>
                  <Route path="/review">
                        <Review></Review>
                  </Route>
                  <PrivateRoute exact path="/inventory">
                      <Inventory></Inventory>
                  </PrivateRoute>
                  <Route path="/product/:productKey">
                      <ProductDetails></ProductDetails>
                  </Route>
                  <PrivateRoute path="/shipment">
                      <Shipment/>
                  </PrivateRoute>
                  <Route path="/login">
                      <Login/>
                  </Route>
                  <Route path="*">
                      <NotFound></NotFound>
                  </Route>
                </Switch>
          </Router>
     
      
    </userContext.Provider>
    </div>
  );
}

export default App;
