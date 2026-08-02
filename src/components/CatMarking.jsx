import React, { useState } from "react";

import CatIcon from "../assets/CatCoatIMG.png";

function CatMarking() {

  const CatMarkingTypes = [
    { id: "cm1",
      CoatType:"Smoke Cat",
      description: "Your hard work is paying off. Don’t get discouraged if you’re not seeing results right away. Smoke cats appear black at first glance but have a white undercoat, resulting in a smoky look in the right light."
    },
    { id: "cm2",
      CoatType:"Tiger Tabby Cat",
      description: "Let yourself get back to basics. Things might be difficult, but the solutions don’t have to be. Tiger tabbies are the most common cats, having the characteristic striping pattern and a single dominant color."
    },
    { id: "cm3",
      CoatType:"Diluted Tabby Cat",
      description: "Take a step back and appreciate your hard work. You might not be done, but your progress is clear. Diluted tabbies have muted colors, giving their coats a pastel effect."
    },
    { id: "cm4",
      CoatType:"Orange Cat",
      description: "The road ahead may seem overwhelming, but you’re equipped to handle it. Orange cats have a reputation for being stupid or silly, but they’ll surprise you if you underestimate them."
    },
    { id: "cm5",
      CoatType:"Black Cat",
      description: "Things appear more daunting than they are. Take things slowly and you’ll find your way through. Black cats have a reputation for evil and mischief, but that reputation is completely undeserved."
    },
    { id: "cm6",
      CoatType:"Tuxedo Cat",
      description: "It’s time for a night out. Let yourself have some fun. Tuxedo cats are black with white patches, making them look quite dapper."
    },
    { id: "cm7",
      CoatType:"Calico Cat",
      description: "The challenges ahead require creative solutions. Fortunately, you’re well prepared. Calico cats sport a blend of white, black, and orange coat colors, resulting in a wide variety of appearances."
    },
    { id: "cm8",
      CoatType:"Tortoiseshell Cat",
      description: "Don’t try to face your struggles alone. It’s okay to ask for help. Tortoiseshell cats have a combination of multiple colors and patterns in their coats, resulting a in unique, blended appearance."
    },
    { id: "cm9",
      CoatType:"Spotted Cat",
      description: "Let your curious side out and try something new. It’s time to step a little outside of your comfort zone. Spotted cats occur where the classic tabby stripes break up into a more mottled pattern."
    },
    { id: "cm10",
      CoatType:"Colorpoint Cat",
      description: "The next steps in your journey will become clear with time and patience. Colorpoint cats have mostly pale fur with color patches on the face, ears, paws, and tail."
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
    <div className="fortunes" >
      <img src={CatIcon} alt="Cat in black and white in fancy boarder" style={{ width: '200px', height: 'auto' }} />
      <h2>{selectedMarking?.CoatType}</h2>
      <p>{selectedMarking?.description}</p>
    </div>
  );
}

export default CatMarking;