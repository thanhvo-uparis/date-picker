import React from 'react';
import css from './date.css';

const DateDisplay = (props) => {
    return(
        <div>
            <p className="date-display">You have selected the date: {props.date} </p>
        </div>
    )
}

export default DateDisplay;