import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage.js';
import { MemoryRouter } from 'react-router-dom';

describe('LandingPage', () => {
  describe('Unit Tests', () => {
    it('Should render a Landing Page', () => {
      render (
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      )
      const logo = screen.getByAltText("welcome to Lyrical Lies")
      const slogan = screen.getByTestId("slogan")
      const intro = screen.getByTestId("intro")
      const prompt = screen.getByTestId("prompt")
      expect(logo).toBeInTheDocument();
      expect(slogan).toBeInTheDocument();
      expect(intro).toBeInTheDocument();
      expect(prompt).toBeInTheDocument();
    })
  })
})
