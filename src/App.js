import React, { createContext, useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipment from './components/Shipment/Shipment';
import Inventory from './components/Inventory/Inventory';
import NoMatch from './components/NoMatch/NoMatch';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({
        name: '',
        email: '',
        photo: '',
        isSignIn: false,
        error: ''
    })
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}  >
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/service">
                        <Services />
                    </Route>
                    <PrivateRoute path='/inventory'>
                        <Inventory />
                    </PrivateRoute>
                    <PrivateRoute path="/shipment">
                        <Shipment />
                    </PrivateRoute>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
