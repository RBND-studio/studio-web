import { projectData } from "../res/data";

export const Projects = () => {
  return (
    <>
      <ul>
        {projectData.map((key) => (
          <li key={key.title}>
            <a href={key.href} target="_blank" rel="noopener noreferrer">
              <h2>{key.title}</h2>
              <p>{key.description}</p>
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        h2 {
          font-weight: 900;
          font-size: 24px;
          line-height: 40px;
          margin: 0;
        }
        p {
          font-weight: 400;
          font-size: 18px;
          line-height: 28px;
          margin: 0;
          color: #f8f7fe;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          max-width: 400px;
        }
        li:not(:last-child) {
          margin-bottom: 40px;
        }
        a {
          color: #7989fe;
        }
        a:hover {
          color: #576df3;
        }
      `}</style>
    </>
  );
};
