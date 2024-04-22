import Home from "./Home";
import About from "./About";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function App() {
  return (
    <div className="App">
      <div className="header-wrapper">
        <div className="header">
          <div className="nav">
            <a href="#home">hugofolloni</a>
          </div>
          <div className="links">
            <a href="https://github.com/hugofolloni/" target="_blank" rel='noreferrer'>
              <GitHubIcon className='icon'/>          
            </a>
            <a href="https://www.linkedin.com/in/hugofolloni/" target="_blank" rel='noreferrer'>
              <LinkedInIcon className='icon'/>          
            </a>
          </div>
        </div>
      </div>
        <Home id='home' />
        <About id='about' />
    </div>
  );
}

export default App;
