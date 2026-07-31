import Container from "../../components/layout/Container";
import GlassCard from "../../components/ui/GlassCard";
import { lazy, Suspense } from "react";

const AboutScene = lazy(() => import("../../components/three/AboutScene"));

import { FaGraduationCap, FaCode, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28"
    >
      <Container>

        <div className="mb-12 text-center md:mb-16">

          <p className="text-blue-400 font-medium">
            Get To Know Me
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            About Me
          </h2>

        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Side */}

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <Suspense
              fallback={
                <div className="h-[650px] w-full animate-pulse rounded-3xl bg-slate-900/30" />
              }
            >
              <AboutScene />
            </Suspense>
            
          </div>

          {/* Right Side */}

          <div>

            <h3 className="mb-6 text-2xl font-bold leading-tight sm:text-3xl">
              Passionate About Building Software That Matters
            </h3>

            <p className="text-slate-400 leading-8">
              I'm Ahmed Hassan, a Software Engineering undergraduate with a
              strong passion for backend development and modern web
              technologies. I enjoy building scalable applications using
              ASP.NET Core, REST APIs, SQL Server, MongoDB, and React.js while
              continuously expanding my knowledge in cloud technologies and the
              MERN stack.
            </p>

            <p className="text-slate-400 leading-8 mt-6">
              Beyond coding, I enjoy learning new technologies, solving
              challenging problems, collaborating on projects, and constantly
              improving my development workflow.
            </p>

          </div>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">

          <GlassCard className="p-6 md:p-8">

            <FaGraduationCap className="text-4xl text-blue-400 mb-5" />

            <h3 className="text-xl font-semibold mb-3">
              Education
            </h3>

            <p className="text-slate-400">
              Bachelor's in Software Engineering
            </p>

            <p className="text-slate-500 mt-2">
              Expected Graduation 2027
            </p>

          </GlassCard>

          <GlassCard className="p-6 md:p-8">

            <FaCode className="text-4xl text-cyan-400 mb-5" />

            <h3 className="text-xl font-semibold mb-3">
              Tech Stack
            </h3>

            <p className="text-slate-400">
              ASP.NET Core, React, SQL Server,
              MongoDB, Azure
            </p>

          </GlassCard>

          <GlassCard className="p-6 md:p-8">

            <FaBullseye className="text-4xl text-purple-400 mb-5" />

            <h3 className="text-xl font-semibold mb-3">
              Current Focus
            </h3>

            <p className="text-slate-400">
              MERN Stack, Cloud Deployment,
              System Design
            </p>

          </GlassCard>

        </div>

      </Container>
    </section>
  );
};

export default About;
