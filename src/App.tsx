import React, { useEffect, useState } from "react";
import "./styles/app.scss";
import "./styles/userCards.scss";
import { User } from "./utils/types";
import useUsers from "./queries/users";
import ListInputs from "./components/ListInputs";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const userData = useUsers();

  const [orderStyle, setOrderStyle] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>("");

  const sortByName = (userList: User[], ascOrder: boolean) => {
    return userList.sort(function (a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return ascOrder ? -1 : 1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return ascOrder ? 1 : -1;
      return 0;
    });
  };

  useEffect(() => {
    if (userData && userData.length > 0) {
      const sorted = sortByName(userData, true);
      setUsers(sorted);
    }
  }, [userData]);

  const changeOrder = () => {
    setOrderStyle(!orderStyle);
    const changedOrder = sortByName(users, !orderStyle);
    setUsers(changedOrder);
  };

  const filterUsers = (val: string) => {
    const sorted = sortByName(userData, orderStyle);
    const filtered: User[] = sorted.filter(
      (user) =>
        user.name.toLowerCase().includes(val.toLowerCase()) ||
        user.email.toLowerCase().includes(val.toLowerCase()) ||
        user.phone.toLowerCase().includes(val.toLowerCase()) ||
        user.website.toLowerCase().includes(val.toLowerCase()) ||
        user.address.city.toLowerCase().includes(val.toLowerCase()) ||
        user.address.street.toLowerCase().includes(val.toLowerCase()) ||
        user.address.zipcode.toLowerCase().includes(val.toLowerCase())
    );
    setUsers(filtered);
  };

  return (
    <div className="App">
      <h1>Users:</h1>
      <p className="description">
        Change ordering by name through the button and filter users by their
        data with the filter text field
      </p>
      {userData && userData.length > 0 ? (
        <div>
          <ListInputs
            changeOrder={changeOrder}
            orderStyle={orderStyle}
            filter={filter}
            setFilter={setFilter}
            filterUsers={filterUsers}
          />
          <div className="user_cards_list">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      ) : (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default App;
