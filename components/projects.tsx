import { projectData } from "../res/data";

export const Projects = () => {
  return (
    <ul className="project-list">
      {projectData.map((key) => (
        <li key={key.title}>
          <a href={key.href} target="_blank" rel="noopener noreferrer">
            <div className="project">
              <h2>{key.title}</h2>
              <p>{key.description}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};
