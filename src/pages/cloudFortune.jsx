import blessCloud from "../assets/CloudFortuneIMG.png";


function CloudFortune() {
  return (
    <div>
      <h1>Cloud Fortune</h1>
      <img src={blessCloud} alt="Blessed Cloud" style={{ width: '250px', height: 'auto' }} />
      <p>Your Cloud fortune goes here.</p>
    </div>
  );
}

export default CloudFortune;