import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "~/styles/globals.css";
import "dracula-ui/styles/dracula-ui.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.gif" type="image/gif" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
