import omikujiIMG from '../assets/omikuji image 1.png'

function Omikuji() {
  return (
    <div className="fortune-container">
      <h1>Omikuji</h1>
      <p className="omikuji-p">Welcome to the Omikuji page! </p>
      <p className="omikuji-p">Here you can draw your fortune.</p>
      <img id="omikuji-image" src={omikujiIMG} alt="Japanese Omikuji fortune box" />
      <p className="omikuji-p" id="italic-p">Click the button below to draw your fortune!</p>
      <button>Draw Fortune</button>
      {/* Add your Omikuji functionality here */}
    </div>
  );
}

export default Omikuji;