import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Loader from "./components/Loader.jsx";

import Navbar from "./components/layout/Navbar";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Journey from "./sections/journey/Journey";
import Achievements from "./sections/achievements/Achievements";
import BeyondCode from "./sections/beyondcode/BeyondCode";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Achievements />
          <BeyondCode />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;