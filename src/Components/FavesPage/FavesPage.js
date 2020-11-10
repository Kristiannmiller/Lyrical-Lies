import React from 'react';
import './FavesPage.css';
import faveIcon from '../../Assets/FaveIcon.svg';
import faveActive from '../../Assets/FaveActive.svg';
import logo from '../../Assets/lyricalLiesLogo.png';
import PropTypes from 'prop-types';


const FavesPage = ({ comments, updateComment }) => {
  let cards = []
  let faveComments
  if (comments.length) {
    faveComments = comments.filter(comment => comment.fave === true)
  }
  if (!comments.length || !faveComments.length) {
    cards.push(
      <section key={1} className='noFaveMessage'>
        <img
          className='welcomeLogo'
          title='Welcome to Lyrical Lies'
          src={logo}
          alt='Lyrical Lies logo'
        />
        <h2 className='message'>You have no favorite lyrical lies! Go find some!</h2>
      </section>
    )
  } else {
    cards = faveComments.map((comment, index) => {
      return (
        <section key={index} className='faveCard'>
          <img
            id={comment.id}
            onClick={updateComment}
            className='faveIcon'
            src={comment.fave ? faveActive : faveIcon}
            alt={comment.fave ? 'active favorite icon' : 'inactive favorite icon'}
          />
          <h1 className='faveTitle'>{comment.songTitle}</h1>
          <h2 className='faveArtist'>{comment.artist}</h2>
          <h3 className='faveComment'>"{comment.comment}"</h3>
        </section>
      )
    })
  }
  return (
    <section data-testid='favesWrap' className='favesWrap'>
      <section className='faveCardContainer'>
        {cards}
      </section>
    </section>
  )
}

export default FavesPage;

FavesPage.propTypes = {
  comments: PropTypes.array,
  updateComment: PropTypes.func
}
