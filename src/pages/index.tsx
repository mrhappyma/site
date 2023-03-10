import { type NextPage } from "next";
import Head from "next/head";
import { Shantell_Sans } from "@next/font/google";
import SocialBox from "~/components/home/socialBox";
import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ShantellSans = Shantell_Sans({
  subsets: ["latin"],
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dominic Ruggiero</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.gif" type="image/gif" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#530707] to-[#d89314] text-white">
        <h1 className={`p-2 text-6xl font-bold ${ShantellSans.className}`}>
          Dominic Ruggiero
        </h1>
        <h2 className="text-3xl font-bold">is redoing his website</h2>
        <h3 className="text-xl font-bold">more stuff later</h3>
        <div className="mt-1 grid grid-cols-2 grid-rows-2 p-2">
          <SocialBox
            name="GitHub"
            icon={faGithub}
            url="https://github.com/mrhappyma"
          />
          <SocialBox
            name="Twitter"
            icon={faTwitter}
            url="https://twitter.com/user____exe"
          />
          <SocialBox
            name="Discord server"
            icon={faDiscord}
            url="https://discord.gg/sN3aBHQM7N"
          />
          <SocialBox
            name="email me"
            icon={faEnvelope}
            url="mailto:dominic@userexe.me"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
