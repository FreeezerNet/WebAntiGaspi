import React, { useState } from 'react';
import './GameSection.css';
import CompostImg from '../image/composte.png';
import fridgeImg from '../image/Stilledible.png';
import trashImg from '../image/trashes.png';

const GameSection = () => {
    const [currentItem, setCurrentItem] = useState(null);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [showConclusion, setShowConclusion] = useState(false);
    const [itemsProcessed, setItemsProcessed] = useState(0);
    const MAX_ITEMS = 20;

    const foodItems = [
        { aliment: "Banane", etat: "Très mûre, noire, peau tachetée, molle", destination: "Composte", icon: "🍌" },
        { aliment: "Pomme", etat: "Froissée, un peu molle mais sans taches", destination: "À consommer", icon: "🍏" },
        { aliment: "Yaourt nature", etat: "Date de péremption dépassée de 1 jour", destination: "À consommer", icon: "🥛" },
        { aliment: "Pain", etat: "Durci mais pas moisi, croûte sèche", destination: "À consommer", icon: "🍞" },
        { aliment: "Tomate", etat: "Très mûre, fendue, jus qui s'échappe", destination: "Composte", icon: "🍅" },
        { aliment: "Fromage (camembert)", etat: "Très affiné, croûte odorante mais normale", destination: "À consommer", icon: "🧀" },
        { aliment: "Lait", etat: "Ouvert depuis 4 jours, pas encore tourné", destination: "À consommer", icon: "🥛" },
        { aliment: "Feuille de salade", etat: "Flétrie, un peu molle, pas moisie", destination: "Composte", icon: "🥬" },
        { aliment: "Riz cuit", etat: "Restes de la veille, conservé au frigo", destination: "À consommer", icon: "🍚" },
        { aliment: "Carottes", etat: "Un peu molles, peau ridée", destination: "À consommer", icon: "🥕" },
        { aliment: "Poulet cuit", etat: "3 jours dans le frigo, odeur douteuse", destination: "Poubelle", icon: "🍗" },
        { aliment: "Biscuit", etat: "Sec, emballage ouvert depuis 2 jours", destination: "À consommer", icon: "🍪" },
        { aliment: "Jambon", etat: "Odeur légèrement acide, couleur pâle", destination: "Poubelle", icon: "🥓" },
        { aliment: "Œuf cru", etat: "Non cassé, à tester dans l'eau", destination: "À consommer", icon: "🥚" },
        { aliment: "Croissant", etat: "Rassis, texture sèche mais pas moisi", destination: "À consommer", icon: "🥐" },
        { aliment: "Fromage râpé", etat: "Présence de moisissure visible", destination: "Poubelle", icon: "🧀" },
        { aliment: "Conserve de haricots", etat: "Boîte cabossée mais non ouverte", destination: "À consommer", icon: "🥫" },
        { aliment: "Avocat", etat: "Chair noire et pâteuse à l'intérieur", destination: "Composte", icon: "🥑" },
        { aliment: "Œuf dur", etat: "2 jours après cuisson, bien conservé", destination: "À consommer", icon: "🥚" },
        { aliment: "Confiture", etat: "Pellicule blanche de moisissure en surface", destination: "Poubelle", icon: "🍯" },
        { aliment: "Poire", etat: "Mûre à point, légèrement tachetée", destination: "À consommer", icon: "🍐" },
        { aliment: "Brocoli", etat: "Feuilles fanées, tiges encore fermes", destination: "Composte", icon: "🥦" },
        { aliment: "Fromage blanc", etat: "Ouvert depuis 3 jours, odeur fraîche", destination: "À consommer", icon: "🥛" },
        { aliment: "Œufs de caille", etat: "Boîte non ouverte, fraîche", destination: "À consommer", icon: "🥚" },
        { aliment: "Pommes de terre", etat: "Germées mais fermes", destination: "À consommer", icon: "🥔" },
        { aliment: "Poivron rouge", etat: "Peau ridée, pas de moisissure", destination: "À consommer", icon: "🫑" },
        { aliment: "Jus d'orange frais", etat: "Ouvert depuis 2 jours, goût acidulé", destination: "À consommer", icon: "🧃" },
        { aliment: "Filet de saumon", etat: "Très frais, emballage intact", destination: "À consommer", icon: "🐟" },
        { aliment: "Chocolat noir", etat: "Un peu blanc, comestible", destination: "À consommer", icon: "🍫" },
        { aliment: "Yaourt aux fruits", etat: "Date limite dépassée de 2 jours", destination: "Poubelle", icon: "🥛" },
        { aliment: "Salade de fruits", etat: "Préparée la veille, bien conservée", destination: "À consommer", icon: "🍇" },
        { aliment: "Steak haché", etat: "Date de péremption aujourd'hui", destination: "À consommer", icon: "🥩" },
        { aliment: "Thon en conserve", etat: "Boîte non ouverte, stockage optimal", destination: "À consommer", icon: "🥫" },
        { aliment: "Céréales", etat: "Paquet ouvert depuis 1 semaine", destination: "À consommer", icon: "🥣" },
        { aliment: "Concombre", etat: "Frais, sans taches", destination: "À consommer", icon: "🥒" },
        { aliment: "Yaourt grec", etat: "Ouvert, utilisé à moitié", destination: "À consommer", icon: "🥛" },
        { aliment: "Poitrine de poulet crue", etat: "Emballage scellé, fraîcheur maximale", destination: "À consommer", icon: "🍗" },
        { aliment: "Carottes râpées", etat: "Préparées il y a 3 jours, bien fermées", destination: "À consommer", icon: "🥕" },
        { aliment: "Gelée de fruits", etat: "Fermée, date de péremption dans 6 mois", destination: "À consommer", icon: "🍮" },
        { aliment: "Pain de mie", etat: "Tranches un peu sèches, non moisies", destination: "À consommer", icon: "🍞" }
    ];

    const getTypeFromDestination = (destination) => {
        if (destination === 'Composte') return 'Composte';
        if (destination === 'Poubelle') return 'trash';
        return 'fridge'; 
    };

    const getRandomItem = () => {
        return foodItems[Math.floor(Math.random() * foodItems.length)];
    };

    const startGame = () => {
        setGameStarted(true);
        setGameOver(false);
        setShowConclusion(false);
        setScore(0);
        setItemsProcessed(0);
        setCurrentItem(getRandomItem());
    };

    const handleSort = (selectedType) => {
        if (!currentItem) return;
        const isCorrect = selectedType === getTypeFromDestination(currentItem.destination);
        if (isCorrect) {
            setScore(score + 10);
        }
        const newItemsProcessed = itemsProcessed + 1;
        setItemsProcessed(newItemsProcessed);
        if (newItemsProcessed >= MAX_ITEMS) {
            setGameOver(true);
            setGameStarted(false);
            setShowConclusion(false);
        } else {
            setCurrentItem(getRandomItem());
        }
    };

    const getTrashImage = (type) => {
        switch (type) {
            case 'composte': return CompostImg;
            case 'trash': return trashImg;
            case 'fridge': return fridgeImg;
            default: return '';
        }
    };

    const getTrashLabel = (type) => {
        switch (type) {
            case 'composte': return 'Composte';
            case 'trash': return 'Poubelle';
            case 'fridge': return 'Frigo';
            default: return 'Autre';
        }
    };

    return (
        <section id="game-section" className="game-section">
            <div className="container">
                <h2 className="section-title">Jeu de Tri Alimentaire</h2>
                <p className="section-subtitle">
                    Triez les aliments dans la bonne zone ! Triez 20 objets pour terminer la partie.
                </p>
                {!gameStarted && !gameOver && !showConclusion && (
                    <div className="game-start">
                        <button className="btn btn-primary start-btn" onClick={startGame}>
                            Commencer le Jeu
                        </button>
                    </div>
                )}
                {gameOver && !gameStarted && !showConclusion && (
                    <div className="game-over">
                        <h3>Partie terminée !</h3>
                        <p>Score final : {score} points</p>
                        <button className="btn btn-primary" onClick={startGame}>
                            Rejouer
                        </button>
                    </div>
                )}
                {gameStarted && !gameOver && !showConclusion && (
                    <div className="game-container">
                        <div style={{textAlign: 'center', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8, color: '#388e3c'}}>
                            Score : {score} points
                        </div>
                        {currentItem && (
                            <>
                                <div style={{textAlign: 'center', fontWeight: 600, marginBottom: 6, fontSize: '1.1rem'}}>
                                    {itemsProcessed + 1} / 20
                                </div>
                                <div className="current-item">
                                    <div className="item-display">
                                        <span className="item-icon" style={{fontSize: '2.5rem'}}>{currentItem.icon}</span>
                                        <div className="item-name">{currentItem.aliment}</div>
                                    </div>
                                    <div className="item-etat">{currentItem.etat}</div>
                                    <p className="item-instruction">Où jeter cet objet ?</p>
                                </div>
                            </>
                        )}
                        <div className="trash-bins">
                            {['composte', 'fridge', 'trash'].map((type) => (
                                <div
                                    key={type}
                                    className="trash-bin"
                                    onClick={() => handleSort(type)}
                                >
                                    <img src={getTrashImage(type)} alt={type} className="trash-image" />
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
                            <img src={CompostImg} alt="Composte" className="instruction-icon" style={{width: '40px', height: '55px'}} />
                            <div>
                                <strong>Composte :</strong> Épluchures, fruits pourris, marc de café, pain rassis
                            </div>
                        </div>
                        <div className="instruction">
                            <img src={fridgeImg} alt="Frigo" className="instruction-icon" style={{width: '40px', height: '55px'}} />
                            <div>
                                <strong>Frigo :</strong> Aliments encore consommables et frais
                            </div>
                        </div>
                        <div className="instruction">
                            <img src={trashImg} alt="Poubelle" className="instruction-icon" style={{width: '40px', height: '55px'}} />
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