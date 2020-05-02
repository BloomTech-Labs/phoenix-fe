import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'
import EventPage from '../components/Event-Page';

it("Renders the event page and matches a snapshot of the rendered page", () => {
  const tree = renderer

    .create(<Router><EventPage /></Router>)
    .toJSON();

    console.log(tree, 'tree')

  expect(tree).toMatchSnapshot()
});
