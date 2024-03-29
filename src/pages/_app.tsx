import { type AppType } from "next/dist/shared/lib/utils";
import { Fira_Code } from "@next/font/google";
import Head from "next/head";

import "~/styles/globals.css";
import "dracula-ui-no-fonts/styles/dracula-ui.css";
import Script from "next/script";
const FiraCode = Fira_Code({
  weight: "variable",
  subsets: ["latin-ext"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        defer
        data-domain="userexe.me"
        src="https://analytics.userexe.me/js/script.tagged-events.js"
      />
      <div className={FiraCode.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
