import React, { useState } from "react";

import CatIcon from "../assets/CatCoatIMG.png";

function CatMarking() {

  const CatMarkingTypes = [
    {CoatType:"Black",
     description: "Black cats are often associated with mystery and magic. They are sleek, elegant, and can be a symbol of good luck in some cultures."
    },
    {CoatType:"White",
     description: "White cats are often seen as pure and innocent. They can symbolize new beginnings and are often associated with positive energy."
    },
    {CoatType:"Tabby",
     description: "Tabby cats have a distinctive coat pattern with stripes, dots, or swirling patterns. They are known for their friendly and affectionate nature."
    },
  ];

  //randomly select a cat marking from the array
  function getRandomCatMarking() {
    const randomIndex = Math.floor(Math.random() * CatMarkingTypes.length);
    return CatMarkingTypes[randomIndex];
  };

  //state to hold the selected cat marking
  const [selectedMarking] = useState(() => getRandomCatMarking());

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={CatIcon} alt="Cat in black and white in fancy boarder" style={{ width: '200px', height: 'auto' }} />
      <h2>{selectedMarking?.CoatType}</h2>
      <p>{selectedMarking?.description}</p>
    </div>
  );
}

export default CatMarking;