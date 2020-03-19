import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { red, amber } from '@material-ui/core/colors'

import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: {
            main: amber.A400, // dot notation for string 
            light: amber[200], // brackets for numeric value
            dark: amber[700] // pass in shade 800, hex value also okay (https://material-ui.com/customization/color/#color)
        }, 
        type: 'dark' // can assign as light or dark theme (optional)
    },
    spacing: {
        unit: 10 // dynamic unit ex: in component, padding: theme.spacing.unit * 3
    }
})

console.log(red) //red object, view all shades as properties
console.log(theme) // theme object, view all properties

ReactDOM.render(
<MuiThemeProvider theme={theme}>
<App />
</MuiThemeProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
