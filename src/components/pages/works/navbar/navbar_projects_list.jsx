import { Link } from 'react-router-dom';

import ThemeContext from '../../../context/theme';
import { useContext } from 'react';

const NavbarProjectsList = ({ projects }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <nav className="nav_studies">
        {projects.map((work) => (
          
          <li className={`${theme.theme}`} key={work.slug}>
            <h2>{work.title}</h2>
            <Link to={`/work/${work.slug}`} >en savoir plus</Link>
          </li>    
          
        ))}
      </nav>
    </>
  )
}

export default NavbarProjectsList;