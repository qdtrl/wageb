import { Link } from 'react-router-dom';

const NavbarProjects = ({ projects }) => {
  return (
    <>
      <nav className="carousel_apps">
        {projects.map((work) => (
          <Link to={`/work/${work.slug}`} >
          <div className="card_app" key={work.slug}>
            <h2>{work.title}</h2>
            <p>{work.description}</p>
          </div>    
          </Link>
        ))}
      </nav>
    </>
  )
}

export default NavbarProjects;