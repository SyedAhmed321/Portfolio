import Container from "../../components/layout/Container";
import FadeInSection from "../../components/ui/FadeInSection";
import GlassCard from "../../components/ui/GlassCard";
import {
  FaRunning,
  FaSwimmer,
  FaFutbol,
  FaCamera,
  FaVideo,
} from "react-icons/fa";

const interests = [
  {
    title: "Cricket",
    subtitle: "Runner-up in the inter-department university tournament",
    icon: FaRunning,
  },
  {
    title: "Swimming",
    subtitle: "A sport I enjoy for discipline and endurance",
    icon: FaSwimmer,
  },
  {
    title: "Football",
    subtitle: "A favorite way to stay active and competitive",
    icon: FaFutbol,
  },
  {
    title: "Photography",
    subtitle: "Capturing moments through a creative lens",
    icon: FaCamera,
  },
  {
    title: "Videography",
    subtitle: "Telling stories through motion and framing",
    icon: FaVideo,
  },
  {
    title: "Editing",
    subtitle: "Photo and video editing as a creative outlet",
    icon: FaVideo,
  },
];

const BeyondCode = () => {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <FadeInSection>
          <div className="mb-12 text-center md:mb-16">
            <p className="text-blue-400 font-medium">More Than Code</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">
              Beyond Code
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {interests.map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard key={item.title} className="p-6 md:p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
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

export default BeyondCode;
