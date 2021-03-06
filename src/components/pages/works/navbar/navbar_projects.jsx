import { Link } from 'react-router-dom';

import ThemeContext from '../../../context/theme';
import { useContext } from 'react';

const NavbarProjects = ({ projects }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <nav className="nav_studies">
        {projects.map((work) => (
          <Link to={`/work/${work.slug}`} >
          <div className={`card_study ${theme.theme}`} key={work.slug}>
            <h2>{work.title}</h2>
            <p>with <span>{work.client}</span></p>
          </div>    
          </Link>
        ))}
      </nav>
    </>
  )
}

export default NavbarProjects;