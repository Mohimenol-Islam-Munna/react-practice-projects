import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  // random review 
  const randomNumberHandler = () => {

    let randomNumber = Math.floor(Math.random() * people.length);

    if (randomNumber === index) {

      if (index === 0) {
        randomNumber = index + 1
      } else if (index === people.length - 1) {
        randomNumber = index - 1
      } else {
        randomNumber = index + 1
      }
    }
    console.log(randomNumber)
    setIndex(randomNumber);

  }


  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="text">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={() => { index === 0 ? setIndex(people.length - 1) : setIndex(index - 1) }}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={() => { index < people.length - 1 ? setIndex(index + 1) : setIndex(0) }}>
        <FaChevronRight />
      </button>
    </div>
    <button className="random-btn" onClick={randomNumberHandler}>Surprise Me</button>
  </article>;
};

export default Review;
