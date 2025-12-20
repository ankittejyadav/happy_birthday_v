import { useState } from "react";
import { motion } from "framer-motion";

function EasterEgg() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="easter-egg-trigger" onClick={() => setOpen(true)}>
        V
      </div>

      {open && (
        <motion.div
          className="easter-egg-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="easter-egg-card"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <p>
              Hey you found this easter egg!
              <br />
              <br />
              Hope you are having an amazing day V
              <br />
              Thanks for being an amazing friend as always
            </p>
            <button onClick={() => setOpen(false)}> Close</button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default EasterEgg;
