import React, { useState } from 'react';
import DateDisplay from './DateDisplay';
import css from './date.css';

const DateInput = (props) => {
    // const {date} = myDate;
    // const [myDate, setDate] = useState(Date.now());
    return (
        <div>
            <input className="input" type="date"  />
            <p>
                {props.firstName}
                {props.lastName}
            </p>
            <DateDisplay/>
         </div>
    )
}


export default DateInput;