import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// API 
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoding] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {

    setLoding(true);

    const response = await fetch(url);
    const toursData = await response.json();

    setTours(toursData);
    setLoding(false);
  }

  useEffect(() => {
    fetchTours();
  }, []);


  // filter to new array 
  const removeTour = (id) => {

    const newTours = tours.filter((item) => {
      return item.id !== id;
    });

    setTours(newTours);
  }

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} clickHandlers={removeTour} fetchTour={fetchTours} />
    </div>
  );


}

export default App
