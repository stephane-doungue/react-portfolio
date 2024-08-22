import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISITEZ MON PORTFOLIO"
          des="Mes projets"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title=" Analyse avancée de la performance des ventes"
          des={`Analyser les données historiques des ventes pour identifier les tendances saisonnières, les corrélations entre les produits et les comportements d'achat des clients. Proposer des stratégies basées sur les insights pour augmenter les ventes. </br>
            <span> - Outils et Méthodes :</span> SQL pour l'extraction de données, Python pour l'analyse statistique avancée, Power BI pour la création de tableaux de bord interactifs.
            `}
          src={projectOne}
        />
        <ProjectsCard
          title="Prévision de la demande avec optimisation des stocks"
          des={`Utiliser des modèles prédictifs pour anticiper la demande future des produits tout en optimisant les niveaux de stock pour éviter les ruptures ou les surstocks. Intégrer des données externes comme la météo ou les tendances du marché.</br>
            <span> - Outils et Méthodes : <span>Modèles de séries temporelles, modèles de régression avancés, techniques d'optimisation, utilisation de bibliothèques de machine learning comme scikit-learn ou TensorFlow.
            `}
          src={projectTwo}
        />
        <ProjectsCard
          title="Segmentation et analyse de la clientèle"
          des={`Segmenter la base de clients en groupes homogènes en fonction de comportements d'achat similaires. Développer des stratégies de marketing personnalisées pour chaque segment afin d'augmenter la rétention et la fidélité.</br> <span> - Outils et Méthodes :</span> Techniques avancées de clustering (k-means, DBSCAN), analyse RFM (Récence, Fréquence, Montant), visualisation avancée des données pour l'interprétation des segments.`}
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects