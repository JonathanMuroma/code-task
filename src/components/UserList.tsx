import React from "react";
import { User } from "../utils/types";
import UserCard from "./UserCard";
import "../styles/userList.scss";

interface UserList {
  users: User[];
}

const UserList: React.FC<UserList> = ({ users }) => {
  return (
    <div className="user_cards_list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
