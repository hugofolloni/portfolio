import Home from "./Home";
import About from "./About";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Experience from "./Experience";
import Studies from "./Studies";
import Projects from "./Projects"
import Footer from "./Footer"
import Galaxy from './Galaxy'

function App() {
  return (
    <div className="App">
      <div className="header-wrapper">
        <div className="header">
          <div className="nav">
            <span onClick={() => {window.scrollTo(0, 0)}}>hugofolloni</span>
          </div>
          <div className="links">
            <a href="https://www.linkedin.com/in/hugofolloni/" target="_blank" rel='noreferrer'>
              <LinkedInIcon className='icon'/>          
            </a>
            <a href="https://github.com/hugofolloni/" target="_blank" rel='noreferrer'>
              <GitHubIcon className='icon'/>          
            </a>
          </div>
        </div>
      </div>
        <Galaxy />
        <Home id="home" />
        <About />
        <Experience />
        <Footer />
    </div>
  );
}

export default App;
