import React from 'react';
import PropTypes from 'prop-types'
import './CommentsForm.css'

const CommentsForm = ({submitComment}) => {
  const handleClick = (e) => {
    e.preventDefault()
    let comment = document.getElementById("commentInput").value
    if(comment !== '') {
      submitComment(comment)
      document.getElementById("commentInput").value = ''
    } else {
      alert("Please type in a misheard lyric to post")
    }
  }
  return (
    <section className="commentFormWrap">
      <form>
        <input
          name="comment"
          id="commentInput"
          type="text"
          autoComplete="off"
          placeholder="Share your misheard lyric with the world"></input>
          <button onClick={handleClick}>Submit</button>
      </form>
    </section>
  )
}
export default CommentsForm

CommentsForm.propTypes = {
  submitComment: PropTypes.func
}
