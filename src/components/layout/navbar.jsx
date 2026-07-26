import Container from "./Container";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container>
        <nav className="mt-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">

          <div className="flex items-center justify-between px-6 py-4">
            <a href="#">
            <h1 className="text-xl font-bold tracking-wider">
              AHMED
              <span className="text-blue-400">.</span>
            </h1>
            </a>

            {/* Desktop */}

            <div className="hidden md:flex items-center gap-8">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/Syed_Ahmed_Hassan_CV.pdf"
                className="rounded-xl bg-blue-600 px-5 py-2 hover:bg-blue-500 transition"
              >
                Resume
              </a>

            </div>

            {/* Mobile */}

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-3xl"
            >
              {open ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>

          </div>

          {open && (
            <div className="md:hidden border-t border-white/10">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}

            </div>
          )}

        </nav>
      </Container>
    </header>
  );
};

export default Navbar;