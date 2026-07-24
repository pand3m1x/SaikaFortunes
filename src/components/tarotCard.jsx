import React, { useState } from "react";

import TarotCardIcon from "../assets/TarotIMG.png";

function TarotCard() {
  //array of tarot card fortunes waiting for 22 major card write ups from Dylan
  const tarotCardFortunes= [
    { number: 0,
      title: "The Fool",
      description: "The Fool represents new beginnings, spontaneity, and a free spirit. It encourages taking a leap of faith and embracing the unknown."
    },
    { number: 1,
      title: "The Magician",
      description: "The Magician signifies manifestation, resourcefulness, and the power to create your own reality. It reminds you that you have all the tools you need to succeed."
    },
    { number: 2,
      title: "The High Priestess",
      description: "The High Priestess symbolizes intuition, mystery, and inner wisdom. It encourages you to trust your instincts and seek knowledge from within."
    },
    { number: 3,
      title: "The Empress",
      description: "The Empress represents abundance, nurturing, and creativity. It signifies growth, fertility, and the importance of connecting with nature."
    },
    { number: 4,
      title: "The Emperor",
      description: "The Emperor embodies authority, structure, and stability. It encourages you to take control of your life and establish a solid foundation for success."  
    },
    { number: 5,
      title: "The Hierophant",
      description: "The Hierophant signifies tradition, spiritual guidance, and conformity. It encourages you to seek wisdom from established institutions and mentors."
    }
  ];

  //randomly select a tarot card from the array
  function getRandomTarotCard() {
    const randomIndex = Math.floor(Math.random() * tarotCardFortunes.length);
    return tarotCardFortunes[randomIndex];
  };
  // console.log(getRandomTarotCard());

  //state to hold the selected tarot card
  // Lazy initializer: runs getRandomTarotCard() ONCE on first render
  const [selectedCard] = useState(() => getRandomTarotCard());
  // console.log(selectedCard);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={TarotCardIcon} alt="Tarot card in black and white in fancy boarder" style={{ width: '200px', height: 'auto' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>{selectedCard?.number}.{selectedCard?.title}</h2>
        <p>{selectedCard?.description}</p>
      </div>
    </div>
  );
}

export default TarotCard;