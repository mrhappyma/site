import type { NextApiRequest, NextApiResponse } from "next";
import { activeEvents } from "~/utils/gone";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(activeEvents());
}
