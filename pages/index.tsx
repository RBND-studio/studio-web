import { Projects } from "../components/project";
import { projectData } from "../res/data";

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
        <p>Made with ❤️</p>
        <a href="https://github.com/RBND-studio" target="_blank" rel="noreferrer">
          Github
        </a>
      </footer>
      <style jsx>{`
        h1 {
          font-weight: 900;
          font-size: 58px;
          line-height: 72px;
          margin: 0;
        }
        p {
          font-weight: 400;
          font-size: 18px;
          line-height: 28px;
          margin: 0;
          opacity: 0.5;
        }
        footer {
          color: #77728a;
          display: flex;
          gap: 16px;
        }

        footer > p {
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          display: flex;
          gap: 24px;
          opacity: 1;
        }

        footer > a:hover {
          text-decoration: underline;
        }
        .container {
          padding: 120px 24px;
          display: flex;
          gap: 64px;
          flex-direction: column;
          text-align: center;
          align-items: center;
        }
        .circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(36.98deg, #4053d3 13.16%, #576df3 85.57%);
          margin-bottom: 24px;
        }
        .hero {
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
