import { render, screen } from '@testing-library/react';
import CommentsForm from './CommentsForm.js';

test('works', () => {
  expect(true).toBe(true);
});

// TESTING IDEAS ::

//UNIT:
// It should render a CommentsForm
  //render component
  //expect placeholder text "Share your misheard lyric with the world" to be in doc
  //expect getbytext "submit" to be in the doc
//It should display a user's input
  //render component
  //type into comment input
  //assert that getByDisplayValue is in the doc
//It should clear the input after submitting
  //render component
  //type into comment input
  //click submit button
  //assert that getByplaceholdertext.value to be ''

//INTEGRATION:
// It should fire a given function on onClick
  //render component with mocked function
  //type into comment commentInput
  //click submit button
  //assert that function was called
//It should display a comment after it has been submitted
  //render component
  //type into commentInput
  //click submit button
  //expect comment text to be in doc
