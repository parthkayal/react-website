import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LetterPage.css';

const LetterPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="letter-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back
      </button>
      
      <div className="letter-container">
        <div className="letter">
          <div className="letter-header">
            <span className="moon-icon">🌙</span>
          </div>
          
          <div className="letter-content">
            <p className="greeting">Dear Friend,</p>
            
            <div className="poem">
              <p>
                In the velvet canvas of the night,<br />
                The moon ascends with gentle light,<br />
                A silver pearl in cosmic sea,<br />
                Whispering tales of mystery.
              </p>
              
              <p>
                Her beauty speaks in silent tones,<br />
                Illuminating dreams unknown,<br />
                A timeless guardian of the sky,<br />
                She watches as the world drifts by.
              </p>
              
              <p>
                With every phase, a story told,<br />
                Of love and wonder, brave and bold,<br />
                The moon's sweet face, forever bright,<br />
                A beacon in the endless night.
              </p>
              
              <p>
                Her gentle glow, a soft embrace,<br />
                Brings peace to every weary face,<br />
                In moonlit beauty, pure and true,<br />
                She shines her light for me and you.
              </p>
            </div>
            
            <p className="signature">
              With love and starlight,<br />
              <span className="signature-name">Always ✨</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterPage;

