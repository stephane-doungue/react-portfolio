import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Data Analyst.", "Data Engineer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">BIENVENU DANS MON MONDE</h4>
        <h1 className="text-6xl font-bold text-white">
          Bonjour, je suis <span className="text-designColor capitalize">Ange Djahan
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
         <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Etudiante en 5 ème année à l'Esiea, école d'ingénieur du numérique.<br></br>
        Passionnée par les sciences et en particulier l'intelligence artificielle et la big data
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner