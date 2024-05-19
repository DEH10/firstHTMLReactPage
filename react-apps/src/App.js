import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [counter, setCounter] = useState(0);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const url = "https://dogapi.dog/api/v2/breeds";
    axios.get(url)
      .then(response => {
        setBreeds(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error.message);
      });
  }, []);

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

      {/* Rendering the list of breeds */}
      <div>
        <h2>List of Dog Breeds</h2>
        <ul>
          {breeds.map((breed, index) => (
            <li key={index}>
              <h3>{breed.attributes.name}</h3>
              <p>Life Span: {breed.attributes.life.min} - {breed.attributes.life.max} years</p>
              <p>Male Weight: {breed.attributes.male_weight.min} - {breed.attributes.male_weight.max} kg</p>
              <p>Female Weight: {breed.attributes.female_weight.min} - {breed.attributes.female_weight.max} kg</p>
              <p>Hypoallergenic: {breed.attributes.hypoallergenic ? 'Yes' : 'No'}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
