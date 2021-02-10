import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import NavbarProjects from './navbar/navbar_projects';
import StudyCase from './studycase';


const Works = () => {
  const pageTitle = `Au fil des années, nous avons pu accompagner les meilleurs.`;
  const speach = `Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.`;
  const projects = [
    {
      title: "Le Challenge",
      slug: "platon",
      description: `Platon a décidé de se lancer à l'époque malgré une crise économique difficile.  
      Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence.`,
    },
    {
      title: "Solane est le premier vendeur de fraises du Poitou-Charentes",
      slug: "solane",
      description: `Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.
      `,
    },
    {
      title: `Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas`,
      slug: "sedal",
      description: `Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, "les derniers seront les premiers".
      `,
    }
  ];

  return (
    <>
      <h1>{pageTitle}</h1>
      <p>{speach}</p>
       
      <Router>
      <NavbarProjects projects={projects} />
      <Switch>
        <Route path="/work/:studySlug">
          <StudyCase projects={projects} />
        </Route>
      </Switch>
      </Router>   
    </>
  )
}

export default Works;