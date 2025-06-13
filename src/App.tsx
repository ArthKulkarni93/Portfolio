import Profile from './Components/Profile';
import Techstack from './Components/Techstack';
import Projects from './Components/Projects';

export default function App() {
  return (
    <div className="m-5 lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <aside className="w-full lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] overflow-y-auto">
        <Profile />
      </aside>

      <main className="w-full space-y-12">
        <Techstack />
        <Projects />
      </main>
    </div>
  );
}