import './App.css';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import logo from '../Assets/lyricalLiesLogo.png'
import faves from '../Assets/favesIcon.png'
import home from '../Assets/homeIcon.png'
function App() {
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
                title="Return To Lobby"
                src={home}
                alt="Navigate back to home page"
              />
            </NavLink>
          </Route>
          <Route>
            <NavLink id="favesButton" activeClassName="activeHomeButton" to='/faves'>
              <img
                className="navImg"
                title="Return To Lobby"
                src={faves}
                alt="Navigate back to home page"
              />
            </NavLink>
          </Route>
          </section>
        </header>
      <Switch>
      </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
