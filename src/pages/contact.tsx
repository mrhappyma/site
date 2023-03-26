import type { NextPage } from "next";
import Head from "next/head";
import { useLanyard } from "use-lanyard";
import Header from "~/components/header";
import Card from "~/components/projectCard";

const DISCORD_ID = "606526727753170969";

const Contact: NextPage = () => {
  const lanyard = useLanyard(DISCORD_ID);

  return (
    <>
      <Head>
        <title>Contact Dominic Ruggiero</title>
      </Head>
      <div className="drac-box drac-bg-black-secondary min-h-screen">
        <Header />
        <main className="m-3 max-w-6xl space-y-2.5 p-2">
          <h1 className="drac-heading drac-heading-2xl drac-text-yellow-pink">
            Contact
          </h1>
          <div className="md:grid md:grid-cols-2 md:gap-2">
            <div className="py-2 md:py-0">
              <Card
                title="Discord"
                description={`${
                  lanyard.data?.discord_user.username ?? "loading"
                }#${lanyard.data?.discord_user.discriminator ?? "0000"}`}
                url={`https://discord.com/users/${DISCORD_ID}`}
                /* TODO: Add Discord avatar */
                color="pink-purple"
              />
            </div>
            <div className="py-2 md:py-0">
              <Card
                title="Twitter"
                description={`@user____exe`}
                url="https://twitter.com/user____exe"
                color="purple-cyan"
              />
            </div>
            <div className="py-2 md:py-0">
              <Card
                title="Email"
                description="dominic@userexe.me"
                url="mailto:dominic@userexe.me"
                /* TODO: Copy to clipboard instead of opening mail client */
                color="cyan-green"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
