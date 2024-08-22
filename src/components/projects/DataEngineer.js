import React from 'react'
import { project4, project5, project6 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const DataEngineer = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-black"
    >
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Construction d'un pipeline de données ETL"
          des={`Concevoir et implémenter un pipeline ETL (Extract, Transform, Load) pour extraire des données de différentes sources, les transformer selon les besoins de l'entreprise, et les charger dans une base de données centrale. </br>
            <span> - Outils et Méthodes :</span>Pour l'extraction nous avons utiliser Talend, la Transformation c'est fait avec Python (pandas) et en fin le chargement avec  PostgreSQL.
            `}
          src={project4}
        />
        <ProjectsCard
          title="Déploiement d'un entrepôt de données"
          des={`Mettre en place un entrepôt de données pour centraliser et organiser les données de l'entreprise, facilitant ainsi l'accès et l'analyse..</br>
            <span> - Outils et Méthodes : <span> la Base de données c'est fait avec Amazon Redshift, pour la Modélisation nous avons opté pour le Modèle en étoile et en fin l'orchestration avec Apache Airflow..
            `}
          src={project5}
        />
        <ProjectsCard
          title="Implémentation de systèmes de traitement des données en temps réel"
          des={`Concevoir un système capable de traiter et d'analyser les données en temps réel pour des applications telles que la surveillance des transactions ou l'analyse des flux de clics.</br>
            <span> - Méthodes et outils : </span> nous avons éffectuée le streaming de données avec Apache Kafka`}
          src={project6}
        />
      </div>
    </section>
  );
}

export default DataEngineer