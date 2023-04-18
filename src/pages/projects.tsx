import type { NextPage } from "next";
import Head from "next/head";
import Header from "~/components/header";
import Card from "~/components/projectCard";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects | Dominic Ruggiero</title>
      </Head>
      <div className="drac-box drac-bg-black-secondary min-h-screen">
        <Header />
        <main className="m-3 max-w-6xl space-y-2.5 p-2">
          <h1 className="drac-heading drac-heading-2xl drac-text-yellow-pink">
            Notable Projects
          </h1>
          <div className="md:grid md:grid-cols-2 md:gap-2">
            <div className="plausible-event-name=Project+Visit py-2 md:py-0">
              <Card
                title="userexe.me"
                description="This website!"
                url="#"
                color="yellow"
                date="March 2023"
              />
            </div>
            <div className="plausible-event-name=Project+Visit py-2 md:py-0">
              <Card
                title="Quizbowl Score"
                description="Online quizbowl scoring system."
                url="https://github.com/mrhappyma/qbs"
                color="green"
                date="Janurary 2023"
              />
            </div>
            <div className="plausible-event-name=Project+Visit py-2 md:py-0">
              <Card
                title="Potterbot"
                description={
                  "Simple Discord bot to get Harry Potter information."
                }
                url="https://github.com/mrhappyma/potterbot"
                color="cyan"
                date="November 2022"
              />
            </div>
            <div className="plausible-event-name=Project+Visit py-2 md:py-0">
              <Card
                title="Other random stuff"
                url="https://github.com/mrhappyma"
                color="purple"
                date="pretty much always"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Projects;
