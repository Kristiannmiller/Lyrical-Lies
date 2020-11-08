import { render, screen } from '@testing-library/react';
import CommentCards from './CommentCards.js';

test('works', () => {
  expect(true).toBe(true);
});

//TESTING IDEAS ::

//UNIT:
// It should render CommentCards
  // render component
  // expect get by test id "commentCards" to be in document
// It should display comments if a song has them
  //render component with some matching comments
  //expect getbytext(matching comment) to be in document
// It should display a prompt to comment if there are no comments
  //render component with no matching comments
  //expect get by text "No lyrical lies here yet. Add yours!" to be in document
  
