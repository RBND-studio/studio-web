export default function IndexPage() {
  return (
    <div className="container">
      <div className="circle" />
      <h1>rbnd studio</h1>
      <p>We create things</p>
      <ul>
        <li>
          <a href="https://atmos.style/">Atmos.style</a>
        </li>
        <li>
          <a href="https://www.figma.com/community/plugin/1105107567350255361">
            Content master - Figma plugin
          </a>
        </li>
      </ul>
      <footer>hello@rbnd.studio</footer>
      <style jsx>{`
        h1 {
          font-weight: 900;
          font-size: 58px;
          line-height: 72px;
          margin: 0;
        }
        p {
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          margin: 0;
        }
        a {
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          color: #7989fe;
        }
        a:hover {
          color: #576df3;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li:not(:last-child) {
          margin-bottom: 8px;
        }
        footer {
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #77728a;
        }
        .container {
          padding: 120px 16px;
          display: flex;
          gap: 24px;
          flex-direction: column;
          text-align: center;
          align-items: center;
        }
        .circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(36.98deg, #4053d3 13.16%, #576df3 85.57%);
        }
      `}</style>
    </div>
  );
}
