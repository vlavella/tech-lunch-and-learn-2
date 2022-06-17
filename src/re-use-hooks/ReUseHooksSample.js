import { useState } from "react";

import Clock from "./step-1/Clock";
import BranchFestCountDown from "./step-2/BranchFestCountDown";
import Dashboard from "./step-3/Dashboard";
import Dashboard2 from "./step-4/Dashboard-2";

function ReUseHooksSample() {
  const [sample, setSample] = useState(1);

  return (
    <div className="App">
      <div className="header">
        <label onClick={() => setSample(1)} className="item">
          Clock
        </label>
        <label onClick={() => setSample(2)} className="item">
          Count down
        </label>
        <label onClick={() => setSample(3)} className="item">
          Dashboard
        </label>
        <label onClick={() => setSample(4)} className="item">
          Dashboard 2
        </label>
      </div>

      {sample === 1 && <Clock />}
      {sample === 2 && <BranchFestCountDown />}
      {sample === 3 && <Dashboard />}
      {sample === 4 && <Dashboard2 />}
    </div>
  );
}

export default ReUseHooksSample;
