import React from 'react';
import './CommentCards.css'


const CommentCards = ({ songId, comments }) => {
  let content
  if(!comments.length) {
    content = <h1>No lyrical lies here yet. Add yours!</h1>
  } else {
    let matches = comments.filter(comment => comment.songId === songId)
    if(matches.length) {
      content = matches.map((match, index) => {
        return (
          <section key={index} className="commentCard">
            <h1>"{match.comment}"</h1>
          </section>
        )
      })
    } else {
      content = <h1>No lyrical lies here yet. Add yours!</h1>
    }
  }
  return (
    <section className="cardsContainer">
      {content}
    </section>
  )
}
export default CommentCards
