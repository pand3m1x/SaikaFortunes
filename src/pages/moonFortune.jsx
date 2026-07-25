import blessMoon from "../assets/MoonFortuneIMG.png";
import CatMarking from "../components/CatMarking";
import MoonPhase from "../components/MoonPhase";
import TarotCard from "../components/TarotCard";
import TeaFlavor from "../components/TeaFlavor";


function MoonFortune() {
  return (
    <div className="fortune-container" >
      <div className="main-fortune" >
        <h1>Moon Fortune</h1>
        <img src={blessMoon} alt="Blessed Moon" style={{ width: '200px', height: 'auto' }} />
        <p>Your moon fortune goes here.</p>
      </div>
      <div className="quarter-grid" >
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
  );
}

export default MoonFortune;