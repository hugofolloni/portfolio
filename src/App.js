import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Studies from "./Studies";
import Projects from "./Projects"
import Footer from "./Footer"
import { Galaxy } from 'react-stars-particles'
import Header from "./Header";

function App() {
  return (
    <div className="App">
        <Galaxy color='#2f2f2f' quantity={300}/>
        <Header />
        <Home id="home" />
        <About />
        <Experience />
        <Studies />
        <Footer />
    </div>
  );
}

export default App;
