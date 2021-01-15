import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import TimelineCard from './TimelineCard'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import channel from '../sample_data/timeline.json'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
  leftDate: {
	display:'flex', 
	flexShrink:"0", 
	flexGrow:'0',
	maxWidth: 100,
	alignText:'left',
	marginRight: theme.spacing(1),
  },
}));

const TimelineList = (props) => {
	const classes = useStyles();
	const [timelines, setTimelines] =useState([])
	useEffect(() => {
		const getTimelines = () => {
		console.log(channel)
		setTimelines(channel)
		}
		getTimelines()
	}, [])
    return (
        <div >
<React.Fragment>
      <Timeline align="left">
        <TimelineItem >
          <TimelineOppositeContent className={classes.leftDate}>
            <Typography color="textSecondary" >01/09/2012</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineCard />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className={classes.leftDate}>
            <Typography color="textSecondary">02/09/2012</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineCard />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className={classes.leftDate}>
            <Typography color="textSecondary">04/11/2011</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineCard />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className={classes.leftDate}>
            <Typography color="textSecondary">04/11/2011</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineCard />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
        </div>
    );
};



export default TimelineList;
