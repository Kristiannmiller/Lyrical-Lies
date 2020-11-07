import {Component} from 'react';
import './ResultList.css'
import { getSuggestions } from '../../apiCalls.js'

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
        <button>
          <h1>{result.artist.name}</h1>
          <h2>{result.title}</h2>
        </button>
      )}
    })
    return (
      <section className="resultsWrap">
        {resultData}
      </section>
    )
  }
}
export default ResultList
