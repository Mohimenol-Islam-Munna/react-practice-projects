import React from 'react';

const List = (props) => {

  return (
    <>
      {
        props.item.map((data) => {

          const { id, name, age, image } = data;

          return (
            <div key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </div>
          )
        })
      }
    </>
  );
};

export default List;
