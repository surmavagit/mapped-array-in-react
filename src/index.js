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

// (props.catObject).name works fine
// props.(catObject.picture) returns an error
// so props.catObject gives us the object in the animals to adopt array, but why?
// what is props? the object in question is stored in the array, it is not stored in any other object
// what is passed as props? "catObject"? then the result would be catObject.catObject.name which is nonsense.
// CatCard.catObject would make more sense, but CatCard is definitely not props, for
// it is the constructor function for an object called CatCard, which has props as an argument.
// Shouldn't we just pass the object as props in the first place? Shouldn't it be props.name instead of props.catObject.name?

// console.log(props) returns us a nested object!
// catObject is its first property. and it contains the animal object as its value!
// This explains why we have props.catObject.name instead of props.name!

  return cardsJSX;
}

// I am using a React Component called
// CatCard
// root.render(

//   <CatCard catObject={ animalsToAdopt[0] } />

// );


// This doesn't work
// Adding a console.log(animalObject) to the .map breaks the code completely!

// root.render(
//   animalsToAdopt.map((animalObject => {
//     <CatCard catObject={ animalObject } />
//   }))
// );

// This works! But weirdly, it gives us one card of Charlie, which is only the last one.
// Which probably means that every time root.render runs it completely overwrites everything that was rendered before.
// So it is mean to be run only once.

// animalsToAdopt.forEach((animalObject) => {
//   console.log(animalObject)
//   root.render(
//     <CatCard catObject={ animalObject } />
//   )
// })


// We need to use .map on the array to give us an array of JSX elements instead of an array of objects!
// And then we just render the result of .map!
// root.render(
//   animalsToAdopt.map(animalObject => <CatCard catObject={ animalObject } /> )
// )
// This works as intended! So the only mistake in the first attempt was adding curly brackets.
// Arrow functions with curly brackets don't return anything automatically. And we needed those expressions to be returned.

// There might be a way to make it work with curly brackets.

root.render(
    animalsToAdopt.map(animalObject => {
      return <CatCard catObject={ animalObject } />;
    })
  );
// Yes, this also works!  

console.dir(CatCard)