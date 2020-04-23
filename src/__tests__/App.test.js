import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App.js';

it("renders 3 'Phoenix' elements", () => {
  const div = document.createElement('div');
  const {  getAllByText } = render(
    <Router>
        <App />
    </Router>, div);
  ReactDOM.unmountComponentAtNode(div);

  const mainContentTitle = getAllByText(/Phoenix/i);
  expect(mainContentTitle).toHaveLength(3) ;
});