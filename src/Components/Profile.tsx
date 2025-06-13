export default function Profile() {
  return (
    <div className="w-full p-4 space-y-8">
      <Photos />
      <Bio />
      <Socials />
    </div>
  );
}

function Photos() {
  return (
    <div className="relative">
      <img
        className="w-full h-60 object-cover rounded-xl"
        src="https://raw.githubusercontent.com/ArthKulkarni93/Portfolio/master/src/assets/Background.jpg"
        alt="Background"
      />
      <img
        className="w-24 h-24 rounded-full absolute left-4 bottom-0 transform translate-y-1/2 border-4 border-white"
        src="https://raw.githubusercontent.com/ArthKulkarni93/Portfolio/master/src/assets/PXL_20250126_072630780.jpg"
        alt="Avatar"
      />
    </div>
  );
}

function Bio() {
  return (
    <div className="pt-12 space-y-4">
      <h1 className="text-4xl font-bold">ARTH KULKARNI.</h1>
      <p className="text-lg font-light">
        I'm a Backend developer based in Maharashtra, India.
      </p>
      <p className="text-lg font-light">
        20, a developer who prefers working with systems, logic, and clean
        backends. I believe in minimalism, both in <span className="text-indigo-500">design</span> and
        in <span className="text-rose-600">thinking</span>, and I’m continuously learning
        to stay relevant with evolving technologies. I focus on what works, what
        lasts, and what makes sense.
      </p>
    </div>
  );
}

function Socials() {
  const icons = [
    { href: 'https://x.com/KulkarniArth', src: 'https://raw.githubusercontent.com/ArthKulkarni93/Portfolio/e69fac9f6b099749cc4ee3c2fe8e088a06f125d3/src/assets/x2.svg', alt: 'X' },
    { href: 'https://linkedin.com/in/arth-kulkarni', src: 'https://raw.githubusercontent.com/ArthKulkarni93/Portfolio/refs/heads/master/src/assets/linkedin.webp', alt: 'LinkedIn' },
    { href: 'https://github.com/ArthKulkarni93', src: 'https://github.com/ArthKulkarni93/Portfolio/blob/master/src/assets/github%20logo.png?raw=true', alt: 'GitHub' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        {icons.map((icon) => (
          <a key={icon.alt} href={icon.href} target="_blank" rel="noopener noreferrer">
            <img
              className="w-8 h-8 p-1 rounded-full border border-zinc-600"
              src={icon.src}
              alt={icon.alt}
            />
          </a>
        ))}
      </div>
      <div className="flex space-x-4">
        <button className="px-6 py-2 bg-black text-white rounded-full">Resume</button>
        <button className="px-6 py-2 bg-white text-black rounded-full border">Contact me</button>
      </div>
    </div>
  );
}