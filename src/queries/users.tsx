import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { User } from "../utils/types";

const useUsers = () => {
  async function fetchFunc() {
    const personel = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await personel.json();

    return data;
  }

  const { data, isLoading, isRefetching, isFetching } = useQuery(
    "randomFacts",
    fetchFunc
  );

  return { data, isLoading, isRefetching, isFetching };
};

export default useUsers;
