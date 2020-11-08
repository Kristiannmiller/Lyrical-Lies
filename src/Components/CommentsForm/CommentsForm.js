import React from 'react';
import './CommentsForm.css'

const CommentsForm = ({submitComment}) => {
  return (
    <section className="commentFormWrap">
      <form>
        <input
          name="comment"
          id="commentInput"
          type="text"
          autoComplete="off"
          placeholder="Share your misheard lyric with the world"></input>
          <button onClick={submitComment}>Submit</button>
      </form>
    </section>
  )
}
export default CommentsForm
