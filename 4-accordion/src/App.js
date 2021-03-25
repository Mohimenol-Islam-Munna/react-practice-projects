import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section className="container">
        <h2>Question and Answare About Login</h2>
        <div className="info">
          {
            questions.map((question) => {
              return (<SingleQuestion key={question.id} {...question} />)
            })
          }
        </div>
      </section>
    </main>
  );
}

export default App;
