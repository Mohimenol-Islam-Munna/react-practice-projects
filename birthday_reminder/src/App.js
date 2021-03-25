import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [item, setItem] = useState(data);

  const clickHandler = () => {
    setItem([]);
    console.log('he clicked me');
  }

  return (
    <React.Fragment>
      <div className="container">
        <h3>{item.length <= 1 ? `${item.length}` : `${item.length}s`} Birthday</h3>
        <List item={item} />
        <button onClick={clickHandler}>Clear All</button>
      </div>
    </React.Fragment>
  );
}

export default App;
