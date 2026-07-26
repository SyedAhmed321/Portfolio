import Container from "../../components/layout/Container";
import FadeInSection from "../../components/ui/FadeInSection";
import GlassCard from "../../components/ui/GlassCard";
import { FaCode, FaLaptopCode, FaCloud, FaArrowRight } from "react-icons/fa";

const milestones = [
  {
    year: "2023",
    title: "Started Building",
    description:
      "Began strengthening my programming fundamentals and exploring software engineering concepts.",
    icon: FaCode,
  },
  {
    year: "2024",
    title: "Built Desktop Applications",
    description:
      "Worked on Java, C#, and Windows-based applications while improving my problem-solving skills.",
    icon: FaLaptopCode,
  },
  {
    year: "2025",
    title: "Focused on Back-end Development",
    description:
      "Gained experience in back-end development using C#, ASP.NET Core, and SQL Server.",
    icon: FaCloud,
  },
  {
    year: "2026",
    title: "Focused on Full Stack Development",
    description:
      "Started building more complete web applications using ASP.NET Core, SQL, also explored MERN stack and cloud technologies.",
    icon: FaCloud,
  },
  {
    year: "2027",
    title: "Graduation Ahead",
    description:
      "Continuing to grow toward internship and entry-level opportunities in software engineering.",
    icon: FaArrowRight,
  },
];

const Journey = () => {
  return (
    <section className="py-28">
      <Container>
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium">My Path</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Developer Journey
            </h2>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10">
              {milestones.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={item.year}
                    className="relative grid grid-cols-1 items-center md:grid-cols-[1fr_96px_1fr] gap-6"
                  >
                    {/* LEFT SIDE */}
                    <div className={`${isLeft ? "md:pr-10" : "md:col-start-1 md:opacity-0"}`}>
                      {isLeft && (
                        <GlassCard className="p-6 md:p-8">
                          <p className="text-sm text-blue-400 font-medium mb-2">
                            {item.year}
                          </p>
                          <h3 className="text-2xl font-semibold mb-3">
                            {item.title}
                          </h3>
                          <p className="text-slate-400 leading-7">
                            {item.description}
                          </p>
                        </GlassCard>
                      )}
                    </div>

                    {/* CENTER DOT */}
                    <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#070B16] shadow-lg md:static md:mx-auto md:left-auto md:top-auto">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 border border-blue-400/20">
                        <Icon className="text-lg text-blue-400" />
                      </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className={`${!isLeft ? "md:pl-10 md:col-start-3" : "md:col-start-3 md:opacity-0"}`}>
                      {!isLeft && (
                        <GlassCard className="p-6 md:p-8">
                          <p className="text-sm text-blue-400 font-medium mb-2">
                            {item.year}
                          </p>
                          <h3 className="text-2xl font-semibold mb-3">
                            {item.title}
                          </h3>
                          <p className="text-slate-400 leading-7">
                            {item.description}
                          </p>
                        </GlassCard>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
};

export default Journey;