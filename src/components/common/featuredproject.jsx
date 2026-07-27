import GlassCard from "../ui/GlassCard";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const FeaturedProject = ({ project }) => {
  return (
    <GlassCard className="overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="flex min-h-56 items-center justify-center border-b border-white/10 bg-slate-800 px-6 text-center sm:min-h-[320px] lg:border-b-0 lg:border-r">
          <span className="text-slate-500">Featured Project Screenshot</span>
        </div>

        <div className="p-6 md:p-8">
          <p className="text-blue-400 font-medium mb-3">Featured Project</p>

          <h3 className="text-2xl font-bold leading-tight sm:text-3xl">{project.title}</h3>

          <p className="mt-4 text-slate-400 leading-7">
            {project.description}
          </p>

          {project.features && (
            <ul className="mt-6 space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="text-slate-300">
                  • {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <a
              href={project.github}
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={project.live}
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default FeaturedProject;
