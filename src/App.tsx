import './index.css'
import Profile from './Components/Profile';
import Projects from './Components/Projects';
import Techstack from './Components/Techstack';

function App() {
  return (
    <div className="lg:flex lg:mx-20 m-5 ">
      <div className='lg:w-1/2 w-full'>
        <Profile/>
      </div>

      <div className='mt-8 lg:w-1/2 w-full lg:ml-[155px] lg:mt-1 lg:pl-6 max-h-screen'>
        <Techstack/>
        <Projects/>
      </div>

    </div>
  );
}

export default App;