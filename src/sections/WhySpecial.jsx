import { motion } from "framer-motion";

const reasons = [
  {
    title: "Limited-Edition",
    description: "One of you is definitely enough",
  },
  {
    title: "Chaos",
    description: "You are a beautiful disaster",
  },
  {
    title: "Loud",
    description: "But in a way that I don't hate",
  },
  {
    title: "Trouble",
    description: "The kind I like getting into",
  },
  {
    title: "Saint",
    description: "You haven't blocked my number yet",
  },
  {
    title: "Visionary",
    description: "You have excellent taste in friends (me)",
  },
  {
    title: "Expensive",
    description: "You're high maintenance, but worth it",
  },

  {
    title: "Brave",
    description: "You've seen me eat and stayed",
  },
  {
    title: "Functional",
    description: "You're surprisingly good at pretending to be an adult",
  },
  {
    title: "Wiki",
    description: "Full of completely useless information",
  },
  {
    title: "Genius",
    description: "Even when you do really dumb things",
  },
  {
    title: "Alive",
    description: "Good job not dying today",
  },
  {
    title: "Snack",
    description: "But like, the expensive organic kind",
  },
  {
    title: "Vintage",
    description: "Aging like a fine, stinky cheese",
  },
];

function WhySpecial() {
  return (
    <section className="why-special">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        14 Things that make you amazing
      </motion.h2>
      <div className="reasons">
        {reasons.map((reason, index) => (
          <motion.div
            className="reason-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default WhySpecial;
