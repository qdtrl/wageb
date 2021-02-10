import { useState } from 'react';
import {
  Route,
  Switch as Swi,
  BrowserRouter as Router,
} from 'react-router-dom';
import NavbarProjects from './navbar/navbar_projects';
import NavbarProjectsList from './navbar/navbar_projects_list';
import StudyCase from './studycase';
import Switch from '@material-ui/core/Switch';


const Works = () => {
  const pageTitle = `Au fil des années, nous avons pu accompagner les meilleurs.`;
  const speach = `Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.`;
  const projects = [
    {
      title: "Le Challenge",
      client: "Platon",
      slug: "platon",
      description: `Platon a décidé de se lancer à l'époque malgré une crise économique difficile.  
      Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence.`,
    },
    {
      title: "Solane est le premier vendeur de fraises du Poitou-Charentes",
      client: "Solane",
      slug: "solane",
      description: `Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.
      `,
    },
    {
      title: `Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas`,
      client: "Sedal",
      slug: "sedal",
      description: `Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, "les derniers seront les premiers".
      `,
    }
  ];
  const navbar = {
    list: <NavbarProjectsList projects={projects} />,
    block: <NavbarProjects projects={projects} />,
  };

  const [navProject, setNavProject] = useState(true);
  const changeNavProject = () => {
    setNavProject(navProject ? false : true);
  };
    return (
    <>
      <h1>{pageTitle}</h1>
      <p>{speach}</p>
      <Switch checked={navProject} onChange={changeNavProject} inputProps={{ 'aria-label': 'secondary checkbox' }}/>
      <Router>
      { navProject ? navbar.block : navbar.list }
      <Swi>
        <Route path="/work/:studySlug">
          <StudyCase projects={projects} />
        </Route>
      </Swi>
      </Router>  
    </>
  )
}

export default Works;