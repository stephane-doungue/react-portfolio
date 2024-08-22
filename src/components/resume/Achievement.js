import React from "react";
import { motion } from "framer-motion";
import ResumeCardLeft from "./ResumeCardLeft";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Compétences</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCardLeft
            title="Visualisation de données."
            result="Success"
            des={`
              <ul>
                <li> - Maîtrise d'outils de visualisation : Tableau, Power BI, D3.js, Matplotlib, etc.</li>
                <li> - Capacité à créer des rapports et des tableaux de bord clairs et informatifs.</li>
              </ul>
              `}
          />
          <ResumeCardLeft
            title="Analyse de données."
            result="Success"
            des={`
              <ul>
                <li> - Compétences en statistiques : compréhension des concepts statistiques et des méthodes d'analyse des données.</li>
                <li> - Compétences en programmation : maîtrise de langages comme Python, R ou SQL pour manipuler et analyser des données.</li>
              </ul>
              `}
          />
          <ResumeCardLeft
            title="Manipulation de données."
           
            result="Success"
            des={`
              <ul>
                <li> - Utilisation d'outils de gestion de bases de données : SQL, NoSQL, etc.</li>
                <li> - Compétence en manipulation de grandes bases de données et en extraction de données.</li>
              </ul>
              `}
          />
        </div>
      </div>
      <div>
        <div className="py-20 font-titleFont flex flex-col gap-4">
         
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCardLeft
            title="Connaissance des outils analytiques :."
           
            result="Success"
            des={`
              <ul>
               <li> - Utilisation de logiciels de statistiques : SAS, SPSS, etc.</li>
               <li> - Connaissance des plateformes de cloud computing : AWS, Google Cloud, Azure, etc.</li>
              </ul>
              `}
          />
          <ResumeCardLeft
            title="Connaissances en apprentissage automatique (machine learning)."
         
            result="Success"
            des={`
              <ul>
               <li> - Compréhension des concepts et des algorithmes de machine learning.</li>
               <li> - Expérience avec des bibliothèques de machine learning comme scikit-learn, TensorFlow, etc.</li>
              </ul>
              `}
           />
          <ResumeCardLeft
            title="Compétences en business intelligence :"
          
            result="Success"
            des={`
              <ul>
               <li> - Compréhension des indicateurs de performance clés (KPI) et de la manière dont les données peuvent influencer les décisions d'affaires.</li>
               <li> - Capacité à interpréter les besoins de l'entreprise et à proposer des solutions basées sur les données.</li>
              </ul>
              `}
           />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
