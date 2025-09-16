import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('le header affiche la navigation', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();

  const accueil = within(header).getByRole('link', { name: /accueil/i });
  const aPropos = within(header).getByRole('link', { name: /propos/i });

  expect(accueil).toBeInTheDocument();
  expect(aPropos).toBeInTheDocument();
});
