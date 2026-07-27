const Button = ({ children, href, variant = "primary" }) => {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/30",
    outline:
      "border border-white/20 bg-white/5 hover:bg-white/10 text-white shadow-lg hover:shadow-white/10",
  };

  return (
    <a
      href={href}
      className={`
        inline-flex min-h-12 items-center justify-center text-center
        rounded-2xl px-5 py-3 font-medium sm:px-6
        transition-all duration-300
        hover:scale-105 active:scale-95
        cursor-pointer select-none
        ${styles[variant]}
      `}
    >
      {children}
    </a>
  );
};

export default Button;
