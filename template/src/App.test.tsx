import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Public page', () => {
  render(<MemoryRouter initialEntries={["/"]}>
    <App />
  </MemoryRouter>);
  const publicPageText = screen.getByText(/Public page/i);
  expect(publicPageText).toBeInTheDocument();
});
