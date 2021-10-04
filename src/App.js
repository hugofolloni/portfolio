import './App.css';
import Header from './Header';
import Home from './Home';
import Aboutme from './Aboutme';
import Skills from "./Skills"
import Works from "./Works"
import Contact from "./Contact"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Aboutme />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
