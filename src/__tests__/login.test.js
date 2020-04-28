import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'
import Login from '../components/Login';

it("Renders Registraion page to match snapshot", () => {
  const tree = renderer

    .create(<Router><Login /></Router>)
    .toJSON();

    console.log(tree, 'tree')

  expect(tree).toMatchSnapshot()
});
