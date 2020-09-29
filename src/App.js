import React from 'react';
import { Switch, Route } from "react-router-dom";

import {createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'

import {Typography} from '@material-ui/core'
import {Container} from '@material-ui/core'
import TopNav from './Components/TopNav'
import Home from './Components/Home'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
    palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#11cb5f',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
 
    <Home />

    </div>
    </ThemeProvider>
  );
}

export default App;
