import React from 'react';
import './App.css';
import WelcomeSection from './components/WelcomeSection';
import GameSection from './components/GameSection';
import ConclusionSection from './components/ConclusionSection';

function App() {
    return (
        <div className="App">
            <WelcomeSection />
            <GameSection />
            <ConclusionSection />
        </div>
    );
}

export default App; 