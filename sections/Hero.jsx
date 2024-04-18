"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { ParticlesContainer } from "../components";

const Hero = () => (
  <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth}  mx-auto flex flex-col `}
    >
      <div className="w-full  relative ">
        <ParticlesContainer />

        <div className="flex justify-center items-center text-start flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Kempetro Engenharia
          </motion.h1>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient  rounded-tl-[140px] z-[0] -top-[30px]" />
          <img
            src="/cover.png"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-bl-[30px] rounded-tl-[140px] z-10 relative -top-[30px]"
          />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
