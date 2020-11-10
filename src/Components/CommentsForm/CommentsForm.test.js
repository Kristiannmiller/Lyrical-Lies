import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CommentsForm from './CommentsForm.js';
import userEvent from '@testing-library/user-event';


describe('CommentsForm', () => {
  describe('Unit Tests', () => {
    it('Should render a Comment Form', () => {
      render (
        <MemoryRouter>
          <CommentsForm />
        </MemoryRouter>
      )
      const formInput = screen.getByPlaceholderText('Share your misheard lyric with the world');
      const submitButton = screen.getByText('Submit');
      expect(submitButton).toBeInTheDocument();
      expect(formInput).toBeInTheDocument();
    })
    it('Should display a user input', () => {
      render (
        <MemoryRouter>
          <CommentsForm />
        </MemoryRouter>
      )
      const formInput = screen.getByPlaceholderText('Share your misheard lyric with the world');
      const submitButton = screen.getByText('Submit');
      expect(submitButton).toBeInTheDocument();
      expect(formInput).toBeInTheDocument();
      userEvent.type(formInput, 'testing');
      const value = screen.getByDisplayValue('testing');
      expect(value).toBeInTheDocument();
    })
    it('Should clear the input after submitting', () => {
      const mockedFunction = jest.fn();
      render (
        <MemoryRouter>
          <CommentsForm
            submitComment={mockedFunction}
          />
        </MemoryRouter>
      )
      const formInput = screen.getByPlaceholderText('Share your misheard lyric with the world');
      const submitButton = screen.getByText('Submit');
      expect(submitButton).toBeInTheDocument();
      expect(formInput).toBeInTheDocument();
      userEvent.type(formInput, 'testing');
      expect(formInput.value).toBe('testing');
      userEvent.click(submitButton);
      expect(formInput.value).toBe('');
    })
    it('Should not allow a user to post a blank comment', () => {
      const mockedFunction = jest.fn()
      window.alert = jest.fn()
      render (
        <MemoryRouter>
          <CommentsForm
            submitComment={mockedFunction}
          />
        </MemoryRouter>
      )
      const formInput = screen.getByPlaceholderText('Share your misheard lyric with the world');
      const submitButton = screen.getByText('Submit');
      expect(submitButton).toBeInTheDocument();
      expect(formInput).toBeInTheDocument();
      userEvent.click(submitButton);
      const emptyComment = screen.queryByText(`""`);
      expect(window.alert).toHaveBeenCalled();
      expect(emptyComment).not.toBeInTheDocument();
    })
  })
  describe('Integration Tests', () => {
    it('Should invoke a given function when the submit button is clicked', () => {
      const mockedFunction = jest.fn()
      render (
        <MemoryRouter>
          <CommentsForm
            submitComment={mockedFunction}
          />
        </MemoryRouter>
      )
      const formInput = screen.getByPlaceholderText('Share your misheard lyric with the world');
      const submitButton = screen.getByText('Submit');
      expect(submitButton).toBeInTheDocument();
      expect(formInput).toBeInTheDocument();
      userEvent.type(formInput, 'testing');
      expect(formInput.value).toBe('testing');
      userEvent.click(submitButton);
      expect(mockedFunction).toHaveBeenCalledWith('testing');
    })
  })
})
