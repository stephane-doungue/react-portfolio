import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import ResumeCardLeft from './ResumeCardLeft';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Formations</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCardLeft
            title="Cycle d'ingénieur du numérique"
            subTitle="ESIEA, Paris (2023 - 2024)"
            result="3.90/4"
            des="En tant qu'étudiant au cycle d'ingénieur du numérique à l'ESIEA, j'ai acquis une formation rigoureuse et complète, me préparant à travailler dans divers secteurs de l'économie et de la culture. Cette formation m'a permis de développer des compétences techniques avancées ainsi que des aptitudes en gestion de projet, analyse de données et résolution de problèmes complexes.."
          />
          <ResumeCardLeft
            title="Licence de Physique"
            subTitle="Université de Paris (2017 - 2020)"
            result="4.75/5"
            des="Pendant ma licence en Physique à l'Université de Paris, j'ai suivi un programme d'études enrichissant qui m'a permis d'acquérir une compréhension approfondie des principes fondamentaux de la physique ainsi que des compétences analytiques et de résolution de problèmes.."
          />
          <ResumeCardLeft
            title="Première Année Commune aux Etudes de Médecine."
            subTitle="Université de Paris (2016 - 2017)"
            result="4.00/5"
            des="Pendant ma première année commune aux études de médecine à l'Université de Paris, j'ai suivi un programme académique intense et exigeant qui m'a permis de développer une compréhension approfondie des sciences médicales et des compétences nécessaires pour poursuivre une carrière dans le domaine médical.."
          />
          <ResumeCardLeft
            title="Baccalauréat Scientifique, mention Physique-Chimie."
            subTitle="Lycée Henri Bergson, Paris (2015 - 2016)"
            result="4.00/5"
            des="Mon baccalauréat scientifique avec mention Physique-Chimie au Lycée Henri Bergson à Paris a posé les bases solides de mes études et de ma carrière académique. Ce programme m'a offert une formation complète dans les sciences fondamentales et m'a préparé à poursuivre des études supérieures dans des domaines scientifiques."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Excel Basics for Data Analysis"
            subTitle="IBM - (2023 - 2024)"
            result="USA"
            link="https://coursera.org/share/10ad7492cd0a89af68ab18a6c417a859"  
         />
          <ResumeCard
            title="Data Science Methodology"
            subTitle="IBM - (2023 - 2024)"
            result="USA"
            link="https://coursera.org/share/2c2baf7bce3432fb1e0447aca1b395d9"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education