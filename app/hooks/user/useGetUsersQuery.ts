import { User } from "@/app/types/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUsersQuery = () => {
  const users = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get<User[]>("/api/users");

      return data;
    },
  });

  return users;
};
