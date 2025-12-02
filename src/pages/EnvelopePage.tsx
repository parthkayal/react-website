import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EnvelopePage.css';

const EnvelopePage: React.FC = () => {
  const navigate = useNavigate();

  const handleOpenLetter = () => {
    navigate('/letter');
  };

  return (
    <div className="envelope-page">
      <div className="content-wrapper">
        <div className="teddy-container">
          <div className="teddy">🧸</div>
          <div className="speech-bubble">Open it!</div>
        </div>
        
        <div className="envelope-container" onClick={handleOpenLetter}>
          <div className="envelope">
            <div className="envelope-flap"></div>
            <div className="envelope-body">
              <div className="heart">💌</div>
            </div>
          </div>
          <div className="hover-message">Click to open</div>
        </div>
      </div>
    </div>
  );
};

export default EnvelopePage;

