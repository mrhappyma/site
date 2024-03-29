import type { NextPage } from "next";
import Head from "next/head";
import Header from "~/components/header";
import type { goneEvent } from "~/types/gone";
import { activeEvents, eventType, futureEvents } from "~/utils/gone";

const Gone: NextPage<{ active: goneEvent[]; future: goneEvent[] }> = ({
  active,
  future,
}) => {
  const gone = !(active.length === 0);
  return (
    <>
      <Head>
        <title>Gone | Dominic Ruggiero</title>
      </Head>
      <div className="drac-box drac-bg-black-secondary min-h-screen">
        <Header />
        <main className="m-3 max-w-6xl space-y-2.5 p-2">
          <h1 className="drac-heading drac-heading-2xl drac-text-yellow-pink">
            {gone ? "👋 I'm Gone" : "Gone?"}
          </h1>
          {gone && (
            <div className="flex flex-col gap-5">
              {active.map((event) => (
                <div key={event.id}>
                  <h2 className="drac-heading drac-heading-xl drac-text-orange">
                    {event.title}
                  </h2>
                  <p className="drac-text drac-text-md drac-text-white">
                    {event.description}
                  </p>
                  <p className="drac-text drac-text-md drac-text-pink-purple">
                    {new Date(event.startTimestamp).toLocaleString()} -{" "}
                    {new Date(event.endTimestamp).toLocaleString()}
                  </p>
                  {event.type == eventType.busy && (
                    <p className="drac-text drac-text-sm drac-text-white">
                      Busy - I&apos;ll probably still see messages, but at weird
                      unpredictable times.
                    </p>
                  )}
                  {event.type == eventType.gone && (
                    <p className="drac-text drac-text-sm drac-text-white">
                      Gone - Absolutely off the grid. I&apos;ll see messages
                      when I get back.
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
          {!gone && (
            <h2 className="drac-heading drac-heading-xl drac-text-orange">
              Nope, I&apos;m home. Or forgot to put an event in here.
            </h2>
          )}
          <h1 className="drac-heading drac-heading-2xl drac-text-yellow-pink">
            Upcoming Gone-ness
          </h1>
          <h4 className="drac-heading drac-heading-lg drac-text-orange italic">
            everything is tentative
          </h4>
          {future.length == 0 && (
            <h2 className="drac-heading drac-heading-lg drac-text-orange">
              I haven&apos;t updated this with more Gone-ness yet, I guess...
            </h2>
          )}
          {future.map((event) => (
            <div key={event.id} className="drac-bg-purple rounded-md p-5">
              <h2 className="drac-heading drac-heading-xl drac-text-black">
                {event.title}
              </h2>
              <p className="drac-text drac-text-md drac-text-black">
                {event.description}
              </p>
              <p className="drac-text drac-text-md drac-text-yellow">
                {new Date(event.startTimestamp).toLocaleDateString()} -{" "}
                {new Date(event.endTimestamp).toLocaleDateString()}
              </p>
            </div>
          ))}
          <p className="text-s italic">
            Someone once got mad at me because I didn&apos;t reply to them. I
            was gone for a week. It shall never happen again...
          </p>
        </main>
      </div>
    </>
  );
};
export default Gone;

export const getServerSideProps = () => {
  const active = activeEvents();
  const future = futureEvents();

  return {
    props: {
      active,
      future,
    },
  };
};
