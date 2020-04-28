import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from '../utils/ErrorBoundary.js';
import Footer from '../components/Footer.js';

it('renders the Footer correctly', () => {
    const tree = renderer.create(
        <ErrorBoundary>
            <Footer />
        </ErrorBoundary>
).toJSON();
  expect(tree).toMatchSnapshot();
});