import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {animals} from './animals';

const title = '';
const showBackground = true;
const background = (
  <img 
    className = 'background' 
    alt = 'ocean'
    src ='/images/ocean.jpg'
  />
);

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key = {animal}
      className = 'animal'
      alt = {animal}
      src = {animals[animal].image}
      role = 'button' 
      onClick = {displayFact}
    />
  )
};

function displayFact(e) {
  const selectAnimal = e.target.alt;
  const selectedAnimal = animals[selectAnimal];

  const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
  const funFact = selectedAnimal.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}

const animalFacts = (
  <div>
    <h1>
      {title || 'click on an animal for a fun fact!'}
    </h1>
    {showBackground && background}
    <div className = 'animals'>
      {images}
    </div>
    <p id = 'fact'></p>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    {animalFacts}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
