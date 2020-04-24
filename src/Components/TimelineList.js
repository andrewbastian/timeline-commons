import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import TimelineCard from './TimelineCard'
import channel from '../sample_data/timeline.json'


const TimelineList = (props) => {
	const [timelines, setTimelines] =useState([])
	useEffect(() => {
		const getTimelines = () => {
		console.log(channel)
		setTimelines(channel)
		}
		getTimelines()
	}, [])
    return (
        <div>
        	{timelines.map(data => (
        		<TimelineCard key={data.item} data={data} />))}
        </div>
    );
};



export default TimelineList;
