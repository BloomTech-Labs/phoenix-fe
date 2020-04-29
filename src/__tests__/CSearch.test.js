import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'
import Search from '../components/Calendar/CalComponents/Event'

it("Renders cards of events that match the input of the user in the nav bar", () => {
    const tree = renderer.create(<Router><Search></Search></Router>)

    console.log('tree', tree)

    expect(tree).toMatchSnapshot()
})