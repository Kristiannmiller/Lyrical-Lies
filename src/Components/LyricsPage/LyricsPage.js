import React from 'react';
import logo from '../../Assets/lyricalLiesLogo.png'
import './LyricsPage.css'
import CommentsForm from '../CommentsForm/CommentsForm.js'
import CommentCards from '../CommentCards/CommentCards.js'

const LyricsPage = ({songInfo, lyrics, error, submitComment, comments}) => {
  if(error || !lyrics) {
    return (
      <section className="landingWrap">
        <img
          className="welcomeLogo"
          title="Welcome to Lyrical Lies"
          src={logo}
          alt="welcome to Lyrical Lies"
        />
        <h2 className="message">
        {!error ? `Putting that record on now` : error}</h2>
      </section>
    )
  }
  return (
    <section className="lyricsPageWrap">
      <section className="lyricsWrap">
        <section className="songInfo">
          <h1 className="songDetails">{songInfo.title_short}</h1>
          <h2 className="songDetails">{songInfo.artist.name}</h2>
        </section>
        <p className="lyrics">{lyrics}</p>
      </section>
      <section className="commentsWrap">
        <h2 className="commentHeader">Lyrical Lies:</h2>
        <section className="comments">
          <section className="cardContainer">
            <CommentCards songId={songInfo.id} comments={comments}/>
          </section>
          <CommentsForm songId={songInfo.id} submitComment={submitComment}/>
        </section>
      </section>
    </section>
  )
}
export default LyricsPage
