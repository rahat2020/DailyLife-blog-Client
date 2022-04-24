import React, { useContext } from 'react';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { Context } from './Context/Context';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

export default function App() {

  const { user } = useContext(Context);
  // const user = false;
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/post/:postId">
          <Single />
        </Route>
        <Route exact path="/write">
          {
            user ? <Write /> : <Register />
          }
        </Route>
        <Route exact path="/login">
          {
            user ? <Home /> : <Login />
          }
        </Route>
        <Route exact path="/register">
          {
            user ? <Home /> : <Register />
          }
        </Route>
        <Route exact path="/settings">
          {
            user ? <Settings /> : <Register />
          }
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}
