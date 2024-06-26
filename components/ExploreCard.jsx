"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  description,
  index,
  active,
  handleClick,
}) => {
  const transition = {
    delay: active === id ? 0.5 : 0, // Adicione um atraso se o card estiver expandido
    duration: 0.5, // Duração da transição
  };
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[1.2s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <motion.div
          initial={{ opacity: 0 }} // Opacidade inicial
          animate={{ opacity: 1 }} // Opacidade final
          transition={transition}
          className={`absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] xl:h-[450px] xl:overflow-hidden  h-[200px] overflow-y-scroll `}
        >
          <div className="flex flex-row gap-5 max-h-[600px] sm:max-h-[200px] ">
            <div
              className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
            >
              <img
                src="/headset.svg"
                alt="headset"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <h2 className=" font-semibold sm:text-[32px] text-[24px] pt-1  text-white">
              {title}
            </h2>
          </div>

          <motion.p className="font-normal text-[16px] leading-[30.16px] mt-[26px]  text-white mb-[30px]  ">
            {description}
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
