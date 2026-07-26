import Container from "../../components/layout/Container";
import FadeInSection from "../../components/ui/FadeInSection";
import FeaturedProject from "../../components/common/FeaturedProject";
import ProjectCard from "../../components/common/ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-28">
      <Container>
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium">My Work</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Featured Projects
            </h2>
          </div>

          {featuredProject && (
            <div className="mb-10">
              <FeaturedProject project={featuredProject} />
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
};

export default Projects;