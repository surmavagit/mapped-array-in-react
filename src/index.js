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
function CatCard() {
  const cardsJSX = 
  <div>
    <h1>Hello React!</h1>
  </div>;

  return cardsJSX;
}

// I am using a React Component called
// CatCard
root.render(
  // the plan is to somehow translate the elements animalsToAdopt with its object
  // array elements with another array like the one below that contains
  // the corresponding cat card React Components
  [
    <CatCard />,
    <CatCard />,
    <CatCard />,
  ]
);
