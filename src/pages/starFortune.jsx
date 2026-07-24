import blessStar from "../assets/StarFortuneIMG.png";

function StarFortune() {
  return (
    <div>
      <h1>Star Fortune</h1>
      <img src={blessStar} alt="Blessed Star" style={{ width: '200px', height: 'auto' }} />
      <p>Your star fortune goes here.</p>
    </div>
  );
}

export default StarFortune;