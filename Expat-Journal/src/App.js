import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import PrivateRoute from './utilities/PrivateRoute';
import './App.css';
import ImagesList from './components/ImagesList';
import ImagesInfo from './components/ImagesInfo';
import AddImage from './components/addImage';
import ImgGit from './components/ImgGit';
import { UserContext } from './context/UserContext';

function App() {
  const [user, setUser] = useState([]);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/images">
          <ImagesList />
        </Route>
        <Route path="/images/:id">
          <ImagesInfo />
        </Route>
        <Footer />
        {/* <Route exact path="/" component={Login} /> */}
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/protected" component={HomePage} />
        <PrivateRoute exact path="/addImages" component={AddImage} />
        <PrivateRoute exact path="/images" component={ImgGit} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
