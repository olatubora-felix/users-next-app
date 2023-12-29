import React from "react";
import { UserList } from "./(common)/userList";

const getUsers = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const users = await response.json();
  return users;
};
const UsersPage = async () => {
  const users = await getUsers();

  return <UserList users={users} />;
};

export default UsersPage;
