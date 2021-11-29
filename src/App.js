import React from "react";
import Users from "./Users";
import { UsersPrivoder } from "./UsersContext";

const App = () => {
  return (
    <UsersPrivoder>
      <Users />
    </UsersPrivoder>
  );
};

export default App;
