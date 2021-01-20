import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

//Components

import TimelinesIndex from './TimelinesIndex';
import Donation from './Donation';

const useStyles = makeStyles((theme) => ({
    tlIndexContainer: {
        marginLeft: theme.spacing(2),
        paddingTop: 0,
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth='sm' className={classes.tlIndexContainer}>
                <TimelinesIndex />
            </Container>
        </React.Fragment>
    );
};

export default Home;
