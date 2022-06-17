import React from "react";

import Clock from "./Clock-2";
import BranchFestCountDown from "./BranchFestCountDown-2";
import useNow from "../use-now";
const Dashboard = () => {
  const now = useNow();

  return (
    <div>
      <Clock />
      <BranchFestCountDown />
    </div>
  );
};

export default Dashboard;
