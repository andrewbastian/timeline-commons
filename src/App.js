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
});

function App() {
  return (
    <div className="App">
 
    <Home />

    </div>
  );
}

export default App;
