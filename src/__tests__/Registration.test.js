import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'
import Registration from '../components/Registration.js';

it("Renders Registraion page to match snapshot", () => {
  const tree = renderer

    .create(<Router><Registration /></Router>)
    .toJSON();

    console.log(tree, 'tree')

  expect(tree).toMatchSnapshot()
});
