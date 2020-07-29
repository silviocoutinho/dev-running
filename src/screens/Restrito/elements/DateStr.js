import React from 'react';
import moment from 'moment-timezone';

const DateStr =  ({date, timezone}) => {
   const d    = moment.tz(date, 'GMT');
   const d2 = d.clone().tz(timezone);
   console.log();
    return <span>{d2.format('DD/MM/YYYY, h:mm:ss a')}</span>
};

export default DateStr;