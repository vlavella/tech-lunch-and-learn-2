import React from "react";

import Clock from "./Clock-3";
import BranchFestCountDown from "./BranchFestCountDown-3";
import useNow from "../use-now";

const Dashboard = () => {
  const now = useNow();
  return (
    <div>
      <Clock now={now} />
      <BranchFestCountDown now={now} />
    </div>
  );
};

export default Dashboard;
