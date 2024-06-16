import React, {  useState } from 'react'
import Title from '../layouts/Title';
import DataAnalyst from './DataAnalyst';
import DataEngineer from './DataEngineer';

const Navprojet = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISITEZ MON PORTFOLIO" des="Mes Projets" />
      </div>
      <div className='ml-[35%] justify-center items-center'>
        <ul className="w-full justify-center items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false)     
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Data Analyst
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) 
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
         Data Engineer
          </li>
        </ul>
      </div>
      {educationData && <DataAnalyst/>}
      {skillData && <DataEngineer/>}
 
    </section>
  );
}

export default Navprojet