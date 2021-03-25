import React from 'react';
import Tour from './Tour';
const Tours = (props) => {

  return (
    <div>
      <h2 className='title'>{props.tours.length > 0 ? "Our Tours" : "No Tour Found"}</h2>
      <div className='underline'></div>
      <Tour tour={props.tours} clickHandler={props.clickHandlers} fetchTours={props.fetchTour} />
    </div>
  );
};

export default Tours;
