import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ loading }) {
  const messages = [
    "Building your experience...",
    "Loading featured projects...",
    "Almost ready..."
  ];

  const [messageIndex, setMessageIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const expandTimer = setTimeout(() => {
      setExpanded(true);
    }, 500);

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev >= messages.length - 1) return prev;
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearTimeout(expandTimer);
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020617]"
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
        >
          {/* Aurora Background */}

          <motion.div
            animate={{
              x: [-120, 120, -120],
              y: [-60, 40, -60],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[850px] w-[850px] rounded-full bg-blue-500/15 blur-[180px]"
          />

          <motion.div
            animate={{
              x: [120, -100, 120],
              y: [60, -40, 60],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[700px] w-[700px] rounded-full bg-violet-500/10 blur-[200px]"
          />

          {/* Glass Card */}

          <motion.div
            initial={{
              width: 88,
              height: 36,
              borderRadius: 999,
            }}
            animate={{
              width: expanded ? 400 : 88,
              height: expanded ? 250 : 36,
              borderRadius: expanded ? 34 : 999,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            className="
              relative
              overflow-hidden
              border
              border-white/10
              bg-white/[0.06]
              backdrop-blur-3xl
              shadow-[0_20px_80px_rgba(0,0,0,.45)]
            "
          >
            {/* Glass Reflection */}

            <motion.div
              animate={{
                x: ["-150%", "250%"],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 top-0 h-full w-24 -skew-x-12 bg-white/10 blur-xl"
            />

            {/* Content */}

            {expanded && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25,
                }}
                className="relative z-10 flex h-full flex-col items-center justify-center px-10"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/5 text-2xl font-semibold text-white"
                >
                  AH
                </motion.div>

                <h1 className="text-[32px] font-medium tracking-tight text-white">
                  Ahmed Hassan
                </h1>

                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-slate-400">
                  Software Engineer
                </p>

                <motion.p
                  key={messageIndex}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 0.9,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="mt-8 h-5 text-sm text-slate-300"
                >
                  {messages[messageIndex]}
                </motion.p>

                {/* Progress */}

                <div className="relative mt-6 h-[4px] w-72 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "100%",
                    }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    className="relative h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300"
                  >
                    <motion.div
                      animate={{
                        x: ["-100%", "250%"],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute top-0 h-full w-10 bg-white/80 blur-sm"
                    />
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Dynamic Island */}

            {!expanded && (
              <div className="flex h-full w-full items-center justify-center">
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="text-sm font-semibold tracking-[0.3em] text-white"
                >
                  AH
                </motion.span>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}