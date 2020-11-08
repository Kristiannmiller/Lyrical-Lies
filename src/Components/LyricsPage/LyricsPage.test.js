import { render, screen } from '@testing-library/react';
import LyricsPage from './LyricsPage.js';

test('works', () => {
  expect(true).toBe(true);
});

// TESTING IDEAS ::

//UNIT:
// It should render a lyrics page
  //render component with lyrics and songInfo
  //expect that test id lyricsView is in the doc
  //expect that getbytext Lyrical Lies: is in the doc
// It should display song title, artist, and lyrics
  //render component with lyrics and songInfo
  //expect song title, artist, and lyrics text to be in the document
// It should display an audio sample if it's available
  //render component with lyrics and songInfo with preview
  //expect getbyrole(audio) to be in the document
// It should not display an audio sample if it's unavailable
    //render component with lyrics and songInfo with preview
    //expect getbyrole(audio) to not be in the document
// It should display a loading page if there are no errors, but information is missing
  //render component with no lyrics, songInfo, or error;
  //expect logo to be in doc
  //expect get by text "putting that record on now" to be in document
// It should display an error message if there are no errors, but information is missing
    //render component with error;
    //expect logo to be in doc
    //expect get by text of error message to be in document


//INTEGRATION:
// It should render CommentCards if there are comments
  //render component with some matching comments
  //expect getbytext(matching comment) to be in document
// It should display a prompt to comment if there are no comments
  //render component with no matching comments
  //expect get by text No lyrical lies here yet. Add yours! to be in document
// It should render CommentsForm
  //render component
  //expect get by id "comment input" to be in document
  //expect get by text submit to be in document
