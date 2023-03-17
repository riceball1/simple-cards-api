import type { NextApiRequest, NextApiResponse } from "next";
import userData from "@/pages/database/userData.json";
import { UserData } from "@/types/common";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserData>
) {
  const useremail = req.query.useremail;
  const user = userData.filter((user) => {
    return user.email === useremail;
  });
  console.log(req);
  res.status(200).json(user[0]);
}
