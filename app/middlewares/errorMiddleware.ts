import { NextApiRequest, NextApiResponse } from "next";

export const errorMiddleware = async (
  error: unknown,
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  res
    .status(500)
    .json({ error: `Something went wrong ${(error as Error).message}` });
};
