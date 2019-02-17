import React, { useEffect, useState } from 'react';

// @styles
import './style.css';

const App = () => {
  const [ counter, setCounter ] = useState(0);
  const updateCounter = (type) => {
    const newCounter = type === 'increase'
      ? counter + 1
      : counter + -1;
    setCounter(newCounter);
  };

  useEffect(() => {
    document.title = `Counter is ${counter}`;
  });

  return (
    <div className="app">
      <div className="app__title">Testing React Hooks</div>
      <div
        className="app__button-increase"
        onClick={() => updateCounter('increase')}
      >
        Increase
      </div>
      <div
        className="app__button-dicrease"
        onClick={() => updateCounter('dicrease')}
      >
        Dicrease
      </div>
      <div className="app__counter">{counter}</div>
    </div>
  );
};

export default App;
