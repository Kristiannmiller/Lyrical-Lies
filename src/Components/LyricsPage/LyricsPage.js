import React from 'react';
import './LyricsPage.css'

const LyricsPage = ({lyrics}) => {
  return (
    <section className="lyricsWrap">
      <h1>{lyrics}</h1>
    </section>
  )
}
export default LyricsPage
