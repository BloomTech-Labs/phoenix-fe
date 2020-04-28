import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from '../utils/ErrorBoundary.js';
import Registration from '../components/Registration.js';

it('renders the Footer correctly', () => {
    const tree = renderer.create(
        <ErrorBoundary>
            <Registration />
        </ErrorBoundary>
).toJSON();
  expect(tree).toMatchSnapshot();
});