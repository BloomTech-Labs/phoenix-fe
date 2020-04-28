import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'
import Calendar from '../components/Calendar/Calen'

it("Renders Calender months with dates with specific date events", () => {
    const tree = renderer.create(<Router><Calendar /></Router>).toJSON()

    console.log('tree', tree)

    expect(tree).toMatchSnapshot()
})