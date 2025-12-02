import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import EnvelopePage from './pages/EnvelopePage';
import LetterPage from './pages/LetterPage';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router basename="/react-website">
        <div className="app">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<EnvelopePage />} />
            <Route path="/letter" element={<LetterPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

