import blessSakura from "../assets/SakuraFortuneIMG.png";
import CatMarking from "../components/CatMarking";
import MoonPhase from "../components/MoonPhase";

function SakuraFortune() {
  return (
  <>
    <div id="main-fortune">
      <h1>Sakura Fortune</h1>
      <img src={blessSakura} alt="Blessed Sakura" style={{ width: '200px', height: 'auto' }} />
      <p>Your sakura fortune goes here.</p>
    </div>
    <div id="quater-grid">
      <div id="tarot-card">
        
      </div>
      <div id="moon-phase">
        <MoonPhase></MoonPhase>
      </div>
      <div id="tea-taste">

      </div>
      <div id="cat-marking">
        <CatMarking></CatMarking>
      </div>
    </div>
  </> 
  );
}

export default SakuraFortune;