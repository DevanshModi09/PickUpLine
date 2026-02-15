import { useState } from 'react';
import myImage from '../assets/IMG_4779.png';

function LineCard({ line }) {
  const [copied, setCopied] = useState(false);

  const copyLine = async () => {
    await navigator.clipboard.writeText(line);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="line-card">
      <img src={myImage} alt="Creator of PickUpLine" className="creator-photo" />
      <h3 className="line-text">{line}</h3>
      <button className="copy-button" onClick={copyLine} aria-live="polite">
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}

export default LineCard;
