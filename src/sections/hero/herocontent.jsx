import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Button from "../../components/ui/Button";
import HeroStats from "./HeroStats";

const HeroContent = () => {
    return (
        <motion.div
            className="relative z-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <p className="mb-3 text-blue-400 font-medium">
                Hello, I'm
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Ahmed Hassan
                </span>
            </h1>

            <TypeAnimation
                sequence={[
                    "Software Engineer",
                    2000,
                    "Backend Developer",
                    2000,
                    "ASP.NET Core Developer",
                    2000,
                    "React Developer",
                    2000,
                ]}
                wrapper="h2"
                speed={40}
                repeat={Infinity}
                className="mt-5 block min-h-16 text-xl font-semibold text-slate-300 sm:min-h-10 sm:text-2xl md:text-3xl"
            />

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:mt-8 sm:text-lg">
                I build scalable backend systems, modern web applications,
                and seamless digital experiences using{" "}
                <span className="text-white font-medium">
                    ASP.NET Core
                </span>,{" "}
                <span className="text-white font-medium">
                    React
                </span>,{" "}
                <span className="text-white font-medium">
                    SQL Server
                </span>, and cloud technologies.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button href="#projects">
                    Explore My Work →
                </Button>

                <Button
                    href="#contact"
                    variant="outline"
                >
                    Contact Me
                </Button>
            </div>

            <HeroStats />
        </motion.div>
    );
};

export default HeroContent;
