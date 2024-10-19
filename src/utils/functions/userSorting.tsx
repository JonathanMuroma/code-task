import { User } from "../types";

export const sortByName = (userList: User[], ascOrder: boolean) => {
  return userList.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return ascOrder ? -1 : 1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return ascOrder ? 1 : -1;
    return 0;
  });
};
