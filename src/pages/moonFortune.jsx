import blessMoon from "../assets/MoonFortuneIMG.png";


function MoonFortune() {
  return (
    <div>
      <h1>Moon Fortune</h1>
      <img src={blessMoon} alt="Blessed Cloud" style={{ width: '200px', height: 'auto' }} />
      <p>Your moon fortune goes here.</p>
    </div>
  );
}

export default MoonFortune;