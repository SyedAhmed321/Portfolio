import Container from "../../components/layout/Container";
import GlassCard from "../../components/ui/GlassCard";
import { skillCategories } from "../../data/skills";
import FadeInSection from "../../components/ui/FadeInSection";

const Skills = () => {
  return (
    <FadeInSection>
    <section id="skills" className="py-20 md:py-28">
      <Container>

        <div className="mb-12 text-center md:mb-16">
          <p className="text-blue-400 font-medium">
            What I Work With
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            Technical Skills
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">

          {skillCategories.map((category) => (
            <GlassCard
              key={category.title}
              className="p-6 md:p-8"
            >
              <h3 className="mb-6 text-xl font-semibold sm:text-2xl">
                {category.title}
              </h3>

              <div className="space-y-4">

                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4"
                    >
                      <Icon className="text-2xl text-blue-400" />

                      <span className="text-slate-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}

              </div>
            </GlassCard>
          ))}

        </div>

      </Container>
    </section>
    </FadeInSection>
  );
};

export default Skills;
