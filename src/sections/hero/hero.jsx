import Container from "../../components/layout/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroWorkspace from "./HeroWorkspace";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 lg:py-0">

      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <HeroContent />

          <HeroWorkspace />

        </div>
      </Container>

    </section>
  );
};

export default Hero;
