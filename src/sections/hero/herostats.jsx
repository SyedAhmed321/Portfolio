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
    <div className="mt-12 flex flex-wrap gap-10">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-3xl font-bold text-blue-400">
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