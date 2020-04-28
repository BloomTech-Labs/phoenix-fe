import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from '../components/Dashboard.js';

describe('Dashboard', () => {
    beforeAll(() => {
        const ls = require('../utils/localStorage.js');
        ls.setLocalStorage();
    });
    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDom.render(<Dashboard/>, div);
    })
})
 