import { motion } from "framer-motion";
import { useState } from "react";
import ConfettiEffect from "../components/ConfettiEffect";
function Hero() {
  // const [message, setMessage] = useState("Wishing you the best birthday ever");
  const [showConfetti, setShowConfetti] = useState(false);

  const [index, setIndex] = useState(0);

  const messages = [
    "Wishing you the best birthday ever",
    "I hope your day is full of all the things that make you happy",
    "I'm so glad you were born... because otherwise, who would I annoy",
    "Congrats on surviving another year of your own life choices!",
    "Statistics show that those who have the most birthdays live the longest. Keep up the good work!",
    "Happy 29th! You are now old enough to know better, but still young enough to blame it on your 20s",
    "This is the last one.. I'd make more jokes but at your age, I'm pretty sure you'd forget it anyways"
  ];

  function handleClick() {
    setIndex((prev) => (prev + 1) % messages.length);
    setShowConfetti(false);

    setTimeout(() => {
      setShowConfetti(true);
    }, 50);
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
          {messages[index]}
        </motion.p>
        <motion.button
          onClick={handleClick}
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
