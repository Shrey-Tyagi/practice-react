import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function ShowProjects() {
  const [projects, setProjects] = useState();
  const [displayProject, setDisplayProject] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMessage] = useState();

  useEffect(() => {
    fakeFetch('https://example.com/api/projects')
      .then((data) => {
        setProjects(data.data?.projects);
        setDisplayProject(data.data?.projects[0]);
        setIsLoading(false);
      })
      .catch((err) => setErrorMessage(err.message));
  }, []);
  return (
    <div>
      <h2>Projects</h2>

      {isLoading ? <h2>Loading...</h2> : null}
      {projects?.map(
        ({ title, description, technologies, completed }) => (
          <div>
            <h3>Name: {title}</h3>
            <h3>Description: {description}</h3>
            <button
              onClick={() =>
                setDisplayProject({
                  title,
                  description,
                  technologies,
                  completed,
                })
              }
            >
              Show Deatils
            </button>
            <hr />
          </div>
        )
      )}
      <h2>Project Details</h2>
      <h3>Title: {displayProject?.title}</h3>
      <h3>Description: {displayProject?.description}</h3>
      <h3>Technilogies: {displayProject?.technologies}</h3>
      <h3>Completed: {displayProject?.completed.toString()}</h3>
      {errorMsg ? <h2>{errorMsg}</h2> : null}
    </div>
  );
}
