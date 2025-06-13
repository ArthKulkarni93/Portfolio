export default function Techstack() {

  return (
    <div>
      <div className="font-semibold text-center">
        Techstack

        <div className="font-light mt-8 flex flex-wrap justify-center gap-4 px-4">
          {[
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "WebSockets",
            "TypeScript",
            "JavaScript",
            "React",
            "Zustand",
            "CSS"
          ].map((tech) => (
            <button
              key={tech}
              className="bg-gray-300 px-5 py-2 rounded-full whitespace-nowrap text-sm"
            >
              {tech}
            </button>
          ))}
        </div>

      </div>


    </div>
  );
}
