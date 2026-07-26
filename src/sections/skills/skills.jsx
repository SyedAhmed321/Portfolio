import Container from "../../components/layout/Container";
import GlassCard from "../../components/ui/GlassCard";
import { skillCategories } from "../../data/skills";
import FadeInSection from "../../components/ui/FadeInSection";

const Skills = () => {
  return (
    <FadeInSection>
    <section id="skills" className="py-28">
      <Container>

        <div className="text-center mb-16">
          <p className="text-blue-400 font-medium">
            What I Work With
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Technical Skills
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <GlassCard
              key={category.title}
              className="p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">
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