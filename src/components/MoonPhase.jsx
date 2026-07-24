import MoonPhaseIcon from "../assets/MoonIMG.png";

function MoonPhase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={MoonPhaseIcon} alt="phases of the moon in black and white in fancy boarder" style={{ width: '200px', height: 'auto' }} />
      <p>Moon Phase</p>
      <p>There are so many phases to the moon!</p>
    </div>
  );
}

export default MoonPhase;