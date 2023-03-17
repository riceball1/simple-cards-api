// pages/api/[url].ts
import { NextApiRequest, NextApiResponse } from 'next';

async function deckviewerRedirect(req: NextApiRequest, res: NextApiResponse) {
  const { deckid, userid } = req.query;
  const deckID = decodeURIComponent(deckid as string);
  const userID = decodeURIComponent(userid as string);
  console.log(deckID, userID)
  res.redirect('/deckviewer');
}

export default deckviewerRedirect;