import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Loader from "./components/Loader";

import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Journey from "./sections/Journey/Journey";
import Achievements from "./sections/achievements/achievements";
import BeyondCode from "./sections/beyondcode/beyondcode";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

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