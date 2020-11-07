import { Component } from 'react';
import './HomePage.css';
import ResultList from '../ResultList/ResultList.js'

class HomePage extends Component {
  constructor() {
    super()
    this.state= {
      input: ''
    }
  }
  handleChange = (e) => {
    e.preventDefault()
    this.setState({input: e.target.value});
  }
  render() {
    return (
      <section>
        <input onChange={this.handleChange} id="searchInput" type="text" placeholder="start typing for song results"></input>
        <ResultList input={this.state.input}/>
      </section>
    )
  }
}
export default HomePage;
