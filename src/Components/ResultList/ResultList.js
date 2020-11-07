import {Component} from 'react';
import './ResultList.css';
import { getSuggestions } from '../../apiCalls.js';
import {NavLink} from 'react-router-dom';

class ResultList extends Component {
  constructor(props) {
    super(props)
    this.state= {
      results: [],
      errorMessage: ''
    }
  }
  displayResults = async (search) => {
    const searchResults = await getSuggestions(search)
    if(!searchResults.data) {
      this.setState({results: [], errorMessage: searchResults})
    } else {
      this.setState({results: searchResults.data})
    }
  }
  handleClick = (event) => {
    const songInfo = this.state.results.find(result => {
      return result.id === +event.target.parentElement.id})
    this.props.displayLyrics(songInfo)
  }
  componentDidUpdate(prevProps) {
    if(this.props.input !== prevProps.input) {
      this.displayResults(this.props.input)
    }
  }
  render() {
    if(!this.state.results[0]){
      return <h2>{this.state.errorMessage}</h2>
    }
    const resultData = this.state.results.map((result, i) => {
      if( i < 6 ) {
        return (
        <section onClick={this.handleClick} id={result.id} className="resultCard">
          <h1>{`${result.artist.name} - ${result.title_short}`}</h1>
        </section>
      )}
    })
    return (
      <section className="resultsWrap">
        <NavLink to="/lyrics">
          {resultData}
        </NavLink>
      </section>
    )
  }
}
export default ResultList
