const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-400/30
      hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
      ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;