import React from 'react';
import logo from '../../Assets/lyricalLiesLogo.png'
import './LyricsPage.css'

const LyricsPage = ({songInfo, lyrics, error}) => {
  console.log(songInfo, lyrics, "and error", error);
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
        {error ? error : `Putting that record on now`}</h2>
      </section>
    )
  }
  return (
    <section className="lyricsWrap">
      <section className="lyrics">
        <h1>{songInfo.title_short}</h1>
        <h2>{songInfo.artist.name}</h2>
        <p>{lyrics}</p>
      </section>
    </section>
  )
}
export default LyricsPage
