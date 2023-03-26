import { type AppType } from "next/dist/shared/lib/utils";
import { Fira_Code } from "@next/font/google";
import Head from "next/head";

import "~/styles/globals.css";
import "dracula-ui-no-fonts/styles/dracula-ui.css";
const FiraCode = Fira_Code({
  weight: "variable",
  subsets: ["latin-ext"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          data-domain="userexe.me"
          src="https://analytics.userexe.me/js/script.js"
        />
      </Head>
      <div className={FiraCode.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
