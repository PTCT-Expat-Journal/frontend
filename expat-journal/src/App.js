import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Login from "./components/Login";
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (

    <div className="App">
      <>
      <Header />
      <Route exact path="/login">
        <Login />
      </ Route> 
      <Footer />
      </>
    </div>
    
  );
}

export default App;
