import React from 'react';
import './FavesPage.css'
import PropTypes from 'prop-types'


const FavesPage = ({ comments }) => {
  return (
    <section data-testid="favesWrap" className="favesWrap">
      <h2>Your favorite lyrical lies</h2>
    </section>
  )
}

export default FavesPage;

FavesPage.propTypes = {
  comments: PropTypes.array
}
