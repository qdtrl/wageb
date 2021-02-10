import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './index.scss';
import Home from './components/pages/home';
import About from './components/pages/about';
import Works from './components/pages/works/works';
import Navbar from './components/navbar/';
import ThemeContext from './components/context/';
import { useState } from 'react';

const Wageb = () => {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{
      theme, 
      changeTheme: () => setTheme(theme === 'dark'? 'light' : 'dark') 
    }}>
      <Router>
        <main className={theme}>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
          </Switch>
        </main>
      </Router>
    </ThemeContext.Provider>
  );
}

render(<Wageb />, document.getElementById('root'));