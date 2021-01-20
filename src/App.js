import React, { useReducer } from 'react';
import { Switch, Route } from 'react-router-dom';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Home from './Components/Home';
import LandingPage from './Components/LandingPage';
import Timelines from './Components/Timelines';
import TimelinesIndex from './Components/TimelinesIndex';
import TimelineCard from './Components/TimelineCard';
import TimelineList from './Components/TimelineList';
import EventForm from './Components/EventForm/EventForm';
import TopNav from './Components/TopNav';

export const AuthContext = React.createContext();

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            localStorage.setItem('token', JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        case 'LOGOUT':
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

// MATERIAL UI THEME
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
            main: '#81c784',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            // light: '#0066ff',
            main: '#ffab91',
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

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            <ThemeProvider theme={theme}>
                <div className='App'>
                <TopNav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/landing-page' component={LandingPage} />
                        <Route path='/timelinelist' component={TimelineList} />
                        <Route path='/timelineCard' component={TimelineCard} />
                        <Route path='/timeline' component={Timelines} />
                        <Route path='/timelines' component={TimelinesIndex} />
                        <Route path='/event-form' component={EventForm} />
                    </Switch>
                </div>
            </ThemeProvider>
        </AuthContext.Provider>
    );
}

export default App;
