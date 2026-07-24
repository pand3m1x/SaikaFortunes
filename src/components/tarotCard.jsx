import TarotCardIcon from "../assets/TarotIMG.png";

function TarotCard() {
  return (
    <div>
      <img src={TarotCardIcon} alt="Tarot card in black and white in fancy boarder" style={{ width: '200px', height: 'auto' }} />
      <p>Tarot Card</p>
      <p>There are so many meanings in the cards!</p>
    </div>
  );
}

export default TarotCard;