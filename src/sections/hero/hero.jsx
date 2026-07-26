import Container from "../../components/layout/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroWorkspace from "./HeroWorkspace";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <HeroContent />

          <HeroWorkspace />

        </div>
      </Container>

    </section>
  );
};

export default Hero;