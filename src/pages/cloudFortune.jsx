import blessCloud from "../assets/CloudFortuneIMG.png";
import CatMarking from "../components/CatMarking";
import MoonPhase from "../components/MoonPhase";
import TarotCard from "../components/TarotCard";
import TeaFlavor from "../components/TeaFlavor";


function CloudFortune() {

  return (
    <>
      <div className="fortune-container" style={{ display: 'flex', 
                                           flexDirection: 'column', 
                                           alignItems: 'center', 
                                           gap: '10px', 
                                           border: '1px solid green' }}>
        <div className="main-fortune" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid red' }}>
          <h1>Cloud Fortune</h1>
          <img src={blessCloud} alt="Blessed Cloud" style={{ width: '250px', height: 'auto' }} />
          <p>Your Cloud fortune goes here.</p>
        </div>
        <div className="quarter-grid" >
          <div id="tarot-card" style={{ border: '1px solid lightblue' }}>
            <TarotCard></TarotCard>
          </div>
          <div id="moon-phase" style={{ border: '1px solid lightblue' }}>
            <MoonPhase></MoonPhase>
          </div>
          <div id="tea-taste" style={{ border: '1px solid lightblue' }}>
            <TeaFlavor></TeaFlavor>
          </div>
          <div id="cat-marking" style={{ border: '1px solid lightblue' }}>
            <CatMarking></CatMarking>
          </div>
        </div>
      </div>
    </>
  );
}

export default CloudFortune;