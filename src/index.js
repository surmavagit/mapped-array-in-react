import React from 'react';
import ReactDOM from 'react-dom/client';

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
  <>
  <CatCard />
  <CatCard />
  <CatCard />
  </>
);
