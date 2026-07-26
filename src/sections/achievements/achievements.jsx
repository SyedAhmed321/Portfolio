import Container from "../../components/layout/Container";
import FadeInSection from "../../components/ui/FadeInSection";
import GlassCard from "../../components/ui/GlassCard";
import {
  FaTrophy,
  FaCode,
  FaRunning,
  FaMedal,
} from "react-icons/fa";

const achievements = [
  {
    title: "Runner-Up",
    subtitle: "Inter-Department University Cricket Tournament",
    icon: FaMedal,
  },
  {
    title: "Code in the Dark",
    subtitle: "Participant",
    icon: FaCode,
  },
  {
    title: "Speed Programming",
    subtitle: "Participant",
    icon: FaRunning,
  },
  {
    title: "Competitive Builder",
    subtitle: "Projects, problem-solving, and continuous learning",
    icon: FaTrophy,
  },
];

const Achievements = () => {
  return (
    <section className="py-28">
      <Container>
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium">Highlights</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Achievements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {achievements.map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard key={item.title} className="p-8 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                    <Icon className="text-2xl text-blue-400" />
                  </div>

                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-slate-400 leading-7">
                    {item.subtitle}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
};

export default Achievements;