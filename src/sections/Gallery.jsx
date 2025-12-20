import { motion } from "framer-motion";
import react from "../assets/react.svg";
const highlights = [
  {
    title: "cr",
    text: "sdfdsf",
    image: react,
  },
  {
    title: "cr",
    text: "sdfdsf",
    image: react,
  },
  {
    title: "cr",
    text: "sdfdsf",
    image: react,
  },
];

function Gallery() {
  return (
    <section className="gallery">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Little Highlights
      </motion.h2>

      <div className="gallery-grid">
        {highlights.map((item, index) => (
          <motion.div
            className="gallery-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
          <img src={item.image} alt={item.title} loading="lazy" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
