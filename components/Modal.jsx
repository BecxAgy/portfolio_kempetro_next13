import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ id, imgUrl, title, description, closeModal }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        animate={{ scale: 1.3 }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white"
      >
        <motion.div className="bg-primary-black md:w-6/12 w-10/12 max-w-screen-md rounded-lg p-4 py-8 m-4 flex flex-col relative shadow-2xl">
          <motion.a
            onClick={() => closeModal()}
            className="absolute text-2xl right-5 hover:cursor-pointer"
          >
            x
          </motion.a>
          <motion.h1 className="text-3xl pb-8 text-center font-bold">
            {title}
          </motion.h1>
          <motion.div className="bg-purple-800 w-6/12 h-1 mx-auto mb-8"></motion.div>

          <motion.p className="p-4">{description}</motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
