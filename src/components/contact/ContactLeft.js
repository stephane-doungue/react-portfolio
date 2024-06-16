import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ange Djahan</h3>
        <p className="text-lg font-normal text-gray-400">
          Data Analyst
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Je suis toujours à la recherche de nouvelles opportunités et collaborations passionnantes. N'hésitez pas à me contacter pour discuter de vos projets, poser des questions ou simplement échanger des idées. Je serai ravi de vous répondre dans les plus brefs délais.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Téléphone: <span className="text-lightText">0627592287</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">angejessica13@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4"> TROUVEZ-MOI DANS</h2>
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
    </div>
  );
}

export default ContactLeft