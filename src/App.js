// import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Favorite from './components/Favorite'
import Login from './Login'
import LogoutBtn from './LogoutBtn'

import { withAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}

                {this.props.auth0.isAuthenticated? <Home/> : <Login/>}
              </Route>
              <Route exact path="/Favorite">
                {this.props.auth0.isAuthenticated && (
                  <>
                 
                    <Favorite />
                  </>
                )}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}



export default withAuth0(App);
