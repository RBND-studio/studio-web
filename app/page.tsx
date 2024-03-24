import { Projects } from "../components/projects";
import { css } from "../styled-system/css";
import { Flex } from "../styled-system/jsx";

//TODO: Add the team component when it's ready
export default function IndexPage() {
  return (
    <div>
      <Flex mb="4rem" justifyContent="space-between" alignItems="center">
        <h1>
          Hey 👋
          <br />
          we are RBND studio.
        </h1>
      </Flex>

      <Projects />

      <footer
        className={css({
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #e5e5e5",
          color: "#717171",
          pt: "2rem",
          mt: "4rem",
        })}
      >
        <p>RBND studio s.r.o. © {new Date().getFullYear()}</p>
        <a
          href="https://github.com/RBND-studio"
          target="_blank"
          rel="noreferrer"
          className={css({
            "&:hover": {
              textDecoration: "underline",
            },
          })}
        >
          Our GitHub
        </a>
      </footer>
    </div>
  );
}
