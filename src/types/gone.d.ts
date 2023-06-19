import type { eventType } from "~/utils/gone";

declare type goneEvent = {
  id: string;
  title: string;
  description: string;
  startTimestamp: number;
  endTimestamp: number;
  type: eventType;
};
