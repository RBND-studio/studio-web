import { projectData } from "../res/data";

export const Projects = () => {
  return (
    <ul>
      {projectData.map((key) => (
        <a
          key={key.title}
          href={key.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="project">
            <h2>{key.title}</h2>
            <p>{key.description}</p>
          </li>
        </a>
      ))}
    </ul>
  );
};
