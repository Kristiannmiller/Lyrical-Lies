import { Component } from 'react';
import './HomePage.css';
import PropTypes from 'prop-types';
import ResultList from '../ResultList/ResultList.js';

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
      <section className='searchWrap'>
        <form>
          <input
            name='search'
            onChange={this.handleChange}
            id='searchInput'
            type='text'
            autoComplete='off'
            placeholder='Enter song title followed by artist'></input>
        </form>
        <ResultList input={this.state.input} displayLyrics={this.props.displayLyrics}/>
      </section>
    )
  }
}
export default HomePage;

HomePage.propTypes = {
  displayLyrics: PropTypes.func
}
