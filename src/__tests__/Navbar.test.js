import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from '../utils/ErrorBoundary.js';
import Navbar from '../components/Navbar.js';

it('renders the Navbar correctly', () => {
    const tree = renderer.create(
        <ErrorBoundary>
            <Navbar />
        </ErrorBoundary>
).toJSON();
  expect(tree).toMatchSnapshot();
});