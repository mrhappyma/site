import type { NextPage } from "next";
import Head from "next/head";
import Header from "~/components/header";
import { activeEvents, eventType, futureEvents } from "~/utils/gone";

const Gone: NextPage = () => {
  const active = activeEvents();
  const future = futureEvents();

  const gone = !(active.length === 0);
  return (
    <>
      <Head>
        <title>Gone - Dominic Ruggiero</title>
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
                {new Date(event.startTimestamp).toLocaleString()} -{" "}
                {new Date(event.endTimestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};
export default Gone;
