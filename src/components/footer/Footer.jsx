import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScreenContext } from "../../contexts/screenContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import CV from "/CV_Benjamin_Boufflers.pdf"

function Footer() {
  const [images, setImages] = useState([]);
  const { width } = useScreenContext();

  useEffect(() => {
    const importAllImages = async () => {
      const imageModules = import.meta.glob("@/assets/clouds/*.png");
      const imagesArray = await Promise.all(
        Object.values(imageModules).map((module) => module())
      );
      setImages(imagesArray.map((module) => module.default));
    };
    importAllImages();
  }, []);

  const size = 256; // Taille du div parent
  const visualSize = 8; // Taille du visuel qui parcourt la bordure

  // Points de contrôle pour chaque étape de l'animation
  const path = {
    topLeft: { x: 0, y: 0 },
    topRight: { x: size - visualSize, y: 0 },
    bottomRight: { x: size - visualSize, y: size - visualSize },
    bottomLeft: { x: 0, y: size - visualSize },
  };

  return (
    <motion.section className="relative backdrop-blur-sm p-4 sm:px-10 w-full flex flex-col justify-end overflow-x-clip border-t-2 border-fuchsia-400 bg-fuchsia-400/10">
      <motion.div
        animate={{ x: [-80, width], rotateX: 180 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "linear",
        }}
        className="absolute h-0.5 -top-0.5 bg-gradient-to-l from-fuchsia-700 to-fuchsia-200 w-20 rounded-xl"
      ></motion.div>
      <div className="flex max-sm:flex-col text-fuchsia-300 gap-4 text-lg w-full justify-around items-center">
        <div className="flex gap-2">
          <a href="https://www.linkedin.com/in/benjamin-boufflers-8bb688324/">
            <FontAwesomeIcon size="2x" icon={faLinkedin} />
          </a>
          <a href="https://github.com/Benjaminboufflers" target="_blank">
            <FontAwesomeIcon size="2x" icon={faGithub} />
          </a>
          <a
            href={CV}
            download={CV}
            className="relative cursor-pointer"
          >
            <FontAwesomeIcon size="2x" icon={faFile} className="" />
            <p className="text-fuchsia-950 text-xl font-semibold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              CV
            </p>
          </a>
        </div>

        <p className="">Copyrigth © 2024 Ben</p>
        <p className="">Designed by Ben</p>
      </div>
    </motion.section>
  );
}

export default Footer;
