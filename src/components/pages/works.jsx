import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import NavbarProjects from './components/works/NavbarProjects';


const Works = () => {
  

  return (
    <>
      <h1>Works Page</h1>
       
      <Router>
      <NavbarProjects />
      <Switch>
        <Route path="/work/:studySlug">
          
        </Route>
      </Switch>
      </Router>   
    </>
  )
}

export default Works;