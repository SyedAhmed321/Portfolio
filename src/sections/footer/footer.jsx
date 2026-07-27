import Container from "../../components/layout/Container";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-400">
            © 2026 Ahmed Hassan. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
            <a
              href="https://linkedin.com/in/syedahmed321/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SyedAhmed321"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
            <a
              href="mailto:isyedahmed110@gmail.com"
              className="transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
