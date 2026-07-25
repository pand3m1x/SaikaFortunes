import React, { useState } from "react";

import MoonPhaseIcon from "../assets/MoonIMG.png";

function MoonPhase() {

  const MoonPhases =[
    {phase: "New Moon",
     description: "The New Moon represents new beginnings, fresh starts, and the potential for growth. It is a time to set intentions and plant seeds for the future."
    },
    {phase: "Waxing Crescent",
     description: "The Waxing Crescent symbolizes growth, development, and the beginning of a new cycle. It encourages you to take action and nurture your ideas."
    },
    {phase: "First Quarter",
     description: "The First Quarter represents a time of decision-making and taking action. It signifies a balance between intuition and logic."
    },
    {phase: "Waxing Gibbous",
     description: "The Waxing Gibbous indicates a period of refinement and completion. It urges you to focus on details and make necessary adjustments."
    },
    {phase: "Full Moon",
     description: "The Full Moon embodies culmination, realization, and the manifestation of your efforts. It is a time for celebration and reflection."
    },
    {phase: "Waning Gibbous",
     description: "The Waning Gibbous signifies letting go, releasing, and preparing for the next cycle. It encourages you to reflect on your journey and learn from your experiences."
    },
    {phase: "Last Quarter",
     description: "The Last Quarter represents a time of closure, completion, and release. It urges you to let go of what no longer serves you."
    },
    {phase: "Waning Crescent",
     description: "The Waning Crescent symbolizes rest, introspection, and preparation for the next new moon. It is a time for rest and renewal."
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
      <p>{selectedPhase?.description}</p>
    </div>
  );
}

export default MoonPhase;