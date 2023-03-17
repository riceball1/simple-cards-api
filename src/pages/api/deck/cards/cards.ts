import type { NextApiRequest, NextApiResponse } from "next";
import decksData from "@/pages/database/decksData.json";
import { Card } from "@/types/common";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Card[]>
) {
  const {userid, deckid} = req.query;
  console.log('this worked');

  const usersDecks = decksData.filter(deck => deck.id === userid)[0].decks
  const cards = usersDecks.filter(deck => deck.id === deckid)[0].cards

  res.status(200).json(cards);
}
