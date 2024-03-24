import { projectData } from "../res/data";
import { css } from "../styled-system/css";
import { Flex } from "../styled-system/jsx";

export const Projects = () => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "1.2rem",
      })}
    >
      <h2>Our projects</h2>
      <ul
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(28rem, 1fr))",
          gridGap: "1rem",
          listStyle: "none",
          width: "100%",
        })}
      >
        {projectData.map((key) => (
          <li key={key.title}>
            <a href={key.href} target="_blank" rel="noopener noreferrer">
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="start"
                widows="100%"
                height="100%"
                padding="2rem"
                border="1px solid #e2e2e2"
                backgroundColor="#fff"
                borderRadius="0.8rem"
                transition="all 0.2s ease"
                _hover={{
                  border: "1px solid #4053d3",
                  boxShadow: "0 0 0 4px rgba(64, 83, 211,.10)",
                }}
              >
                <h3>{key.title}</h3>
                <p>{key.description}</p>
              </Flex>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
