import blessCloud from "../assets/CloudFortuneIMG.png";
import CatMarking from "../components/CatMarking.jsx";
import MoonPhase from "../components/MoonPhase.jsx";
import TarotCard from "../components/TarotCard.jsx";
import TeaFlavor from "../components/TeaFlavor.jsx";

// hooks
import useSaveFortune from "../hooks/saveFortune.js";


function CloudFortune() {
  const { fortuneRef, saveFortune } = useSaveFortune("cloud-fortune");

  return (
    <div className="fortunes">
      <div className="fortune-container" ref={fortuneRef}>
        <div className="main-fortune" >
          <h1>Cloud Fortune</h1>
          <img src={blessCloud} alt="Cloud shape with the kanji for little luck." />
          <p className="sub-header">Decent level of luck!</p>
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
        <div className="footer">
          <p>a Saika collabortaion project!</p>
          <p>&copy; 2026 Saika Cafe. All Rights Reserved.</p>
        </div>
      </div>
          <button onClick={saveFortune}>save fortune</button>
    </div>
  );
}

export default CloudFortune;