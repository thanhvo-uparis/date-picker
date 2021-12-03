import React, { useState } from 'react';
import DateDisplay from './DateDisplay';
import css from './date.css';

const DateInput = () => {
    const [myDate, setDate] = useState();
    return (
        <div>
            <input className="input" type="date"  onChange={(e)=>setDate(e.target.value)} />
            
            {/* <p>
                {props.firstName}
                {props.lastName}
            </p> */}
            <DateDisplay date={myDate}/>
         </div>
    )
}


export default DateInput;