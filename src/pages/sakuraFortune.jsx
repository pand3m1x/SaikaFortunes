import blessSakura from "../assets/SakuraFortuneIMG.png";
import CatMarking from "../components/CatMarking";
import MoonPhase from "../components/MoonPhase";
import TarotCard from "../components/TarotCard";
import TeaFlavor from "../components/TeaFlavor";

function SakuraFortune() {
  return (
  <>
    <div className="fortune-container" >
      <div className="main-fortune" >
        <h1>Sakura Fortune</h1>
        <img src={blessSakura} alt="Blessed Sakura" style={{ width: '200px', height: 'auto' }} />
        <p>Your sakura fortune goes here.</p>
      </div>
        <div className="quarter-grid">
          <div className="fortune-card" >
            <TarotCard></TarotCard>
          </div>
          <div className="fortune-card" >
            <MoonPhase></MoonPhase>
          </div>
          <div className="fortune-card" >
            <TeaFlavor></TeaFlavor>
          </div>
          <div className="fortune-card" >
            <CatMarking></CatMarking>
          </div>
        </div>
    </div>
  </> 
  );
}

export default SakuraFortune;