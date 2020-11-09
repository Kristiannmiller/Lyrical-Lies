import React from 'react';
import './CommentCards.css'
import faveIcon from '../../Assets/FaveIcon.svg'
import faveActive from '../../Assets/FaveActive.svg'
import PropTypes from 'prop-types'


const CommentCards = ({ songId, comments, updateComment }) => {
  let content
  if(!comments.length) {
    content = <h1>No lyrical lies here yet. Add yours!</h1>
  } else {
    let matches = comments.filter(comment => comment.songId === songId)
    if(matches.length) {
      content = matches.map((match, index) => {
        return (
          <section key={index} className="commentCard">
            <img
              id={match.id}
              onClick={updateComment}
              className="faveIcon"
              src={match.fave ? faveActive : faveIcon}
            />
            <h1>"{match.comment}"</h1>
          </section>
        )
      })
    } else {
      content = <h1>No lyrical lies here yet. Add yours!</h1>
    }
  }
  return (
    <section data-testid="commentCards" className="cardsContainer">
      {content}
    </section>
  )
}
export default CommentCards

CommentCards.propTypes = {
  songId: PropTypes.number,
  comments: PropTypes.array
}
