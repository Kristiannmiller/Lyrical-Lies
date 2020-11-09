import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import CommentCards from './CommentCards.js';

describe('CommentCards', () => {
  describe('Unit Tests', () => {
    it('Should render Comment Cards', () => {
      render (
        <MemoryRouter>
          <CommentCards
            songId= {1}
            comments= {[]}
            />
        </MemoryRouter>
      )
      const commentsWrap = screen.getByTestId('commentCards')
      expect(commentsWrap).toBeInTheDocument();
    })
    it('Should only display comments', () => {
      render (
        <MemoryRouter>
          <CommentCards
            songId= {1}
            comments= {[
              {songId: 1, comment: 'test1'},
            ]}
            />
        </MemoryRouter>
      )
      const commentsWrap = screen.getByTestId('commentCards')
      expect(commentsWrap).toBeInTheDocument();
      const comment1 = screen.getByText(`"test1"`)
      expect(comment1).toBeInTheDocument();
    })
    it('Should only display the comments that match the song ID', () => {
      render (
        <MemoryRouter>
          <CommentCards
            songId= {1}
            comments= {[
              {songId: 1, comment: 'test1'},
              {songId: 2, comment: 'test2'},
              {songId: 1, comment: 'test3'}
            ]}
            />
        </MemoryRouter>
      )
      const commentsWrap = screen.getByTestId('commentCards')
      expect(commentsWrap).toBeInTheDocument();
      const comment1 = screen.getByText(`"test1"`)
      const comment2 = screen.queryByText(`"test2"`)
      const comment3 = screen.getByText(`"test3"`)
      expect(comment1).toBeInTheDocument();
      expect(comment3).toBeInTheDocument();
      expect(comment2).not.toBeInTheDocument();
    })
    it('It should display a prompt to comment if there are no comments', () => {
      render (
        <MemoryRouter>
          <CommentCards
            songId= {1}
            comments= {[]}
            />
        </MemoryRouter>
      )
      const commentsWrap = screen.getByTestId('commentCards')
      expect(commentsWrap).toBeInTheDocument();
      const promptMessage = screen.getByText("No lyrical lies here yet. Add yours!")
      expect(promptMessage).toBeInTheDocument();
    })
    it('It should display a prompt to comment if there are no matching comments', () => {
      render (
        <MemoryRouter>
          <CommentCards
            songId= {1}
            comments= {[
              {songId: 4, comment: 'test1'},
              {songId: 2, comment: 'test2'},
              {songId: 5, comment: 'test3'}
            ]}
            />
        </MemoryRouter>
      )
      const commentsWrap = screen.getByTestId('commentCards')
      expect(commentsWrap).toBeInTheDocument();
      const comment1 = screen.queryByText(`"test1"`)
      const comment2 = screen.queryByText(`"test2"`)
      const comment3 = screen.queryByText(`"test3"`)
      expect(comment1).not.toBeInTheDocument();
      expect(comment2).not.toBeInTheDocument();
      expect(comment3).not.toBeInTheDocument();
      const promptMessage = screen.getByText("No lyrical lies here yet. Add yours!")
      expect(promptMessage).toBeInTheDocument();
    })
    it('It should display the inactive favorite image when a comment is not a favorite', () => {
      render (
        <MemoryRouter>
          <CommentCards
            songId= {1}
            comments= {[
              {id: 1234, songId: 1, comment: 'test1', fave: false}
            ]}
            />
        </MemoryRouter>
      )
      const commentsWrap = screen.getByTestId('commentCards')
      expect(commentsWrap).toBeInTheDocument();
      const comment1 = screen.getByText(`"test1"`)
      expect(comment1).toBeInTheDocument();
      const faveIcon = screen.getByAltText("inactive favorite icon")
      expect(faveIcon).toBeInTheDocument();
    })
    it('It should display the active favorite image when a comment is a favorite', () => {
      render (
        <MemoryRouter>
          <CommentCards
            songId= {1}
            comments= {[
              {id: 1234, songId: 1, comment: 'test1', fave: true}
            ]}
            />
        </MemoryRouter>
      )
      const commentsWrap = screen.getByTestId('commentCards')
      expect(commentsWrap).toBeInTheDocument();
      const comment1 = screen.getByText(`"test1"`)
      expect(comment1).toBeInTheDocument();
      const faveIcon = screen.getByAltText("active favorite icon")
      expect(faveIcon).toBeInTheDocument();
    })
  })
  describe('Integration Tests', () => {
    it('Should invoke a given function when clicked', () => {
      const mockedFunction = jest.fn()
      render (
        <MemoryRouter>
          <CommentCards
          songId= {1}
          comments= {[
            {id: 1234, songId: 1, comment: 'test1', fave: true}
            ]}
            updateComment={mockedFunction}
          />
        </MemoryRouter>
      )
      const commentsWrap = screen.getByTestId('commentCards')
      expect(commentsWrap).toBeInTheDocument();
      const comment1 = screen.getByText(`"test1"`)
      expect(comment1).toBeInTheDocument();
      const faveIcon = screen.getByAltText("active favorite icon")
      expect(faveIcon).toBeInTheDocument();
      userEvent.click(faveIcon);
      expect(mockedFunction).toHaveBeenCalled()
    })
  })
})
