import { render, screen } from '@testing-library/react';
import App from './App';

test('works', () => {
  expect(true).toBe(true);
});


// TESTING IDEAS ::

//UNIT:
// It should render a header
  //expect that alt text is in document for each element

//INTEGRATION:
  //It should render the HomePage
    //click on home button
    //expect that search bar is in the document
  //It should render the FavesPage
    //click on faves button
    //expect that faves elements are in the document
  //It should render the LyricsPage
    //click on home homeButton
    //type in field
    //mock both api calls to return a song / Lyrics
    //click on api returned info
    //expect document to contain mocked data
