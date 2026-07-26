import Container from "../../components/layout/Container";
import GlassCard from "../../components/ui/GlassCard";
import AboutVisual from "./aboutvisual";
import AboutScene from "../../components/three/aboutscene";
import { FaGraduationCap, FaCode, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-28"
    >
      <Container>

        <div className="text-center mb-16">

          <p className="text-blue-400 font-medium">
            Get To Know Me
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-bold">
            About Me
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <AboutScene />
          </div>

          {/* Right Side */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
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

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <GlassCard className="p-8">

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

          <GlassCard className="p-8">

            <FaCode className="text-4xl text-cyan-400 mb-5" />

            <h3 className="text-xl font-semibold mb-3">
              Tech Stack
            </h3>

            <p className="text-slate-400">
              ASP.NET Core, React, SQL Server,
              MongoDB, Azure
            </p>

          </GlassCard>

          <GlassCard className="p-8">

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