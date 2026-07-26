import GlassCard from "../ui/GlassCard";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const FeaturedProject = ({ project }) => {
  return (
    <GlassCard className="overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="min-h-[320px] bg-slate-800 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10">
          <span className="text-slate-500">Featured Project Screenshot</span>
        </div>

        <div className="p-8">
          <p className="text-blue-400 font-medium mb-3">Featured Project</p>

          <h3 className="text-3xl font-bold">{project.title}</h3>

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

          <div className="flex gap-6 mt-8">
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