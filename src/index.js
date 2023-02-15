import React from 'react';
import ReactDOM from 'react-dom/client';

const animalsToAdopt = [
  {
      name: "Lucky",
      picture: "https://placekitten.com/200/287",
  },
  {
      name: "Symba",
      picture: "https://placekitten.com/200/139",
  },
  {
      name: "Léo",
      picture: "https://placekitten.com/200/90",
  },
  {
      name: "Milo",
      picture: "https://placekitten.com/200/194",
  },
  {
      name: "Charly",
      picture: "https://placekitten.com/200/179",
  },
];

const root = ReactDOM.createRoot(
  document.querySelector('#root'));

// I defined a React Function Component
// called CatCard
function CatCard(props) {
  
  // log the props object in the console, check it out
  console.dir(props);

  const cardsJSX = 
  <div>
    <h1>{ props.catObject.name }</h1>
    <img src={ props.catObject.picture } alt="" />
  </div>;

  return cardsJSX;
}

// I am using a React Component called
// CatCard
root.render(

  <CatCard catObject={ animalsToAdopt[0] } />

);
