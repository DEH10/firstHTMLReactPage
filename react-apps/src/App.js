import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const colorStyle = { color: props.color, fontSize: props.size };

  return (
    <div>
      {/* Display the logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Display the heading */}
      <div style={colorStyle}>Hello World!</div>

      {/* Display the button and counter */}
      <div style={colorStyle}>
        <button onClick={incrementCounter}>Click Me!</button>
        <br />
        <br />
        {counter}
      </div>
    </div>
  );
}

export default App;
