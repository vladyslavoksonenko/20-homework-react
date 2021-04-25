import React from 'react';
import './App.scss';
import { 
  BrowserRouter,
  Link,
  Switch,
  Route
 } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Posts from './components/Posts';
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="header">
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/posts"}>Posts</Link>
              </li>
              <li>
                <Link to={"/gallery"}>Gallery</Link>
              </li>
              <li>
                <Link to={"/contacts"}>Contacts</Link>
              </li>
            </ul>
          </nav>
      </header>
      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
