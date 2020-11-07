import React from 'react';
import './LyricsPage.css'

const LyricsPage = ({songInfo, lyrics}) => {
  console.log(songInfo, lyrics);
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
