import type { NextPage } from "next";
import Head from "next/head";
import { useLanyard } from "use-lanyard";
import Header from "~/components/header";
import ContactCardCollection from "~/components/contact";

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
          <ContactCardCollection lanyard={lanyard.data} />
        </main>
      </div>
    </>
  );
};

export default Contact;
