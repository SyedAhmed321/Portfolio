const stats = [
  {
    value: "5+",
    label: "Projects",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "2027",
    label: "Graduation",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-12 grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:gap-10">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-2xl font-bold text-blue-400 sm:text-3xl">
            {stat.value}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
