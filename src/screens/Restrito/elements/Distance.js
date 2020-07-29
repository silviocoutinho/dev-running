import React from 'react';

const Distance = ({ distance, metric}) => {
    let distanceStr = '';
    //padrao metric
    if(metric==='metric') {
      return distanceStr = distance + 'km';  
    } else {
      //padrao miles
      const distanceMi = distance * 0.621371;
      return distanceStr = distanceMi.toFixed(2) + 'mi';
    }
    
  };

  export default Distance;