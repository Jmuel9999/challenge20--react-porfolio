
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Content from '../Content';

afterEach(cleanup);

describe('Content component', () => {
    it('renders', () => {
      render(<Content />);
    });
  
    it('matches snapshot', () => {
      const { asFragment } = render(<Content />);
  
      expect(asFragment()).toMatchSnapshot();
    });
  })
