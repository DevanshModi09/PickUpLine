import myImage from '../assets/IMG_4779.png';

function LineCard({ line }) {
  return (
    <div className="line-card">
      <img src={myImage} alt="Creator of PickUpLine" className="creator-photo" />
      <h3 className="line-text">{line}</h3>
    </div>
  );
}

export default LineCard;
