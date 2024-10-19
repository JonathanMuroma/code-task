import React from "react";
import { User } from "../utils/types";

interface UserCard {
  user: User;
}

const UserCard: React.FC<UserCard> = ({ user }) => {
  return (
    <div className="card_cont">
      <div className="user_card">
        <p>
          <b>Name:</b> {user.name}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
          <b>Phone:</b> {user.phone}
        </p>
        <p>
          <b>Website:</b> {user.website}
        </p>
        <p>
          <b>Address:</b> {user.address.street}, {user.address.city},{" "}
          {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
