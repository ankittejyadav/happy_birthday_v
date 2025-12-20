import { motion } from "framer-motion";
import { useState } from "react";
import ConfettiEffect from "../components/ConfettiEffect";
function Hero() {
  const [message, setMessage] = useState("Wishing you the best birthday ever");
  const [showConfetti, setShowConfetti] = useState(false);

  function revealMessage() {
    setMessage("Enjoy your day and the upcoming year!");
    setShowConfetti(true);
  }

  return (
    <>
      <ConfettiEffect active={showConfetti} />
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Happy Birthday Vagisha <span>🎂</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {message}
        </motion.p>
        <motion.button
          onClick={revealMessage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Best Wishes
        </motion.button>
      </motion.section>
    </>
  );
}

export default Hero;
