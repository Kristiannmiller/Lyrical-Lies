import { render, screen } from '@testing-library/react';
import App from './App';

test('works', () => {
  expect(true).toBe(true);
});

// TESTING IDEAS ::

// It should render a form
  //expect that form placeholder text is in document


// It should render the result list after each change to the input
  //mock api call with two results
  //type once
  //expect first result to appear
  //type once
  //expect second result to appear