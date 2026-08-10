import blessSakura from "../assets/SakuraFortuneIMG.png";
import CatMarking from "../components/CatMarking.jsx";
import MoonPhase from "../components/MoonPhase.jsx";
import TarotCard from "../components/TarotCard.jsx";
import TeaFlavor from "../components/TeaFlavor.jsx";

// hooks
import useSaveFortune from "../hooks/saveFortune.js";

function SakuraFortune() {
  const { fortuneRef, saveFortune, showSavedMessage, clearSavedMessage } = useSaveFortune("sakura-fortune");

  return (
  <div className="fortunes">
    <div className="fortune-container" ref={fortuneRef}>
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
        <div className="footer">
          <p>a <a href="https://www.saikacafe.com/">Saika Cafe</a> collabortaion project!</p>
          <p>&copy; 2026 Saika Cafe. All Rights Reserved.</p>
        </div>
    </div>
          <button onClick={ saveFortune }>save fortune</button>
          {showSavedMessage && (
            <div className="saved-message">
              <p>Fortune saved successfully!</p>
              <p id="mobile-notification">mobile users - check your downloads folder if it doesn't appear in your photo reel</p>
              <button onClick={ clearSavedMessage }>Close</button>
            </div>
          )}
    </div>
  );
}

export default SakuraFortune;