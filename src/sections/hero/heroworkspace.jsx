import { motion } from "framer-motion";
import {
  FaReact,
  FaGithub,
} from "react-icons/fa";

import {
  SiDotnet,
  SiMongodb,
} from "react-icons/si";

import {
  VscAzure,
} from "react-icons/vsc";

const floatingIcons = [
  {
    Icon: FaReact,
    className: "top-8 left-10 text-cyan-400",
  },
  {
    Icon: SiDotnet,
    className: "top-12 right-10 text-purple-400",
  },
  {
    Icon: VscAzure,
    className: "bottom-16 left-4 text-blue-400",
  },
  {
    Icon: SiMongodb,
    className: "top-1/2 -right-2 text-green-500",
  },
  {
    Icon: FaGithub,
    className: "bottom-6 right-20 text-white",
  },
];

const code = [
  {
    color: "text-purple-400",
    text: "using Microsoft.AspNetCore.Builder;",
  },
  {
    color: "text-cyan-400",
    text: "var builder = WebApplication.CreateBuilder(args);",
  },
  {
    color: "text-green-400",
    text: 'builder.Services.AddAuthentication("JWT");',
  },
  {
    color: "text-orange-400",
    text: "app.MapControllers();",
  },
  {
    color: "text-blue-300",
    text: "app.Run();",
  },
];

const HeroWorkspace = () => {
  return (

    <div className="pointer-events-none relative hidden lg:flex h-[600px] items-center justify-center">

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, className }, index) => (
        <motion.div
          key={index}
          className={`absolute text-5xl ${className}`}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Glass Code Editor */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{
          rotateX: 4,
          rotateY: -4,
          scale: 1.02,
        }}
        className="w-[500px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl"
      >
        {/* Top Bar */}
        <div className="flex items-center gap-2 border-b border-white/10 px-6 py-4">

          <div className="h-3 w-3 rounded-full bg-red-500" />

          <div className="h-3 w-3 rounded-full bg-yellow-500" />

          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-4 text-sm text-slate-400">
            EventManagementSystem
          </span>

        </div>

        {/* Fake Code */}
        <div className="space-y-4 p-8 font-mono text-sm">

          {code.map((line, index) => (
            <motion.p
              key={index}
              className={line.color}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.2,
              }}
            >
              {line.text}
            </motion.p>
          ))}

        </div>
      </motion.div>
    </div>
  );
};

export default HeroWorkspace;