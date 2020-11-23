import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import userEvent from '@testing-library/user-event';
import { getSuggestions, getLyrics } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');

describe('App', () => {
  describe('Unit Tests', () => {
    it('Should render a header', () => {
      render (
        <App />
      )
      const logo = screen.getByAltText('Lyrical Lies Logo')
      const homeButton = screen.getByAltText('Navigate back to home page')
      const favesButton = screen.getByAltText('Navigate to favorites page')
      expect(logo).toBeInTheDocument();
      expect(homeButton).toBeInTheDocument();
      expect(favesButton).toBeInTheDocument();
    })
  })
  describe('Integration Tests', () => {
    it('Should render the HomePage', () => {
      render (
        <App />
      )
      const homeButton = screen.getByAltText('Navigate back to home page')
      const favesButton = screen.getByAltText('Navigate to favorites page')
      expect(homeButton).toBeInTheDocument();
      expect(favesButton).toBeInTheDocument();
      userEvent.click(homeButton);
      const formInput = screen.getByPlaceholderText('Enter song title followed by artist')
      expect(formInput).toBeInTheDocument();
    })
    it('Should render the FavesPage', () => {
      render (
        <App />
      )
      const homeButton = screen.getByAltText('Navigate back to home page')
      const favesButton = screen.getByAltText('Navigate to favorites page')
      expect(homeButton).toBeInTheDocument();
      expect(favesButton).toBeInTheDocument();
      userEvent.click(favesButton);
      const favesWrap = screen.getByTestId('favesWrap')
      expect(favesWrap).toBeInTheDocument();
    })
    it('Should render the LyricsPage', async () => {
      getLyrics.mockResolvedValue(
        {lyrics: 'Hot and dangerous'}
      )
      getSuggestions.mockResolvedValue(
        {data: [{id: 1, artist: {name:'Arctic Monkeys'}, title_short: 'R U Mine?'},
        {id: 2, artist: {name:'Kesha'}, title_short: 'We R Who We R'},
        {id: 3, artist: {name:'Elton John'}, title_short: 'Rocket Man'},
        {id: 4, artist: {name:'Rihanna'}, title_short: 'Rude Boy'},
        {id: 5, artist: {name:'Ru Paul'}, title_short: 'Supermodel'},
        {id: 6, artist: {name:'Pearl Jam'}, title_short: 'Rats'}]}
      )
      render (
        <App />
      )
      const homeButton = screen.getByAltText('Navigate back to home page');
      const favesButton = screen.getByAltText('Navigate to favorites page');
      expect(homeButton).toBeInTheDocument();
      expect(favesButton).toBeInTheDocument();
      userEvent.click(homeButton);
      const formInput = screen.getByPlaceholderText('Enter song title followed by artist');
      expect(formInput).toBeInTheDocument();
      userEvent.type(formInput, 'r');
      const result1 = await waitFor(() => screen.getByText('Kesha - We R Who We R'));
      expect(result1).toBeInTheDocument();
      userEvent.click(result1);
      const lyrics = await waitFor(() => screen.getByText('Hot and dangerous'));
      const lyricsView = screen.getByTestId('lyricsView');
      expect(lyricsView).toBeInTheDocument();
      expect(lyrics).toBeInTheDocument();
    })
    it('Should redirect back to the homepage', () => {
      render (
        <App />
      )
      const homeButton = screen.getByAltText('Navigate back to home page')
      const favesButton = screen.getByAltText('Navigate to favorites page')
      expect(homeButton).toBeInTheDocument();
      expect(favesButton).toBeInTheDocument();
      userEvent.click(favesButton);
      const logo = screen.getByAltText('Lyrical Lies Logo')
      const favesWrap = screen.getByTestId('favesWrap')
      expect(favesWrap).toBeInTheDocument();
      expect(logo).toBeInTheDocument();
      userEvent.click(logo);
      const formInput = screen.getByPlaceholderText('Enter song title followed by artist')
      expect(formInput).toBeInTheDocument();
    })
  })
})
