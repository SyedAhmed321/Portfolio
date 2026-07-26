import Container from "../../components/layout/Container";
import FadeInSection from "../../components/ui/FadeInSection";
import GlassCard from "../../components/ui/GlassCard";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

const contactLinks = [
  {
    title: "Email",
    value: "isyedahmed110@gmail.com",
    href: "mailto:isyedahmed110@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "LinkedIn",
    value: "syedahmed321",
    href: "https://linkedin.com/in/syedahmed321/",
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    value: "SyedAhmed321",
    href: "https://github.com/SyedAhmed321",
    icon: FaGithub,
  },
  {
    title: "Resume",
    value: "Download CV",
    href: "/Syed_Ahmed_Hassan_CV.pdf",
    icon: FaFileDownload,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-28">
      <Container>
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium">Let’s Connect</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Contact
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <GlassCard className="p-8 md:p-10">
              <p className="text-blue-400 font-medium mb-3">
                Available for opportunities
              </p>

              <h3 className="text-3xl font-bold leading-tight">
                Let’s build something meaningful together.
              </h3>

              <p className="mt-6 text-slate-400 leading-8">
                I’m open to internships, entry-level roles, collaborations, and
                project opportunities. If you have an idea or a role that fits
                my background in ASP.NET Core, React, SQL, and full stack web
                development, I’d love to hear from you.
              </p>

              <div className="mt-8 space-y-4">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                        <Icon className="text-blue-400" />
                      </div>

                      <div>
                        <p className="text-sm text-slate-400">{item.title}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </GlassCard>

            <GlassCard className="p-8 md:p-10">
              <h3 className="text-2xl font-semibold">
                Send a message
              </h3>

              <p className="mt-3 text-slate-400 leading-7">
                You can send a quick message directly through your email app.
              </p>

              <form
                className="mt-8 space-y-5"
                action="mailto:isyedahmed110@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-blue-400/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-blue-400/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell me about your opportunity or idea..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-blue-400/40"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:scale-105 cursor-pointer"
                >
                  <FaEnvelope />
                  Send Message
                </button>
              </form>
            </GlassCard>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
};

export default Contact;