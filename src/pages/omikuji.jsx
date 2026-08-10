import { useNavigate } from 'react-router-dom';

import omikujiIMG from '../assets/omikuji image 1.png'

function Omikuji() {

  const navigate = useNavigate();

  function getRandomFortunePage() {
    const roll = Math.random();

     if (roll < 0.50) {
      return "/sakurafortune";       // 0.00–0.50 → 50%
    } else if (roll < 0.75) {
      return "/cloudfortune";        // 0.50–0.75 → 25%
    } else if (roll < 0.90) {
      return "/starfortune";         // 0.75–0.90 → 15%
    } else {
      return "/moonfortune";         // 0.90–1.00 → 10%
    }
  }

  function handleDrawFortune() {
    const destination = getRandomFortunePage();
    navigate(destination);
  }

  return (

    <div className="fortune-container">
      <h1>Saika Fortune Teller</h1>
      <p className="omikuji-p">Welcome to the Saika Cafe Omikuji page! </p>
      <p className="omikuji-p">Here you can draw your fortune.</p>
      <img id="omikuji-image" src={omikujiIMG} alt="Japanese Omikuji fortune box" />
      <p className="omikuji-p" id="italic-p">Click the button below to draw your fortune!</p>
      <button onClick={handleDrawFortune}>Draw Fortune</button>
      {/* Add your Omikuji functionality here */}
    </div>

  );
}

export default Omikuji;