import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { red, grey } from '@material-ui/core/colors'
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[100],
            light: grey[50],
            dark: red[400]
        },
        secondary: {
            main: "#0B8B71", // forest green
            light: "#3ba28d",
            dark: "#07614f",
            contrastText: "#fff"
        },
    },
    typography: {
        fontFamily: [
            'Kurale, serif',
            'Open Sans, sans-serif'
        ].join(','),

    },
    grow: {
        flexGrow: 1,
      }
})

ReactDOM.render(
<MuiThemeProvider theme={theme}>
<App />
</MuiThemeProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
