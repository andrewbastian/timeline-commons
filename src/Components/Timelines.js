import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TimelineList from './TimelineList';
import TimelineHeader from './TimelineHeader';
import Home from './Home';
const Timelines = () => {
    return (
    	<>
    	<Home />
        <TimelineHeader/>
        <TimelineList />
        </>
    );
};



export default Timelines;
