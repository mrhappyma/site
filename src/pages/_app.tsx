import { type AppType } from "next/dist/shared/lib/utils";
import { Fira_Code } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
      </Head>
      <div className={FiraCode.className}>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  );
};

export default MyApp;
