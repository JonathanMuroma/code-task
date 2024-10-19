import React, { useEffect, useState } from "react";
import { User } from "../utils/types";

const useUsers = () => {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setData(data));
  }, []);

  return data;
};

export default useUsers;
