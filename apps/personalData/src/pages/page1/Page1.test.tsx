import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import queryClient from 'shared/queries/client';

import Page1 from './Page1';

describe('<Page1 />', () => {
  test('should render Page1', async () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Page1 />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(getByText('This is page 1 of app1')).toBeTruthy();
  });
});
