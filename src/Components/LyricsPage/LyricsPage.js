import React from 'react';
import logo from '../../Assets/lyricalLiesLogo.png'
import './LyricsPage.css'
import PropTypes from 'prop-types'
import CommentsForm from '../CommentsForm/CommentsForm.js'
import CommentCards from '../CommentCards/CommentCards.js'

const LyricsPage = ({songInfo, lyrics, error, submitComment, comments}) => {
  const onTrackChange = () => {
    const audio = document.getElementsByClassName("sample")[0]
    if(audio) {
      audio.load();
    }
  }
  if(error || !lyrics) {
    return (
      <section data-testid="landingWrap" className="landingWrap">
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

  let audioSample =
  <audio onClick={onTrackChange()} className="sample" controls>
    <source data-testid="audioSample" src={songInfo.preview} type="audio/mpeg"/>
  </audio>

  return (
    <section data-testid="lyricsView" className="lyricsPageWrap">
      <section className="lyricsWrap">
        <section className="songInfo">
          <h1 className="songDetails">
          {songInfo.title_short}
          </h1>
          <h2 className="songDetails">{songInfo.artist.name}</h2>
          {songInfo.preview && audioSample}
        </section>
        <p className="lyrics">{`${lyrics}`}</p>
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

LyricsPage.propTypes = {
  songInfo: PropTypes.object,
  lyrics: PropTypes.string,
  error: PropTypes.string,
  submitComment: PropTypes.func,
  comments: PropTypes.array
}
