import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AboutMe from './Components/AboutME';
import Footer from './Components/Footer';
import Main from './Components/Main'
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact> <Main/>  </Route>
          <Route path='/about'> <AboutMe/> </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
