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
        <img src={blessSakura} alt="Sakura shape with the kanji for average luck." />
        <p className="sub-header">Average level of luck.</p>
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
        <button>save fortune</button>
    </div>
  </> 
  );
}

export default SakuraFortune;