import React from 'react';
import logo from '../../Assets/lyricalLiesLogo.png'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <section className="landingWrap">
      <img
        className="welcomeLogo"
        title="Welcome to Lyrical Lies"
        src={logo}
        alt="welcome to Lyrical Lies"
      />
      <h2 data-testid="slogan" className="slogan">Where being wrong is always right.</h2>
      <p data-testid="intro" className="intro">The world's top misheard lyrics forum<br/>
      Completely anonymous posting.<br/>
      Don't worry, we've heard 'em all.</p>
      <h3 data-testid="prompt">Click the 'Home' button to search for a song</h3>
    </section>
  )
}
export default LandingPage
