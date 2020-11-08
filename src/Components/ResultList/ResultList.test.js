import { render, screen } from '@testing-library/react';
import ResultList from './ResultList.js';

test('works', () => {
  expect(true).toBe(true);
});

// It should display up to 5 search results
  //mock api call with more than 5 results
  //type in 'Elton'
  //expect that only 5 results are in document

// It should display an error message if no results are found
  //mock api error;
  //type fake song
  //expect getbytext error message to be in document
