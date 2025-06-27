import React, { useState, useEffect } from 'react';
import './GameSection.css';

const GameSection = () => {
    const [currentItem, setCurrentItem] = useState(null);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [itemsProcessed, setItemsProcessed] = useState(0);

    const foodItems = [
        { name: 'Pomme', type: 'compost', emoji: '🍎' },
        { name: 'Banane', type: 'compost', emoji: '🍌' },
        { name: 'Pain rassis', type: 'compost', emoji: '🍞' },
        { name: 'Épluchures de légumes', type: 'compost', emoji: '🥕' },
        { name: 'Marc de café', type: 'compost', emoji: '☕' },
        { name: 'Yaourt périmé', type: 'trash', emoji: '🥛' },
        { name: 'Viande avariée', type: 'trash', emoji: '🥩' },
        { name: 'Poisson périmé', type: 'trash', emoji: '🐟' },
        { name: 'Fromage moisi', type: 'trash', emoji: '🧀' },
        { name: 'Légumes frais', type: 'fridge', emoji: '🥬' },
        { name: 'Fruits frais', type: 'fridge', emoji: '🍓' },
        { name: 'Lait frais', type: 'fridge', emoji: '🥛' },
        { name: 'Œufs frais', type: 'fridge', emoji: '🥚' },
        { name: 'Jambon frais', type: 'fridge', emoji: '🥓' },
        { name: 'Pâtes cuites', type: 'fridge', emoji: '🍝' }
    ];

    const getRandomItem = () => {
        return foodItems[Math.floor(Math.random() * foodItems.length)];
    };

    const startGame = () => {
        setGameStarted(true);
        setGameOver(false);
        setScore(0);
        setTimeLeft(60);
        setItemsProcessed(0);
        setCurrentItem(getRandomItem());
    };

    const handleSort = (selectedType) => {
        if (!currentItem) return;

        const isCorrect = selectedType === currentItem.type;

        if (isCorrect) {
            setScore(score + 10);
        }

        setItemsProcessed(itemsProcessed + 1);
        setCurrentItem(getRandomItem());
    };

    const getTrashColor = (type) => {
        switch (type) {
            case 'compost': return '#8B4513';
            case 'trash': return '#696969';
            case 'fridge': return '#87CEEB';
            default: return '#ddd';
        }
    };

    const getTrashIcon = (type) => {
        switch (type) {
            case 'compost': return '🌱';
            case 'trash': return '🗑️';
            case 'fridge': return '❄️';
            default: return '📦';
        }
    };

    const getTrashLabel = (type) => {
        switch (type) {
            case 'compost': return 'Compost';
            case 'trash': return 'Poubelle';
            case 'fridge': return 'Frigo';
            default: return 'Autre';
        }
    };

    useEffect(() => {
        let timer;
        if (gameStarted && !gameOver && timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setGameOver(true);
            setGameStarted(false);
        }
        return () => clearTimeout(timer);
    }, [gameStarted, gameOver, timeLeft]);

    return (
        <section id="game-section" className="game-section">
            <div className="container">
                <h2 className="section-title">Jeu de Tri Alimentaire</h2>
                <p className="section-subtitle">
                    Triez les aliments dans la bonne poubelle ! Vous avez 60 secondes pour marquer le plus de points possible.
                </p>

                {!gameStarted && !gameOver && (
                    <div className="game-start">
                        <button className="btn btn-primary start-btn" onClick={startGame}>
                            Commencer le Jeu
                        </button>
                    </div>
                )}

                {gameOver && (
                    <div className="game-over">
                        <h3>Partie terminée !</h3>
                        <p>Score final : {score} points</p>
                        <p>Objets triés : {itemsProcessed}</p>
                        <button className="btn btn-primary" onClick={startGame}>
                            Rejouer
                        </button>
                    </div>
                )}

                {gameStarted && !gameOver && (
                    <div className="game-container">
                        <div className="game-info">
                            <div className="score">Score: {score}</div>
                            <div className="timer">Temps: {timeLeft}s</div>
                            <div className="items-processed">Objets triés: {itemsProcessed}</div>
                        </div>

                        {currentItem && (
                            <div className="current-item">
                                <div className="item-display">
                                    <span className="item-emoji">{currentItem.emoji}</span>
                                    <span className="item-name">{currentItem.name}</span>
                                </div>
                                <p className="item-instruction">Où jeter cet objet ?</p>
                            </div>
                        )}

                        <div className="trash-bins">
                            {['compost', 'fridge', 'trash'].map((type) => (
                                <div
                                    key={type}
                                    className="trash-bin"
                                    style={{ backgroundColor: getTrashColor(type) }}
                                    onClick={() => handleSort(type)}
                                >
                                    <div className="trash-icon">{getTrashIcon(type)}</div>
                                    <div className="trash-label">{getTrashLabel(type)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="game-instructions">
                    <h3>Instructions :</h3>
                    <div className="instructions-grid">
                        <div className="instruction">
                            <span className="instruction-icon">🌱</span>
                            <div>
                                <strong>Compost :</strong> Épluchures, fruits pourris, marc de café, pain rassis
                            </div>
                        </div>
                        <div className="instruction">
                            <span className="instruction-icon">❄️</span>
                            <div>
                                <strong>Frigo :</strong> Aliments encore consommables et frais
                            </div>
                        </div>
                        <div className="instruction">
                            <span className="instruction-icon">🗑️</span>
                            <div>
                                <strong>Poubelle :</strong> Aliments avariés, viande périmée, produits laitiers périmés
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameSection; 