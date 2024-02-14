import { DirectionOptionKeys, FieldOptionKeys } from "@/app/controls";
import { User } from "@/app/types/user";

export interface SortUsersListByOptions {
  key: FieldOptionKeys;
  sortBy: DirectionOptionKeys;
}

export interface SortUsersListBy {
  (usersLists: User[], options: SortUsersListByOptions): User[];
}

const sortUsersListBy: SortUsersListBy = (usersLists, { key, sortBy }) => {
  return usersLists.sort((a, b) => {
    if (key === "company") {
      if (a[key].name.toLowerCase() < b[key].name.toLowerCase()) {
        return sortBy === "ascending" ? -1 : 1;
      }
      if (a[key].name.toLowerCase() > b[key].name.toLowerCase()) {
        return sortBy === "descending" ? -1 : 1;
      }
    } else {
      if (a[key].toLowerCase() < b[key].toLowerCase()) {
        return sortBy === "ascending" ? -1 : 1;
      }
      if (a[key].toLowerCase() > b[key].toLowerCase()) {
        return sortBy === "descending" ? -1 : 1;
      }
    }
    return 0;
  });
};

export default sortUsersListBy;
