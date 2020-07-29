import React from 'react';


const Duration = props => {
    const { duration } = props;
    let durationStr = '';
    const pad = num => num.toString().padStart(2, '0')
    const hour = Math.floor(duration / 3600);  
    if(hour > 0) {
      durationStr = pad(hour)  + ':'
    }
    const minutes = Math.floor((duration - (hour*3600)) / 60);  
    durationStr+= pad(minutes) + ':' ;
    
    const seconds = Math.floor(duration - (hour*3600) - (minutes*60));
    durationStr+= pad(seconds);
  
    return <span>{durationStr}</span>
};

export default Duration;
  