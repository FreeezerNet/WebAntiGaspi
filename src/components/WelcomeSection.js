import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
    const scrollToGame = () => {
        document.getElementById('game-section').scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <section className="welcome-section">
            <div className="welcome-background">
                <img
                    src="/welcome_background.jpeg"
                    alt="Background"
                    className="welcome-image"
                />
                <div className="welcome-overlay"></div>
            </div>

            <div className="welcome-content">
                <div className="container">
                    <h1 className="welcome-title">
                        Stop au Gaspillage Alimentaire !
                    </h1>
                    <p className="welcome-slogan">
                        Compost, frigo ou poubelle ? À toi de jouer pour sauver nos ressources !
                    </p>
                    <button
                        className="btn btn-primary welcome-cta"
                        onClick={scrollToGame}
                    >
                        Commencer le Jeu
                    </button>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
};

export default WelcomeSection; 