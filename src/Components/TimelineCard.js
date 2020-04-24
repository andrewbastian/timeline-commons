import React from 'react';

const TimelineCard = (props) => {
	const data = props.data
	const {title, description, creator, date} = data
    return (
        <div>
        	<h2>{title}</h2>
        	<p>{date}</p>
        	<p>{creator}</p>
        	<p>{description}</p>
        </div>
    );
};


export default TimelineCard;
