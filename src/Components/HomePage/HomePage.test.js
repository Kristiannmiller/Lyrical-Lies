import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage.js';
import userEvent from '@testing-library/user-event';
import { getSuggestions } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');

describe('HomePage', () => {
  describe('Unit Tests', () => {
    it('Should render a search form', () => {
      render (
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      )
      const formInput = screen.getByPlaceholderText("Enter song title followed by artist")
      expect(formInput).toBeInTheDocument();
    })
  })
  describe('Integration Tests', () => {
    it('Should render a ResultList', async () => {
      const mockedFunction = jest.fn()
      getSuggestions.mockResolvedValueOnce(
        {data: [{id: 1, artist: {name:"Arctic Monkeys"}, title_short: "R U Mine?"},
        {id: 2, artist: {name:"Kesha"}, title_short: "We R Who We R"},
        {id: 3, artist: {name:"Elton John"}, title_short: "Rocket Man"},
        {id: 4, artist: {name:"Rihanna"}, title_short: "Rude Boy"},
        {id: 5, artist: {name:"Ru Paul"}, title_short: "Supermodel"},
        {id: 6, artist: {name:"Pearl Jam"}, title_short: "Rats"}]}
      )
      render (
        <MemoryRouter>
          <HomePage
            displayLyrics={mockedFunction}
          />
        </MemoryRouter>
      )
      const formInput = screen.getByPlaceholderText("Enter song title followed by artist")
      expect(formInput).toBeInTheDocument();
      userEvent.type(formInput, "r");
      const result1 = await waitFor(() => screen.getByText('Arctic Monkeys - R U Mine?'))
      expect(result1).toBeInTheDocument()
    })
    it('Should render a ResultList with each change to the input', async () => {
      const mockedFunction = jest.fn()
      getSuggestions.mockResolvedValueOnce(
        {data: [{id: 1, artist: {name:"Arctic Monkeys"}, title_short: "R U Mine?"},
        {id: 2, artist: {name:"Kesha"}, title_short: "We R Who We R"},
        {id: 3, artist: {name:"Elton John"}, title_short: "Rocket Man"},
        {id: 4, artist: {name:"Rihanna"}, title_short: "Rude Boy"},
        {id: 5, artist: {name:"Ru Paul"}, title_short: "Supermodel"},
        {id: 6, artist: {name:"Pearl Jam"}, title_short: "Rats"}]}
      )
      .mockResolvedValueOnce(
        {data: [{id: 7, artist: {name:"Vance Joy"}, title_short: "Riptide"},
        {id: 8, artist: {name:"Nelly"}, title_short: "Ride Wit Me"},
        {id: 9, artist: {name:"Lin-Manuel Miranda"}, title_short: "Right Hand Man"},
        {id: 10, artist: {name:"Bishop Briggs"}, title_short: "River"},
        {id: 11, artist: {name:"Andra Day"}, title_short: "Rise Up"},
        {id: 12, artist: {name:"Jason Derulo"}, title_short: "Ridin Solo"}]}
      )
      render (
        <MemoryRouter>
          <HomePage
            displayLyrics={mockedFunction}
          />
        </MemoryRouter>
      )
      const formInput = screen.getByPlaceholderText("Enter song title followed by artist")
      expect(formInput).toBeInTheDocument();
      userEvent.type(formInput, "r");
      const result1 = await waitFor(() => screen.getByText('Arctic Monkeys - R U Mine?'))
      expect(result1).toBeInTheDocument()
      userEvent.type(formInput, "i");
      const result2 = await waitFor(() => screen.getByText('Nelly - Ride Wit Me'))
      expect(result2).toBeInTheDocument()
    })
    it('Should only display the first 5 results', async () => {
      const mockedFunction = jest.fn()
      getSuggestions.mockResolvedValueOnce(
        {data: [{id: 1, artist: {name:"Arctic Monkeys"}, title_short: "R U Mine?"},
        {id: 2, artist: {name:"Kesha"}, title_short: "We R Who We R"},
        {id: 3, artist: {name:"Elton John"}, title_short: "Rocket Man"},
        {id: 4, artist: {name:"Rihanna"}, title_short: "Rude Boy"},
        {id: 5, artist: {name:"Ru Paul"}, title_short: "Supermodel"},
        {id: 6, artist: {name:"Pearl Jam"}, title_short: "Rats"}]}
      )
      render (
        <MemoryRouter>
          <HomePage
            displayLyrics={mockedFunction}
          />
        </MemoryRouter>
      )
      const formInput = screen.getByPlaceholderText("Enter song title followed by artist")
      expect(formInput).toBeInTheDocument();
      userEvent.type(formInput, "r");
      const result1 = await waitFor(() => screen.getByText('Arctic Monkeys - R U Mine?'))
      const result2 = await waitFor(() => screen.getByText('Kesha - We R Who We R'))
      const result3 = await waitFor(() => screen.getByText('Elton John - Rocket Man'))
      const result4 = await waitFor(() => screen.getByText('Rihanna - Rude Boy'))
      const result5 = await waitFor(() => screen.getByText('Ru Paul - Supermodel'))
      const result6 = await waitFor(() => screen.queryByText('Pearl Jam - Rats'))
      expect(result1).toBeInTheDocument();
      expect(result2).toBeInTheDocument();
      expect(result3).toBeInTheDocument();
      expect(result4).toBeInTheDocument();
      expect(result5).toBeInTheDocument();
      expect(result6).not.toBeInTheDocument();
    })
    it('Should display an error message if no results are found', async () => {
      const mockedFunction = jest.fn()
      getSuggestions.mockResolvedValueOnce(
        "No songs found"
      )
      render (
        <MemoryRouter>
          <HomePage
            displayLyrics={mockedFunction}
          />
        </MemoryRouter>
      )
      const formInput = screen.getByPlaceholderText("Enter song title followed by artist")
      expect(formInput).toBeInTheDocument();
      userEvent.type(formInput, "r");
      const error = await waitFor(() => screen.getByText('No songs found'))
      expect(error).toBeInTheDocument();
    })
  })
})
