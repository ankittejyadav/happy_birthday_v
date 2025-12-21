import { motion } from "framer-motion";

const reasons = [
  {
    title: "Chaos",
    description: "You are a beautiful disaster",
  },
  {
    title: "Loud",
    description: "But in a way that I don't hate",
  },
  {
    title: "Visionary",
    description: "You have excellent taste in friends (me)",
  },
  {
    title: "Functional",
    description: "You're surprisingly good at pretending to be an adult",
  },
  {
    title: "Saint",
    description: "You haven't blocked my number yet",
  },
  {
    title: "Expensive",
    description: "You're high maintenance, but worth it",
  },
  {
    title: "Wiki",
    description: "Full of completely useless information",
  },
  {
    title: "Trouble",
    description: "The kind I like getting into",
  },
  {
    title: "Vintage",
    description: "Aging like a fine, stinky cheese",
  },
  {
    title: "Brave",
    description: "You've seen me eat and stayed",
  },
  {
    title: "Genius",
    description: "Even when you do really dumb things",
  },
  {
    title: "Snack",
    description: "But like, the expensive organic kind",
  },
  {
    title: "Preserved",
    description: "Whatever chemicals you're using are working",
  },
  {
    title: "Responsible-ish",
    description:
      "You can keep a plant alive, but I wouldn't trust you with a dog yet",
  },
  {
    title: "Limited-Edition",
    description: "One of you is definitely enough",
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
        Things that make you amazing
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
