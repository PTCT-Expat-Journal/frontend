import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import PrivateRoute from './utilities/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Route exact path="/login">
        <Login />
      </ Route> 
      <Footer />
        {<Route exact path="/" component={Login} /> }
        {<Route exact path="/SignUp" component = {SignUp} /> }
        <PrivateRoute exact path="/protected" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
