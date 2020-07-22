import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import FrontPage from './FrontPage/FrontPage';
import About from './About/About'
import ThisProject from './ThisProject/ThisProject'
import './App.css';

function App() {
  return (
    <main className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="NYT logo" />
            <hr className="top-hr"/>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/this-project">This Project</Link>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1iKhd3s9N8M1lYz3HEctPDRkiszEb84RZ/view?usp=sharing" rel="noopener noreferrer" target="_blank">Cover Letter</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1sFaukr5uRcNgrSj5Jh8yjKj5l2eGFMMI/view?usp=sharing" rel="noopener noreferrer" target="_blank">Resume</a>
            </li>
            <li>
              <a href="mailto:dzeig.j@gmail.com">Email Me</a>
            </li>
          </ul>
        <hr className="bottom-hr"/>

          <Switch>
            <Route exact path="/">
              <FrontPage />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/this-project">
              <ThisProject />
            </Route>

          </Switch>
        </header>
      </Router>
    </main>
  );
}

export default App;
