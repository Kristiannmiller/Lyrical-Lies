import React from 'react';
import logo from '../../Assets/lyricalLiesLogo.png'
import './LyricsPage.css'

const LyricsPage = ({songInfo, lyrics, error}) => {
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
      <section className="lyrics">
        <h1>{songInfo.title_short}</h1>
        <h2>{songInfo.artist.name}</h2>
        <p>{lyrics}</p>
      </section>
      <section className="commentsWrap">
        <h2>Say What?!</h2>
        <section className="comments">
          <h3>commentshere</h3>
        </section>
      </section>
    </section>
  )
}
export default LyricsPage
