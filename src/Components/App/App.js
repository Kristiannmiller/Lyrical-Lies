import './App.css';
import {Component} from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import logo from '../../Assets/lyricalLiesLogo.png'
import faves from '../../Assets/favesIcon.png'
import home from '../../Assets/homeIcon.png'
import LandingPage from '../LandingPage/LandingPage.js'
import HomePage from '../HomePage/HomePage.js'
import LyricsPage from '../LyricsPage/LyricsPage.js'
import FavesPage from '../FavesPage/FavesPage.js'
import { getLyrics } from '../../apiCalls.js'
import { comments } from '../../CommentsDataset/CommentsData.js'


class App extends Component {
  constructor() {
    super()
    this.state= {
      songInfo: {},
      lyrics: "",
      error: "",
      comments: comments
    }
  }
  displayLyrics = async (songInfo) => {
    const foundLyrics = await getLyrics(songInfo.artist.name, songInfo.title)
    if(foundLyrics.lyrics === '') {
      this.setState(prevState => ({
        songInfo: {...prevState.songInfo = {}},
        lyrics: '',
        error: 'Uh oh! This record is scratched. Please try again'
      }))
    } else {
      this.setState(prevState => ({
        songInfo: {...prevState.songInfo = songInfo},
        lyrics: foundLyrics.lyrics,
        error: ''
      }))
    }
  }
  submitComment = (comment) => {
    const newComment = {
      id: Date.now(),
      songId: this.state.songInfo.id,
      songTitle: this.state.songInfo.title_short,
      artist: this.state.songInfo.artist.name,
      comment: comment,
      fave: false
    }
    console.log(newComment);
    this.setState({comments: [...this.state.comments, newComment]})
  }
  updateComment = (event) => {
    const commentId = +event.target.id;
    const updatedComments =
    this.state.comments.map(comment => {
      console.log("commentid", commentId, "comment", comment)
      if(comment.id === commentId) {
        comment.fave = !comment.fave
      }
      return comment
    })
    this.setState({comments: updatedComments})
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
          <Route path='/faves'>
            <FavesPage
              comments={this.state.comments}
              updateComment={this.updateComment}
            />
          </Route>
          <Route path='/lyrics'>
            <LyricsPage
              songInfo={this.state.songInfo}
              lyrics={this.state.lyrics}
              error={this.state.error}
              submitComment={this.submitComment}
              comments={this.state.comments}
              updateComment={this.updateComment}
            />
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
