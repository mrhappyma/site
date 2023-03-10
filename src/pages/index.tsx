import { type NextPage } from "next";
import Head from "next/head";
import Header from "~/components/header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dominic Ruggiero</title>
        <meta name="description" content="Dominic's personal website" />
        <link rel="icon" href="/favicon.gif" type="image/gif" />
      </Head>
      <div className="drac-box drac-bg-black-secondary min-h-screen">
        <Header />
        <main className="m-3 max-w-4xl space-y-2.5 p-2">
          <h2 className="drac-heading drac-heading-2xl drac-text-yellow-pink">
            Dominic Ruggiero
          </h2>
          <p className="drac-text drac-text-lg drac-text-orange">
            A banana and tuna fish sandwich with a side of fries, ew.
          </p>
          <p className="drac-text drac-text-md drac-text-white">
            And an extended description of the sandwich which is in this case is
            myself will go here, with lots of disgusting shmears and such. Oooo,
            mustard...
          </p>
        </main>
      </div>
    </>
  );
};

export default Home;
