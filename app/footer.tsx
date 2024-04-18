import { css } from "../styled-system/css";

export const Footer = () => {
  return (
    <footer
      className={css({
        maxWidth: "960px",
        margin: "0 auto",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        borderTop: "1px solid #e5e5e5",
        color: "#717171",
        pt: "2rem",
        mt: "4rem",
      })}
    >
      <div>
        <p>RBND studio s.r.o. © {new Date().getFullYear()}</p>
        <p>č.p. 182, 29476 Hlavenec</p>
        <p>IČ 21378614</p>
        <p>DIČ CZ21378614</p>
        <p>
          Spisová značka C 401074 - Právnická osoba zapsaná v obchodním
          rejstříku vedeném Městským soudem v Praze od 20.3.2024
        </p>
      </div>
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
  );
};
