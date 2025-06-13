export default function Projects() {
  const projects = [
    {
      pic: 'https://www.slashgear.com/img/gallery/10-encrypted-messaging-apps-you-can-download-for-android-right-now/briar-1685977429.webp',
      title: 'TextHood',
      info: 'Real-time chat application enabling users to exchange messages instantly.',
      link: 'https://github.com/ArthKulkarni93/Whatsapp-Clone',
    },
    {
      pic: 'src/assets/Screenshot 2025-06-13 at 6.15.25 PM.png',
      title: 'ProctorFlow',
      info: 'A secure, malpractice-free online platform where teachers can upload MCQ files and administer tests to students.',
      link: 'https://github.com/ArthKulkarni93/MP-sem-6',
    },
    {
      pic: 'https://private-user-images.githubusercontent.com/158561171/372903561-fda6940d-c5e6-4931-abee-f5c598c5048b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk4MTk5OTMsIm5iZiI6MTc0OTgxOTY5MywicGF0aCI6Ii8xNTg1NjExNzEvMzcyOTAzNTYxLWZkYTY5NDBkLWM1ZTYtNDkzMS1hYmVlLWY1YzU5OGM1MDQ4Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYxM1QxMzAxMzNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZTY5YmE4MDFlZmU4MDUyYWM1ZmY0NjUwNjI3N2FlZjIxM2E1N2MwMGM1MWIzOGU0ZWUxODNhYjJjOWRiOTBlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.6ujT5fk8g9Gc9u7CB6RB7iV2LmCkCtGJMRBr4mQsvnc',
      title: 'PayMe',
      info: 'Letting people send and receive money and make payments online.',
      link: 'https://github.com/ArthKulkarni93/Paytm_Clone',
    },
    
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-center text-2xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-4 lg:grid-cols-2 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ pic, title, info, link }: any) {
  return (
    <div className="border rounded-xl p-6 space-y-4">
      <img className="w-full h-48 object-cover rounded-lg" src={pic} alt={title} />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-justify font-light">{info}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 border rounded-full bg-white hover:bg-gray-100 transition"
      >
        View Project
      </a>
    </div>
  );
}
