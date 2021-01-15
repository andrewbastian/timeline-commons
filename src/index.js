import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Components
import App from './App';
import Timelines from './Components/Timelines';
import TimelinesIndex from './Components/TimelinesIndex';
import TimelineCard from './Components/TimelineCard';
import TimelineList from './Components/TimelineList';
import EventForm from './Components/EventForm/EventForm';



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
            main: '#dffceb',
            // dark: will be calculated from palette.secondary.main,
            // contrastText: '#ffcc00',
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

const routing = (
    <Router>
        <div>
            <ThemeProvider theme={theme}>
                <Route exact path='/' component={App} />
                <Route path='/timelineList' component={TimelineList} />
                <Route path='/timelineCard' component={TimelineCard} />
                <Route path='/timeline' component={Timelines} />
                <Route path='/timelinesIndex' component={TimelinesIndex} />
                <Route path='/add-event' component={EventForm} />
            </ThemeProvider>
        </div>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
