import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="RBND studio"
        description="RBND studio is a digital studio based in Prague, Czechia. We create things."
        openGraph={{
          type: "website",
          title: "RBND studio",
          url: "https://rbnd.studio/",
          description: "RBND studio is a digital studio based in Prague, Czechia. We create things.",
        }}
        additionalMetaTags={[
          { name: "author", content: "Ondřej Pešička, Vojtěch Vidra" },
          {
            name: "keywords",
            content: "product desgin, ux, ui, design, digital design, startups, development",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
