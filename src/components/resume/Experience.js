import React from "react";
import {motion} from "framer-motion"
import ResumeCardLeft from "./ResumeCardLeft";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-4xl font-bold">Expérience de travail dans le big data</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCardLeft
            title="Data Analyst, Alternance"
            subTitle="Como Mercedes - (avr. 2024 - sept 2024)"
            result="Paris"
            des={`<ul>
                <li> - Création des bases de données, assurer une mise à jour et veiller à leur bon fonctionnement ;</li>
                <li> - Analyse et l’exploration des données provenant de différentes sources.</li>
                <li> - Création et au maintien d’outils de pilotage.</li>
                <li> - Mettre en forme les données afin de faciliter la prise de décision</li>
                <li> - Création des tableaux de bord Concevoir et développer des tableaux de bord interactifs et visuellement attrayants en utilisant Power BI.</li>
              </ul>`} />
          <ResumeCardLeft
            title="Data engineer, alternance"
            subTitle="PWA - (nov 2022 - mars 2024)"
            result="Paris"
            des={`
              <ul>
                <li> - Participer à la conception et à la mise en œuvre d'architectures de données robustes et évolutives.</li>
                <li> - Travailler sur l'optimisation des performances des bases de données, des requêtes et des 
pipelines afin de garantir une récupération rapide et efficace des données.</li>
                <li> - Extraction et transformation des données: Utiliser Power BI pour extraire des données à partir de 
différentes sources, les nettoyer et les transformer pour les rendre utilisables dans le cadre de 
l'analyse</li>
              </ul>
              `}
          />
          <ResumeCardLeft
            title="Stage de licence"
            subTitle="Laboratoire d'Astrophysique - (mai 2019 - juil 2019)"
            result="Université de Paris"
            des={`
              <ul>
               <li> - Apprendre les éléments de base d'analyse de données du télescope de Fermi.</li>
               <li> - Utiliser python pour établir le catalogue des sources des rayons gamma et étudier la nature de ces sources.</li>
              </ul>
              `}
          />
          
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2022</p>
          <h2 className="text-4xl font-bold">Expérience de travail supplémentaires</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCardLeft
            title="Chargé d'assistance, service santé"
            subTitle="Axa Partners (mai 2022 - août 2022)"
            result="Châtillon"
            des={`
              <ul>
                <li> - Fournir des informations sur les services de santé disponibles.</li>
                <li> - Créer et maintenir des dossiers clients détaillés, incluant l'historique médical et les interactions passées.</li>
               </ul>
              `}
          />
          <ResumeCardLeft
            title="Soutien scolaire"
            subTitle="Meet in class (sept. 2017 - août 2020)"
            result="Paris"
            des={`
              <ul>
               <li> - Dispenser des cours particuliers ou en petits groupes aux élèves, souvent à domicile ou en ligne.</li>
               <li> - Adapter les méthodes d'enseignement aux besoins spécifiques de chaque élève et à leurs objectifs académiques.</li>
              </ul>
              `}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
