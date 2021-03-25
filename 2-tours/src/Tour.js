import React, { useState } from 'react';

const Tour = ({ tour, clickHandler, fetchTours }) => {


  const [readMore, setReadMore] = useState(true);

  return (
    <div>
      {tour.length < 1 ? <button className="btn" onClick={fetchTours}>Refresh</button> :
        tour.map((item) => {
          const { id, name, info, image, price } = item;

          // console.log(name);

          return (
            <article key={id} className="single-tour">
              <img src={image} alt={name} />
              <footer>
                <div className="tour-info">
                  <h4>{name}</h4>
                  <h4 className="tour-price">${price}</h4>
                </div>
                <div>
                  <p>
                    {readMore ? `${info.substring(0, 200)}...` : info} <button onClick={item.id === id ? () => setReadMore(!readMore) : () => setReadMore(readMore)}>{readMore ? 'Read More' : 'Show Less'}</button>
                  </p>
                </div>
                <button className="delete-btn" onClick={() => clickHandler(id)}>Not Interested</button>
              </footer>
            </article>
          )
        })
      }
    </div >
  );
};

export default Tour;
