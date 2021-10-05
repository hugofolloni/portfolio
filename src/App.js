import './App.css';
import Header from './Header';
import Home from './Home';
import Aboutme from './Aboutme';
import Skills from "./Skills"
import Works from "./Works"
import Contact from "./Contact"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exath path="/">
          <Home/>
          <Aboutme/>
          <Skills/>
          <Works/>
          <Contact />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
