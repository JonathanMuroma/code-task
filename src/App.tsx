import React, { useEffect, useState } from "react";
import "./styles/app.scss";
import { User } from "./utils/types";
import useUsers from "./queries/users";
import ListInputs from "./components/ListInputs";
import { sortByName } from "./utils/functions/userSorting";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const { data: userData, isLoading } = useUsers();

  const [orderStyle, setOrderStyle] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    if (userData) {
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
      {!isLoading ? (
        <div>
          <ListInputs
            changeOrder={changeOrder}
            orderStyle={orderStyle}
            filter={filter}
            setFilter={setFilter}
            filterUsers={filterUsers}
          />
          <UserList users={users} />
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
