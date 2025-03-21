import '@testing-library/jest-dom';
import AppContent from './AppContent';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('AppContent', () => {
  it('should render AppContent', () => {
    render(
      <MemoryRouter>
        <AppContent />
      </MemoryRouter>
    );
  });
});
