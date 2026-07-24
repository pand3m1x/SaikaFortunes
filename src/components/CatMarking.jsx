import CatIcon from "../assets/CatCoatIMG.png";

function CatMarking() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={CatIcon} alt="Cat in black and white in fancy boarder" style={{ width: '200px', height: 'auto' }} />
      <p>Cat Coat</p>
      <p>What is there to say about all the cute ways cats have coats?</p>
    </div>
  );
}

export default CatMarking;