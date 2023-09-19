import { Projects } from "../components/projects";

export default function IndexPage() {
  return (
    <div className="container">
      <div className="hero">
        <div className="circle" />
        <h1>RBND </h1>
        <p>We create things</p>
      </div>

      <Projects />
      <footer>
        <a
          href="https://github.com/RBND-studio"
          target="_blank"
          rel="noreferrer"
        >
          Our GitHub
        </a>
      </footer>
    </div>
  );
}
