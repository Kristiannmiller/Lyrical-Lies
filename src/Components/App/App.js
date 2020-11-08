import './App.css';
import {Component} from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import logo from '../../Assets/lyricalLiesLogo.png'
import faves from '../../Assets/favesIcon.png'
import home from '../../Assets/homeIcon.png'
import LandingPage from '../LandingPage/LandingPage.js'
import HomePage from '../HomePage/HomePage.js'
import LyricsPage from '../LyricsPage/LyricsPage.js'
import { getLyrics } from '../../apiCalls.js'

class App extends Component {
  constructor() {
    super()
    this.state= {
      songInfo: {},
      lyrics: "",
      error: "",
      comments: []
    }
  }
  displayLyrics = async (songInfo) => {
    const foundLyrics = await getLyrics(songInfo.artist.name, songInfo.title)
    if(foundLyrics.lyrics === '') {
      this.setState({error: 'Uh oh! This record is scratched. Please try again'})
    } else {
      this.setState(prevState => ({
        songInfo: {...prevState.songInfo = songInfo},
        lyrics: foundLyrics.lyrics,
        error: ''
      }))
    }
  }
  render() {
    return (
      <BrowserRouter>
        <main>
          <header>
            <img
            className="logo"
            title="Lyrical Lies Logo"
            src={logo}
            alt="Lyrical Lies Logo"
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
                <NavLink id="favesButton" activeClassName="activeFavesButton" to='/faves'>
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
          <Route path='/home'>
            <HomePage displayLyrics={this.displayLyrics}/>
          </Route>
          <Route path={'/lyrics'}>
            <LyricsPage songInfo={this.state.songInfo} lyrics={this.state.lyrics} error={this.state.error}/>
          </Route>
          <Route exactPath='/'>
            <LandingPage />
          </Route>
        </Switch>
        </main>
      </BrowserRouter>
    );

  }
}

export default App;
