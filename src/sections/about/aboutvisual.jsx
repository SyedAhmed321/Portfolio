import { motion } from "framer-motion";

import {
  FaReact,
  FaGithub,
  FaCamera,
  FaFootballBall,
} from "react-icons/fa";

import {
  SiDotnet,
  SiMongodb,
} from "react-icons/si";

import {
  VscAzure,
} from "react-icons/vsc";

const AboutVisual = () => {
  return (
    <div className="relative flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative h-[420px] w-full max-w-[420px]"
      >
        <div className="absolute inset-0 rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-purple-500/15" />

          <div className="absolute top-6 left-6 right-6 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"
            />

            <div className="absolute flex flex-col items-center">
              <div className="h-28 w-28 rounded-full border border-blue-400/20 bg-blue-500/10 backdrop-blur-md flex items-center justify-center shadow-lg">
                <span className="text-sm text-slate-300 text-center px-4">
                  3D Developer
                  <br />
                  Workspace
                </span>
              </div>

              <div className="mt-6 h-20 w-56 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl" />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-8 text-cyan-400 text-4xl"
          >
            <FaReact />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 right-8 text-purple-400 text-4xl"
          >
            <SiDotnet />
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-24 left-8 text-green-500 text-4xl"
          >
            <SiMongodb />
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 text-blue-400 text-4xl"
          >
            <VscAzure />
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-4 text-white text-3xl"
          >
            <FaGithub />
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-orange-300 text-3xl"
          >
            <FaCamera />
          </motion.div>

          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-6 text-blue-300 text-3xl"
          >
            <FaFootballBall />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutVisual;