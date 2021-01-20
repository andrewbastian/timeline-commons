import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Paper } from '@material-ui/core';

//Components
import TopNav from './TopNav';
import TimelinesIndex from './TimelinesIndex';
import Donation from './Donation';

const useStyles = makeStyles((theme) => ({
    tlIndexContainer: {
        // display: 'flex',
        // justifyContent: 'start',
        // border: '2px solid black',
        // borderRadius: 10,

        marginLeft: theme.spacing(2),
    },
    headers: {
        color: theme.palette.secondary.dark,
    },
}));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <TopNav />
            {/*<Container maxWidth='sm' className={classes.tlIndexContainer}>*/}
                <Paper elevation={3}>
                    <Typography variant='h5' className={classes.headers}>
                        Projects:
                    </Typography>
                    <TimelinesIndex />
                </Paper>
            {/*</Container>*/}
        </React.Fragment>
    );
};

export default LandingPage;
