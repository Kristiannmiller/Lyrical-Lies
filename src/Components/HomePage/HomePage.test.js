import { render, screen } from '@testing-library/react';
import HomePage from './HomePage.js';

test('works', () => {
  expect(true).toBe(true);
});

// TESTING IDEAS ::

//UNIT:
// It should render a form
  //expect that form placeholder text is in document
//It should display an error message if no

//INTEGRATION:
// It should render a ResultList
  // mock api call with results
  //type once
  //assert that results are in doc
// It should render the result list after each change to the input
  //mock api call with two results
  //type once
  //expect first result to appear
  //type once
  //expect second result to appear
// It should render an error message if no results are found
  //mock api call with error;
  //type space
  //expect error message to be in document
