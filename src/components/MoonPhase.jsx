import React, { useState } from "react";

import MoonPhaseIcon from "../assets/MoonIMG.png";

function MoonPhase() {

  const MoonPhases =[
    {phase: "New Moon",
      keywords:"decision-making, taking action, beginnings",
     description: "And suddenly you know: It's time to start something new and trust the magic of beginnings. —  Meister Eckhart"
    },
    {phase: "Waxing Crescent",
      keywords:"growth, nurturing new intentions, first small steps",
     description: "One can choose to go back toward safety or forward toward growth. Growth must be chosen again and again; fear must be overcome again and again. — Abraham Maslow"
    },
    {phase: "First Quarter",
      keywords:"decision-making; taking action",
     description: "So. Tell me. What do you think? Which is better? To take action and perhaps make a fatal mistake - or to take no action and die slowly anyway? — Ahdaf Soueif"
    },
    {phase: "Waxing Gibbous",
      keywords:"refinement, perseverance, and anticipation",
     description: "True refinement seeks simplicity. — Bruce Lee"
    },
    {phase: "Full Moon",
      keywords:"illumination, culmination, fullness of life",
     description: "It is impossible to grasp another human's inner world. But even in the darkness of the densest forest, there can always be the light of a firefly. — Krupakar"
    },
    {phase: "Waning Gibbous",
      keywords: "gratitude, transition, releasing, preparing for the next cycle",
     description: "When things start to fall apart in your life, you feel as if your whole world is crumbling. But actually, it’s your fixed identity that’s crumbling. And that’s cause for celebration. — Pema Chödrön"
    },
    {phase: "Third Quarter",
      keywords: "releasing, forgiveness, and reflection",
     description: "You can't forgive without loving. And I don't mean sentimentality. I don't mean mush. I mean having enough courage to stand up and say, 'I forgive. I'm finished with it'. — Maya Angelou"
    },
    {phase: "Waning Crescent",
      keywords:"rest, release, and quiet preparation",
     description: "When life is difficult, it's best to just sleep and eat good food. The spirit heals itself when the body is cared for.  — Banana Yoshimoto"
    }
  ];

  //randomly select a moon phase from the array
  function getRandomMoonPhase() {
    const randomIndex = Math.floor(Math.random() * MoonPhases.length);
    return MoonPhases[randomIndex];
  };

  //state to hold the selected moon phase
  const [selectedPhase] = useState(() => getRandomMoonPhase());

  return (
    <div className="fortunes">
      <img src={MoonPhaseIcon} alt="phases of the moon in black and white in fancy boarder" style={{ width: '200px', height: 'auto' }} />
      <h2>{selectedPhase?.phase}</h2>
      <p><strong>Keywords:</strong> {selectedPhase?.keywords}</p>
      <p>{selectedPhase?.description}</p>
    </div>
  );
}

export default MoonPhase;