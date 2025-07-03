"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center "
    >
      <div className="container mx-auto">
        <div className="flex justify-center items-center">contact</div>
      </div>
    </motion.section>
  );
};

export default Contact;
