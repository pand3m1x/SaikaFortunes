import blessSakura from "../assets/blessSakura.png";

function SakuraFortune() {
  return (
    <div>
      <h1>Sakura Fortune</h1>
      <img src={blessSakura} alt="Blessed Sakura" style={{ width: '200px', height: 'auto' }} />
      <p>Your sakura fortune goes here.</p>
    </div>
  );
}

export default SakuraFortune;