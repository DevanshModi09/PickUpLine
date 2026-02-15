import { useState } from 'react';
import myImage from '../assets/IMG_4779.png';

function LineCard({ line }) {
  const [copied, setCopied] = useState(false);

  const copyLine = async () => {
    await navigator.clipboard.writeText(line);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLine = async () => {
    if (navigator.share) {
      await navigator.share({ text: line });
    } else {
      await copyLine();
    }
  };

  return (
    <div className="line-card">
      <img src={myImage} alt="Creator of PickUpLine" className="creator-photo" />
      <h3 className="line-text">{line}</h3>
      <div className="line-actions">
        <button className="copy-button" onClick={copyLine} aria-live="polite">
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <button className="copy-button" onClick={shareLine}>
          Share
        </button>
      </div>
    </div>
  );
}

export default LineCard;
