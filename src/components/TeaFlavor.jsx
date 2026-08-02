import React, { useState } from "react";

import TeaFlavorIcon from "../assets/TeaIMG.png";

function TeaFlavor() {

  
  const TeaDescriptions = [
  { id: "tf1",
    TeaFlavor: "Green Tea",
   description: "You need to be prepared, but you won’t face anything you can’t handle. Green tea is caffeinated but also contains high levels of antioxidants, giving you the alertness to face the day without stressing you out."
  },
  {id: "tf2",
    TeaFlavor: "Black Tea",
   description: "It’s time to buckle down and focus on the tasks ahead. Black tea gives you a similar amount of caffeine to coffee but over a longer period, letting you maintain focus without the crash."
  },
  {id: "tf3",
    TeaFlavor: "Pu-erh Tea",
   description: "It’s finally time to appreciate the fruits of your labor. Pu-erh is fermented over years, resulting in a strong, earthy flavor."
  },
  {id: "tf4",
    TeaFlavor: "Oolong Tea",
   description: "It’s time to branch out and try something new. Don’t feel beholden to a single path. Oolong sits between green and black teas, allowing it to take on a wide variety of flavor profiles."
  },
  {id: "tf5",
    TeaFlavor: "Rooibos Tea",
   description: "You’ve been working hard. Take some time for yourself and let the stress melt away. Rooibos is made from the African redbush, giving it a sweet flavor and deep red hue. It’s also a natural muscle relaxant."
  },
  {id: "tf6",
    TeaFlavor: "Mint Tea",
   description: "It’s time to indulge a little. Let yourself enjoy something special. Mint tea contains menthol, which can help reduce both physical and mental stress. Mint tea also helps with digestion. "
  },
  {id: "tf7",
    TeaFlavor: "Chamomile Tea",
   description: "You’ve been pushing yourself too hard lately. It’s time to take a break and get a good night's rest. Chamomile flowers help promote good sleep and relaxation. It’s not caffeinated, so you can have it before bed."
  },
  {id: "tf8",
    TeaFlavor: "Darjeeling Tea",
   description: "The path ahead is best traveled alone, but the rewards will be well worthwhile. Darjeeling is an Indian black tea known for its complex flavors, floral flavors. It’s best enjoyed without accompaniment."
  },
  {id: "tf9",
    TeaFlavor: "White Tea",
   description: "It’s going to be a difficult road ahead. Don’t forget to take breaks. White teas are fragile and minimally processed, resulting in subtle flavors. More than any other tea, white teas reward a delicate approach."
  },
  {id: "tf10",
    TeaFlavor: "Lapsang Souchong Tea",
   description: "It’s time to get outside. Go for a hike or spend some time at a park. Life will be there when you get back. Lapsang souchong is an earthy tea known for its smoky flavor. Best enjoyed on a cozy afternoon."
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