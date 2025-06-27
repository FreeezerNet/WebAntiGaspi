import React from 'react';
import './ToolsSection.css';

const ToolsSection = () => {
    const tools = [
        {
            name: "Cursor",
            icon: "/cursor.png",
            description: "Éditeur de code intelligent basé sur Visual Studio Code, enrichi par l'intelligence artificielle. Nous a permis de développer plus rapidement les fonctionnalités de la web app, en facilitant l'autocomplétion, la génération de fonctions et la détection d'erreurs.",
            usage: "Développement rapide et maintien de la qualité de code"
        },
        {
            name: "ChatGPT",
            icon: "/icons8-chatgpt-50.png",
            description: "Assistant central pour la rédaction du code, la clarification de concepts techniques, et la rédaction de contenus textuels. Utilisé pour obtenir des suggestions sur l'architecture du projet et l'amélioration de l'expérience utilisateur.",
            usage: "Assistance au développement et rédaction de contenu"
        },
        {
            name: "Sora",
            icon: "/icons8-chatgpt-50.png",
            description: "Outil de génération d'images par IA pour créer des visuels adaptés à notre thématique. Permet de produire rapidement des illustrations stylisées en lien avec le gaspillage alimentaire.",
            usage: "Génération d'images thématiques et visuels illustratifs"
        },
        {
            name: "Ideogram",
            icon: "/ideogram.png",
            description: "Outil de génération d'images créatives par IA pour produire des visuels illustrant des idées abstraites ou des scènes spécifiques liées au gaspillage alimentaire.",
            usage: "Création d'images créatives et d'infographies"
        },
        {
            name: "Canva",
            icon: "/icons8-toile-50.png",
            description: "Plateforme de conception graphique utilisée pour la création de logos, bannières, maquettes et la génération d'images personnalisées cohérentes avec notre identité visuelle.",
            usage: "Design graphique et création d'identité visuelle"
        }
    ];

    return (
        <section className="tools-section">
            <div className="container">
                <h2 className="section-title">Outils utilisés dans notre projet</h2>
                <p className="section-subtitle">
                    Découvrez les technologies et outils modernes qui ont permis de créer cette application de sensibilisation au gaspillage alimentaire
                </p>

                <div className="tools-intro">
                    <p>
                        Dans le cadre de notre projet de web application visant à sensibiliser et à lutter contre le gaspillage alimentaire,
                        nous avons fait appel à une série d'outils modernes, performants et complémentaires, nous permettant de gagner en efficacité,
                        en créativité et en qualité.
                    </p>
                </div>

                <div className="tools-grid">
                    {tools.map((tool, index) => (
                        <div key={index} className="tool-card">
                            <div className="tool-header">
                                <div className="tool-icon-container">
                                    {tool.icon.startsWith('/') ? (
                                        <img
                                            src={tool.icon}
                                            alt={`${tool.name} icon`}
                                            className="tool-icon-image"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'block';
                                            }}
                                        />
                                    ) : null}
                                    <span className="tool-icon-fallback" style={{ display: tool.icon.startsWith('/') ? 'none' : 'block' }}>
                                        {tool.icon}
                                    </span>
                                </div>
                                <h3 className="tool-name">{tool.name}</h3>
                            </div>

                            <div className="tool-content">
                                <p className="tool-description">{tool.description}</p>
                                <div className="tool-usage">
                                    <strong>Utilisation :</strong> {tool.usage}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="tools-conclusion">
                    <h3>Conclusion</h3>
                    <p>
                        L'utilisation conjointe de ces outils nous a permis d'aborder le projet de manière plus créative,
                        efficace et collaborative. L'intelligence artificielle et les outils de design nous ont offert
                        un gain de temps précieux et ont amélioré la qualité générale de notre web app, aussi bien sur
                        le plan technique que visuel et expérientiel.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ToolsSection; 