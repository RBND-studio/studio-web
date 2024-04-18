import { Projects } from "../components/projects";
import { css } from "../styled-system/css";
import { Flex } from "../styled-system/jsx";

//TODO: Add the team component when it's ready
export default function IndexPage() {
  return (
    <>
      <Flex mb="4rem" justifyContent="space-between" alignItems="center">
        <h1>
          Hey 👋
          <br />
          we are RBND studio.
        </h1>
      </Flex>

      <Projects />
    </>
  );
}
