import React, { useState } from "react";

import TarotCardIcon from "../assets/TarotIMG.png";

function TarotCard() {
  //array of tarot card fortunes waiting for 22 major card write ups from Dylan
  const tarotCardFortunes= [
    { id: "tc1",
      number: 0,
      title: "The Fool",
      cardOf: "A Card of New Beginning: ",
      description: "You are heading towards a new experience. Have courage as you move forward, you may not be prepared but along the way you will learn and discover your potential."
    },
    { id: "tc2",
      number: 1,
      title: "The Magician",
      cardOf: "A Card of Willpower:",
      description: "This is a call to action. You have the resources you need, now is the time to use them. Be creative in your approach, now is the time to go for what you desire and create oppertunities for yourself."
    },
    { id: "tc3",
      number: 2,
      title: "The High Priestess",
      cardOf: "A Card of Intuition:",
      description: "It's time to look inwards, putting aside logic for wisdom. Only you can determine what you need. Take time to listen to yourself free from outside influence and find your own way forward."
    },
    { id: "tc4",
      number: 3,
      title: "The Empress",
      cardOf: "A Card of Self-Care:",
      description: "Seek out what brings beauty and happiness to your life. Don't feel guilty about taking time for yourself. There is a time to help others and a time to allow yourself to be helped. Let love fuel you as you continue."
    },
    { id: "tc5",
      number: 4,
      title: "The Emperor",
      cardOf: "A Card of Authority:",
      description: "Take control of your world. Think rationally about your future and build a plan to act for the greater good of yourself and others. Remember that the purpose of a system is what it does and build a legacy you would be proud of."  
    },
    { id: "tc6",
      number: 5,
      title: "The Hierophant",
      cardOf: "A Card of Tradition:",
      description: "There is power in tradition. This is not a sign to conform but rather realize that many people have traveled these paths and left behind knowlege to help guide you. Let the answers they found empower you."
    },
    { id: "tc7",
      number: 6,
      title: "The Lovers",
      cardOf: "A Card of Unity:",
      description: "The people around you will lead you to reach heights you never could alone. It might be time to reach out and let them know how much they mean to you. Choices are ahead, let love empower you and be true to yourself."
    },
    { id: "tc8",
      number: 7,
      title: "The Chariot",
      cardOf: "A Card of Control:",
      description: "As you move forward, reconize your ambition and boldness. These are essential, but must be tempered to stay on the path. Life moves fast as you take action and you must maintain control to get what you want."
    },
    { id: "tc9",
      number: 8,
      title: "Strength",
      cardOf: "A Card of Compassion:",
      description: "Now is the time to be courageous and confront that you've been afraid of. Remember that kindness is indicative of true strength. It takes a lot to approach difficult situations with maturity and grace but it can be the only way to resolve them."
    },
    { id: "tc10",
      number: 9,
      title: "The Hermit",
      cardOf: "A Card of Solitude:",
      description: "Sometimes you need to step back to remember what's important. Maybe you need to be alone or take a break from the distractions that clutter your mind. Take some time to reflect and find your next steps for when you're ready to re-emerge."
    },
    { id: "tc11",
      number: 10,
      title: "The Wheel of Fortune",
      cardOf: "A Card of Cycles:",
      description: "Everything changes, there are good times and bad. Nothing lasts forever. Cherish the good times and endure the bad. One day this will all be a memory. Take comfort in knowing that everything has it's time, the wheel turns and life goes on."
    },
    { id: "tc12",
      number: 11,
      title: "Justice",
      cardOf: "A Card of Karma:",
      description: "We all must take responsability for the choices that we make. Now is the time to look back and reflect on your actions and the unfairness you faced. Justice is assured and inevitable. Now is the time to atone and heal."
    },
    { id: "tc13",
      number: 12,
      title: "The Hanged Man",
      cardOf: "A Card of Perspectives:",
      description: "Take a moment to pause and look at things in a new perspective. There can be so much going on in our lives. Consider what you may need to sacrifice to have the time to do what you truly want."
    },
    { id: "tc14",
      number: 13,
      title: "Death",
      cardOf: "A Card of Change:",
      description: "For as long as we live, we change. Whether we accept it or not, this change is rarely easy. But embracing this change can be rewarding. Let the past die and carry yourself into a brighter future."
    },
    { id: "tc15",
      number: 14,
      title: "Temperance",
      cardOf: "A Card of Balance:",
      description: "So often there is a gulf between what we want and want we can do. Now is the time to find the balance between these two states. Approach your problems and desires with a patient and open mind and find a compromise that works for you."
    },
    { id: "tc16",
      number: 15,
      title: "The Devil",
      cardOf: "A Card of Escape:",
      description: "This is a sign to face the hard truths of yourself. Everyone has flaws and you should not shy away in accepting them. In identifying them we have the opportunity to break free of them."
    },
    { id: "tc17",
      number: 16,
      title: "The Tower",
      cardOf: "A Card of Ending:",
      description: "Nothing lasts forever. Everything eventually ends. To try to keep something together that's already broken is doomed to tragedy. It's time to walk away, the old methods have failed, it's time for you to find a new way the succeed."
    },
    { id: "tc18",
      number: 17,
      title: "The Star",
      cardOf: "A Card of Hope:",
      description: "Now is the time to let yourself hope again. Let your old wounds heal and try again. Take the opportunities where they come and allow yourself the dream of a brighter future for yourself."
    },
    { id: "tc19",
      number: 18,
      title: "The Moon",
      cardOf: "A Card of Illusion:",
      description: "The path before you has gotten vague. Maybe things are not as clear as they once were. It might be time to embrace the unknown, putting your old fears aside and tap into your unconscious to find new solutions."
    },
    { id: "tc20",
      number: 19,
      title: "The Sun",
      cardOf: "A Card of Joy:",
      description: "This is the time for joy. Recognize that within you that is cause for celebration and embrace the confidence that you deserve. Treat yourself and have fun, you've earned it."
    },
    { id: "tc21",
      number: 20,
      title: "Judgement:",
      cardOf: "A Card of Reflection:",
      description: "It's time to look back at all you're done for good and ill. Important changes are ahead and it's time to prepare by deciding on the best version of yourself. Let the past guide you and then let go of it. It is time to keep moving."
    },
    { id: "tc22",
      number: 21,
      title: "The World:",
      cardOf: "A Card of You:",
      description: "Look at you. All you've achieved after all this time. All of the struggles you overcame. Remember all that you achieved, and rember that you can do more. A new journey with new oppertunities. You've made it this far, now keep going."
    },
    
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
    <div className="fortunes">
      <img src={TarotCardIcon} alt="Tarot card in black and white in fancy boarder" style={{ width: '200px', height: 'auto' }} />
        <h2>{selectedCard?.number}.{selectedCard?.title}</h2>
        <p className="sub-header">{selectedCard?.cardOf}</p>
        <p>{selectedCard?.description}</p>
      
    </div>
  );
}

export default TarotCard;