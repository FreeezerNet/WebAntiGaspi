import React from 'react';
import './ConclusionSection.css';

const ConclusionSection = ({ score = 0, onRestart }) => {
    const tools = [
        {
            title: "Planification des repas",
            description: "Planifiez vos repas à l'avance pour éviter d'acheter plus que nécessaire. Utilisez une liste de courses et respectez-la !",
            icon: "📋",
            tips: ["Faites un inventaire de votre frigo", "Planifiez 3-4 repas par semaine", "Achetez en vrac quand possible"]
        },
        {
            title: "Conservation optimale",
            description: "Apprenez à conserver correctement vos aliments pour prolonger leur durée de vie et éviter le gaspillage.",
            icon: "❄️",
            tips: ["Utilisez des boîtes hermétiques", "Congelez les surplus", "Placez les aliments périssables devant"]
        },
        {
            title: "Compostage",
            description: "Transformez vos déchets alimentaires en engrais naturel pour votre jardin ou vos plantes d'intérieur.",
            icon: "🌱",
            tips: ["Compostez les épluchures", "Utilisez un lombricomposteur", "Évitez les produits laitiers et viandes"]
        },
        {
            title: "Recettes anti-gaspi",
            description: "Découvrez des recettes créatives pour utiliser les restes et les aliments qui approchent de leur date limite.",
            icon: "👨‍🍳",
            tips: ["Soupes avec légumes abîmés", "Pain perdu avec pain rassis", "Smoothies avec fruits mûrs"]
        }
    ];

    const statistics = [
        { number: "1/3", label: "de la nourriture produite est gaspillée", sources: [
            { url: "https://www.fao.org/food-loss-and-food-waste/en/", label: "FAO" },
            { url: "https://www.ademe.fr/expertises/dechets/elements-contexte/gaspillage-alimentaire", label: "Ademe" },
            { url: "https://www.unep.org/fr/ressources/rapport/indice-du-gaspillage-alimentaire-2021", label: "ONU Environnement" }
        ] },
        { number: "10M", label: "tonnes de déchets alimentaires par an en France", sources: [
            { url: "https://www.ecologie.gouv.fr/gaspillage-alimentaire", label: "Ministère de la Transition écologique" },
            { url: "https://librairie.ademe.fr/cadic/2647/chiffres-cles-du-gaspillage-alimentaire.pdf", label: "Ademe (PDF)" },
            { url: "https://www.fao.org/france/news/detail-fr/fr/c/1113172/", label: "FAO France" }
        ] },
        { number: "159€", label: "perdus par personne et par an", sources: [
            { url: "https://librairie.ademe.fr/cadic/2647/chiffres-cles-du-gaspillage-alimentaire.pdf", label: "Ademe (PDF)" },
            { url: "https://agriculture.gouv.fr/gaspillage-alimentaire", label: "Ministère de l'Agriculture" },
            { url: "https://www.fne.asso.fr/dossiers/gaspillage-alimentaire", label: "France Nature Environnement" }
        ] },
        { number: "8%", label: "des émissions de gaz à effet de serre mondiales", sources: [
            { url: "https://www.fao.org/food-loss-and-food-waste/en/", label: "FAO" },
            { url: "https://www.unep.org/resources/report/unep-food-waste-index-report-2021", label: "ONU Environnement" },
            { url: "https://drawdown.org/solutions/reduced-food-waste", label: "Project Drawdown" }
        ] }
    ];

    return (
        <section className="conclusion-section">
            <div className="container">
                <h2 className="section-title">Ensemble, luttons contre le gaspillage !</h2>
                <p className="section-subtitle">
                    Découvrez nos outils et conseils pour réduire le gaspillage alimentaire au quotidien
                </p>

                <div className="score-final" style={{textAlign: 'center', margin: '30px 0'}}>
                    <h3>Votre score final : {score} points</h3>
                </div>

                <div className="stats-container">
                    <h3>Le gaspillage alimentaire en chiffres</h3>
                    <div className="stats-grid">
                        {statistics.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                                <div style={{marginTop: 16, fontSize: '0.85em', color: '#bfc9d1', fontStyle: 'italic', textAlign: 'left', lineHeight: 1.5}}>
                                    {stat.sources && stat.sources.map((src, i) => (
                                        <div key={i}>
                                            <a href={src.url} target="_blank" rel="noopener noreferrer" style={{color: '#bfc9d1', textDecoration: 'none', fontStyle: 'italic'}}>{src.label}</a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tools-container">
                    <h3>Les méthodes pour agir</h3>
                    <div className="tools-grid">
                        {tools.map((tool, index) => (
                            <div key={index} className="tool-card">
                                <div className="tool-header">
                                    <span className="tool-icon">{tool.icon}</span>
                                    <h4 className="tool-title">{tool.title}</h4>
                                </div>
                                <p className="tool-description">{tool.description}</p>
                                <div className="tool-tips">
                                    <h5>Conseils pratiques :</h5>
                                    <ul>
                                        {tool.tips.map((tip, tipIndex) => (
                                            <li key={tipIndex}>{tip}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer-note">
                    <p>
                        <strong>Rappel :</strong> Le meilleur déchet est celui qu'on ne produit pas.
                        Achetez malin, cuisinez astucieusement, et donnez une seconde vie à vos aliments !
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ConclusionSection; 