import { projectData } from "../res/data";

export const Projects = () => {
  return (
    <>
      <ul>
        {projectData.map((key) => (
          <a key={key.title} href={key.href} target="_blank" rel="noopener noreferrer">
            <li>
              <h2>{key.title}</h2>
              <p>{key.description}</p>
            </li>
          </a>
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
          margin: 0;
          max-width: 480px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        a {
          color: #7989fe;
        }
        a:hover {
          color: #576df3;
        }
        li {
          padding: 24px;
          border-radius: 12px;
          border: 2px solid hsla(0, 0%, 100%, 0.1);
          background: hsla(0, 0%, 100%, 0.02);
          transition: all 0.12s ease;
        }
        li:hover {
          background: hsla(0, 0%, 100%, 0.04);
        }
      `}</style>
    </>
  );
};
