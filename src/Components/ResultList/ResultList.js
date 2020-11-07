import {Component} from 'react';
import './ResultList.css'

class ResultList extends Component {
  constructor(props) {
    super(props)
    this.state= {
      results: []
    }
  }
  render() {
    return (
      <section className="resultsWrap">
      <h2>{this.state.results}</h2>
      </section>
    )
  }
}
export default ResultList
