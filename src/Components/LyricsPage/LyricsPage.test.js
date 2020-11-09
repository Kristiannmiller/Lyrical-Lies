import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LyricsPage from './LyricsPage.js';
import { getSuggestions } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');

describe('LyricsPage', () => {
  describe('Unit Tests', () => {
    it('Should render a Lyrics Page', () => {
      const mockedFunction = jest.fn()
      render (
        <MemoryRouter>
          <LyricsPage
            songInfo= {{id: 2, artist: {name:"Kesha"}, title_short: "We R Who We R", preview: "http://cdn-preview-0.deezer.com/stream/c-008fe2e0399c13df6d1c840031ed1a00-2.mp3"}}
            lyrics={`Hot and dangerous`}
            error={``}
            submitComment={mockedFunction}
            comments= {[]}
          />
        </MemoryRouter>
      )
      const lyricsView = screen.getByTestId('lyricsView')
      const commentsSection = screen.getByText('Lyrical Lies:')
      expect(lyricsView).toBeInTheDocument();
      expect(commentsSection).toBeInTheDocument();
    })
    it('Should display the artist, song title, and lyrics of the chosen song', () => {
      const mockedFunction = jest.fn()
      render (
        <MemoryRouter>
          <LyricsPage
            songInfo= {{id: 2, artist: {name:'Kesha'}, title_short: 'We R Who We R', preview: "http://cdn-preview-0.deezer.com/stream/c-008fe2e0399c13df6d1c840031ed1a00-2.mp3"}}
            lyrics={`Hot and dangerous`}
            error={``}
            submitComment={mockedFunction}
            comments= {[]}
          />
        </MemoryRouter>
      )
      const artist = screen.getByText('Kesha')
      const title = screen.getByText('We R Who We R')
      const lyrics = screen.getByText('Hot and dangerous')
      expect(artist).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(lyrics).toBeInTheDocument();
    })
    it(`Should display an audio sample if it's available`, () => {
      const mockedFunction = jest.fn()
      render (
        <MemoryRouter>
          <LyricsPage
            songInfo= {{id: 2, artist: {name:'Kesha'}, title_short: 'We R Who We R', preview: "http://cdn-preview-0.deezer.com/stream/c-008fe2e0399c13df6d1c840031ed1a00-2.mp3"}}
            lyrics={`Hot and dangerous`}
            error={``}
            submitComment={mockedFunction}
            comments= {[]}
          />
        </MemoryRouter>
      )
      const preview = screen.getByTestId('audioSample')
      expect(preview).toBeInTheDocument();
    })
    it(`Should not display an audio sample if it's not available`, () => {
      const mockedFunction = jest.fn()
      render (
        <MemoryRouter>
          <LyricsPage
            songInfo= {{id: 2, artist: {name:'Kesha'}, title_short: 'We R Who We R'}}
            lyrics={`Hot and dangerous`}
            error={``}
            submitComment={mockedFunction}
            comments= {[]}
          />
        </MemoryRouter>
      )
      const preview = screen.queryByTestId('audioSample')
      expect(preview).not.toBeInTheDocument();
    })
    it(`Should display a loading page if there are no errors, but information is missing`, () => {
      const mockedFunction = jest.fn()
      render (
        <MemoryRouter>
          <LyricsPage
            songInfo= {{}}
            lyrics={``}
            error={``}
            submitComment={mockedFunction}
            comments= {[]}
          />
        </MemoryRouter>
      )
      const landingWrap = screen.getByTestId('landingWrap')
      const logo = screen.getByAltText('welcome to Lyrical Lies')
      const loadMessage = screen.getByText('Putting that record on now')
      expect(landingWrap).toBeInTheDocument();
      expect(logo).toBeInTheDocument();
      expect(loadMessage).toBeInTheDocument();
    })
    it(`Should display an error message if there is an error message`, () => {
      const mockedFunction = jest.fn()
      render (
        <MemoryRouter>
          <LyricsPage
            songInfo= {{}}
            lyrics={``}
            error={`Uh oh! This record is scratched. Please try again`}
            submitComment={mockedFunction}
            comments= {[]}
          />
        </MemoryRouter>
      )
      const landingWrap = screen.getByTestId('landingWrap')
      const logo = screen.getByAltText('welcome to Lyrical Lies')
      const errorMessage = screen.getByText('Uh oh! This record is scratched. Please try again')
      expect(landingWrap).toBeInTheDocument();
      expect(logo).toBeInTheDocument();
      expect(errorMessage).toBeInTheDocument();
    })
  })
  describe('Integration Tests', () => {
    it('Should render CommentCards if there are comments', () => {
      const mockedFunction = jest.fn()
      render (
        <MemoryRouter>
          <LyricsPage
            songInfo= {{id: 2, artist: {name:"Elton John"}, title_short: "Tiny Dancer", preview: "http://cdn-preview-0.deezer.com/stream/c-008fe2e0399c13df6d1c840031ed1a00-2.mp3"}}
            lyrics={`Hold me closer, Tiny Dancer`}
            error={``}
            submitComment={mockedFunction}
            comments= {[{songId: 2, comment: 'Hold me closer, Tony Danza'}]}
          />
        </MemoryRouter>
      )
      const comment = screen.getByText(`"Hold me closer, Tony Danza"`)
      const commentsWrap = screen.getByTestId('commentCards')
      expect(commentsWrap).toBeInTheDocument();
      expect(comment).toBeInTheDocument();
    })
    it('Should render a CommentsForm', () => {
      const mockedFunction = jest.fn()
      render (
        <MemoryRouter>
          <LyricsPage
            songInfo= {{id: 2, artist: {name:"Elton John"}, title_short: "Tiny Dancer", preview: "http://cdn-preview-0.deezer.com/stream/c-008fe2e0399c13df6d1c840031ed1a00-2.mp3"}}
            lyrics={`Hold me closer, Tiny Dancer`}
            error={``}
            submitComment={mockedFunction}
            comments= {[{songId: 2, comment: 'Hold me closer, Tony Danza'}]}
          />
        </MemoryRouter>
      )
      const formInput = screen.getByPlaceholderText("Share your misheard lyric with the world")
      const submitButton = screen.getByText("Submit")
      expect(submitButton).toBeInTheDocument();
      expect(formInput).toBeInTheDocument();
    })
  })
})
