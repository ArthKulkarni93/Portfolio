export default function Techstack() {
  const stacks = [
    'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'WebSockets',
    'TypeScript', 'JavaScript', 'React', 'Zustand', 'CSS',
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-center text-2xl font-semibold">Techstack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {stacks.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-gray-200 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}