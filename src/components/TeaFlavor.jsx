import React, { useState } from "react";

import TeaFlavorIcon from "../assets/TeaIMG.png";

function TeaFlavor() {
  // waiting for more tea flavor write ups from Yoni
  const TeaDescriptions = [
  {TeaFlavor: "Green Tea",
   description: "Green tea is known for its fresh, grassy flavor and numerous health benefits. It is rich in antioxidants and can help boost metabolism."
  },
  {TeaFlavor: "Black Tea",
   description: "Black tea has a bold, robust flavor and is often enjoyed with milk and sugar. It contains caffeine and can help improve focus and alertness."
  },
  {TeaFlavor: "Oolong Tea",
   description: "Oolong tea is a traditional Chinese tea with a unique flavor that falls between green and black tea. It is known for its floral aroma and can aid in digestion."
  },

  ];
  //randomly select a tea flavor from the array
  function getRandomTeaFlavor() {
    const randomIndex = Math.floor(Math.random() * TeaDescriptions.length);
    return TeaDescriptions[randomIndex];
  };

  //state to hold the selected tea flavor
  const [selectedFlavor] = useState(() => getRandomTeaFlavor());
  return (
    <div className="fortunes">
      <img src={TeaFlavorIcon} alt="Tea flavor in black and white in fancy boarder" style={{ width: '200px', height: 'auto' }} />
      <h2>{selectedFlavor?.TeaFlavor}</h2>
      <p>{selectedFlavor?.description}</p>
    </div>
  );
}

export default TeaFlavor;