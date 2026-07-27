import GlassCard from "../../components/ui/GlassCard";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <GlassCard className="overflow-hidden group">

      <div className="flex h-48 items-center justify-center border-b border-white/10 bg-slate-800 px-6 text-center sm:h-56">
        <span className="text-slate-500">Project Screenshot</span>
      </div>

      <div className="p-5 sm:p-6">

        <h3 className="text-xl font-bold leading-tight sm:text-2xl">
          {project.title}
        </h3>

        <p className="text-slate-400 mt-4 leading-7">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          {project.tech.map((item) => (

            <span
              key={item}
              className="
              rounded-full
              bg-blue-500/10
              px-3
              py-1
              text-sm
              text-blue-300
              "
            >
              {item}
            </span>

          ))}

        </div>

        <div className="mt-8 flex flex-wrap gap-6">

          <a
            href={project.github}
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <FaGithub />

            GitHub
          </a>

          <a
            href={project.live}
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <FaExternalLinkAlt />

            Live Demo
          </a>

        </div>

      </div>

    </GlassCard>
  );
};

export default ProjectCard;
