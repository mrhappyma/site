import type { goneEvent } from "~/types/gone";

export enum eventType {
  busy,
  gone,
}

const events: goneEvent[] = [
  {
    id: "20230620-test",
    title: "Test Event",
    description: "This is a test event. Nothing to see here.",
    startTimestamp: 1687275000000,
    endTimestamp: 1687289400000,
    type: eventType.busy,
  },
  {
    id: "2023-iri",
    title: "IRI",
    description:
      "Robotics competition. Traveling a lot of the first and last days.",
    startTimestamp: 1688641200000,
    endTimestamp: 1688929200000,
    type: eventType.busy,
  },
  {
    id: "2023-summercamp",
    title: "Summer Camp",
    description: "Summer camp. That's it.",
    startTimestamp: 1688932800000,
    endTimestamp: 1689429600000,
    type: eventType.gone,
  },
];
export default events;

export const activeEvents = () => {
  const now = Date.now();
  return events.filter((event) => {
    return event.startTimestamp < now && event.endTimestamp > now;
  });
};

export const futureEvents = () => {
  const now = Date.now();
  return events.filter((event) => {
    return event.startTimestamp > now;
  });
};
