import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "~/components/header";

const Error404Page: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 | Dominic Ruggiero</title>
      </Head>
      <div className="drac-box drac-bg-black-secondary min-h-screen">
        <Header />
        <main className="m-3 max-w-4xl space-y-2.5 p-2">
          <h2 className="drac-heading drac-heading-2xl drac-text-yellow-pink">
            404
          </h2>
          <p className="drac-text drac-text-lg drac-text-orange">
            The page at <code>{router.asPath}</code> doesn&apos;t exist. Do you
            know what that means? It doesn&apos;t exist. It&apos;s not here.
            It&apos;s not real. It&apos;s not a thing. It&apos;s not a page. So
            stop looking for it, at least here. It&apos;s not here.
          </p>
        </main>
      </div>
    </>
  );
};

export default Error404Page;
