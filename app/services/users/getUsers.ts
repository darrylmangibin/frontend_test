import { User } from "@/app/types/user";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextHandler } from "next-connect";

export const getUsers = async (
  req: NextApiRequest,
  res: NextApiResponse<User[]>,
  next: NextHandler,
) => {
  const externalUserApiEndpoint = "https://jsonplaceholder.typicode.com/users";

  try {
    const { data } = await axios.get<User[]>(externalUserApiEndpoint);

    res.status(200).json(data);
  } catch (error) {
    throw error;
  }
};
