import type { NextApiRequest, NextApiResponse } from "next";
import userData from "@/pages/database/userData.json";

type Data = {
  userID: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const useremail = req.query.useremail;
  const user = userData.filter((user) => {
    return user.email === useremail;
  });
  console.log(req);
  res.status(200).json(user[0]);
}
