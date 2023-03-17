import type { NextApiRequest, NextApiResponse } from "next";
import decksData from "@/pages/database/decksData.json";
import { DeckData } from "@/types/common";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DeckData>
) {
  const userid = req.query.userid;
  let deck = decksData.filter((userDeck) => {
    return userDeck.id === userid;
  });
  console.log(req);

  res.status(200).json(deck[0]);
}
