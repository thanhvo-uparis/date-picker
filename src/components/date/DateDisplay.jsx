import React from 'react';
import css from './date.css';
import moment from 'moment';

const DateDisplay = (props) => {
    return(
        <div>
            <p className="date-display">You have selected the date: {moment(props.date).format('LL')} </p>
        </div>
    )
}

export default DateDisplay;