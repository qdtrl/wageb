import { useEffect, useState } from 'react';
import { useParams,} from 'react-router-dom';

const StudyCase = ( { projects } ) => {
  const { studySlug } = useParams();
  const [currentStudy, setCurrentStudy] = useState(undefined)

  useEffect(() => {
    const foundStudy = projects.find((work) => work.slug === studySlug);
    setCurrentStudy(foundStudy);
    // eslint-disable-next-line
  }, [studySlug])

  return (
    <>
      <h1>{currentStudy.title}</h1>
      <p>{currentStudy.description}</p>
    </>
  )
}

export default StudyCase;