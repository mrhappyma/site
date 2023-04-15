import { type NextPage } from "next";
import Head from "next/head";
import Header from "~/components/header";
import DiscordPresence from "~/components/home/discord";
import ContactCardCollection from "~/components/contact";
import { useLanyard, useLanyardWS } from "use-lanyard";

const DISCORD_ID = "606526727753170969";

const Home: NextPage = () => {
  const lanyard = useLanyardWS(DISCORD_ID);

  return (
    <>
      <Head>
        <title>Dominic Ruggiero</title>
        <meta name="description" content="Dominic's personal website" />
      </Head>
      <div className="drac-box drac-bg-black-secondary min-h-screen">
        <Header />
        <main className="m-3 max-w-4xl space-y-2.5 p-2">
          <h1 className="drac-heading drac-heading-2xl drac-text-yellow-pink">
            Dominic Ruggiero
          </h1>
          <p className="drac-text drac-text-lg drac-text-orange">
            a.k.a. Dominic, a.k.a. user.exe
          </p>
          <p className="drac-text drac-text-md drac-text-white">
            I&apos;m a odd human, trying to get not-so-awful grades and mess
            with software development and programming shenanigans. I prefer
            backend-type stuff, but make some websites (I am <i>really</i> bad
            at designing stuff). This site is made with{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://nextjs.org/"
              className="drac-anchor drac-text drac-text-white drac-text-purple--hover"
            >
              Next.js
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://tailwindcss.com/"
              className="drac-anchor drac-text drac-text-white drac-text-purple--hover"
            >
              Tailwind CSS
            </a>
            , and the{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://draculatheme.com/"
              className="drac-anchor drac-text drac-text-white drac-text-purple--hover"
            >
              Dracula color scheme
            </a>
            . It&apos;s{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mrhappyma/site"
              className="drac-anchor drac-text drac-text-white drac-text-purple--hover"
            >
              open source
            </a>{" "}
            too.
          </p>
          <div className="p-1">
            <DiscordPresence lanyard={lanyard} />
          </div>
          <div>
            <h1 className="drac-heading drac-heading-xl drac-text-yellow-pink py-3">
              Contact
            </h1>
            <ContactCardCollection lanyard={lanyard} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
