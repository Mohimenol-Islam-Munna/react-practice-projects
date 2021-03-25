import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {

  const [toggleContent, setToggleContent] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setToggleContent(!toggleContent)}>
          {toggleContent ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p className="info">{toggleContent ? info : info.substring(0, 0)}</p>
    </article>
  );
};

export default Question;
