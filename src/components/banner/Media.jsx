import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPython } from "react-icons/fa";
import { IoLogoTableau } from "react-icons/io5";
import { DiSpark } from "react-icons/di";
import { GrHadoop } from "react-icons/gr";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
          TROUVEZ-MOI DANS
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
                <FaFacebookF />
            </span>
           
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/ange-djahan-810396162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
               <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
          MEILLEURE COMPÉTENCE SUR
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
            <IoLogoTableau />
            </span>
            <span className="bannerIcon">
            <DiSpark className=' text-6xl' />
            </span>
            <span className="bannerIcon">
            <GrHadoop className=' text-3xl' />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media