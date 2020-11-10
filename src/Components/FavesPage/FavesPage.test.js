import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import FavesPage from './FavesPage';

describe('FavesPage', () => {
  describe('Unit Tests', () => {
    it('Should render a FavesPage', () => {
      const mockedFunction = jest.fn()
      render(
        <MemoryRouter>
          <FavesPage
            comments={[]}
            updateComment={mockedFunction}
          />
        </MemoryRouter>
      )
      const favesWrap = screen.getByTestId('favesWrap');
      expect(favesWrap).toBeInTheDocument();
    })
    it('Should display comments', () => {
      const mockedFunction = jest.fn()
      render(
        <MemoryRouter>
          <FavesPage
            comments={[
              {id: 1,
              songId: 5,
              songTitle: 'Tiny Dancer',
              artist: 'Elton John',
              comment: 'Hold me closer, Tony Danza',
              fave: true}
            ]}
            updateComment={mockedFunction}
          />
        </MemoryRouter>
      )
      const favesWrap = screen.getByTestId('favesWrap');
      const songTitle = screen.getByText('Tiny Dancer');
      const artistName = screen.getByText('Elton John');
      const comment = screen.getByText(`"Hold me closer, Tony Danza"`);
      expect(favesWrap).toBeInTheDocument();
      expect(songTitle).toBeInTheDocument();
      expect(artistName).toBeInTheDocument();
      expect(comment).toBeInTheDocument();
    })
    it('Should only display favorited comments', () => {
      const mockedFunction = jest.fn()
      render(
        <MemoryRouter>
          <FavesPage
            comments={[
              {id: 1,
              songId: 5,
              songTitle: 'Tiny Dancer',
              artist: 'Elton John',
              comment: 'Hold me closer, Tony Danza',
              fave: true},
              {id: 1,
              songId: 5,
              songTitle: 'Two Tickets To Paradise',
              artist: 'Eddie Money',
              comment: `I've got two chickens to paralise`,
              fave: false}
            ]}
            updateComment={mockedFunction}
          />
        </MemoryRouter>
      )
      const favesWrap = screen.getByTestId('favesWrap');
      const songTitle1 = screen.getByText('Tiny Dancer');
      const artistName1 = screen.getByText('Elton John');
      const comment1 = screen.getByText(`"Hold me closer, Tony Danza"`);
      const songTitle2 = screen.queryByText('Two Tickets To Paradise');
      const artistName2 = screen.queryByText('Eddie Money');
      const comment2 = screen.queryByText(`"I've got two chickens to paralise"`);
      expect(favesWrap).toBeInTheDocument();
      expect(songTitle1).toBeInTheDocument();
      expect(artistName1).toBeInTheDocument();
      expect(comment1).toBeInTheDocument();
      expect(songTitle2).not.toBeInTheDocument();
      expect(artistName2).not.toBeInTheDocument();
      expect(comment2).not.toBeInTheDocument();
    })
    it('Should display a prompt if there are no comments', () => {
      const mockedFunction = jest.fn()
      render(
        <MemoryRouter>
          <FavesPage
            comments={[]}
            updateComment={mockedFunction}
          />
        </MemoryRouter>
      )
      const favesWrap = screen.getByTestId('favesWrap');
      const logo = screen.getByAltText('Lyrical Lies logo');
      const prompt = screen.getByText('You have no favorite lyrical lies! Go find some!');
      expect(favesWrap).toBeInTheDocument();
      expect(logo).toBeInTheDocument();
      expect(prompt).toBeInTheDocument();
    })
  })
  describe('Unit Tests', () => {
    it('Should invoke a given function when clicked', () => {
      const mockedFunction = jest.fn()
      render(
        <MemoryRouter>
          <FavesPage
            comments={[
              {id: 1,
              songId: 5,
              songTitle: 'Tiny Dancer',
              artist: 'Elton John',
              comment: 'Hold me closer, Tony Danza',
              fave: true}
            ]}
            updateComment={mockedFunction}
          />
        </MemoryRouter>
      )
      const favesWrap = screen.getByTestId('favesWrap');
      const faveIcon = screen.getByAltText('active favorite icon');
      expect(favesWrap).toBeInTheDocument();
      expect(faveIcon).toBeInTheDocument();
      userEvent.click(faveIcon);
      expect(mockedFunction).toHaveBeenCalled();
    })
  })
})
