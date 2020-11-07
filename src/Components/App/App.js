import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import logo from '../../Assets/lyricalLiesLogo.png'
import faves from '../../Assets/favesIcon.png'
import home from '../../Assets/homeIcon.png'
import LandingPage from '../LandingPage/LandingPage.js'

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <header>
          <img
            className="logo"
            title="Return To Lobby"
            src={logo}
            alt="Navigate back to home page"
          />
          <section className="navigationWrap">
          <Route>
            <NavLink id="homeButton" activeClassName="activeHomeButton" to='/home'>
              <img
                className="navImg"
                title="Return to Homepage"
                src={home}
                alt="Navigate back to home page"
              />
            </NavLink>
          </Route>
          <Route>
            <NavLink id="favesButton" activeClassName="activeHomeButton" to='/faves'>
              <img
                className="navImg"
                title="View Favorite Lyrics"
                src={faves}
                alt="Navigate to favorites page"
              />
            </NavLink>
          </Route>
          </section>
        </header>
      <Switch>
        <Route path='/home'></Route>
        <Route path='/lyrics'></Route>
        <Route exactPath='/'>
          <LandingPage />
        </Route>
      </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
