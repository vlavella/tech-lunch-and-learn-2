import { useState } from "react";

import UseCallBackSample from "./use-callback/Sample";
import SampleMemo from "./use-memo/SampleMemo";
import ReUseHooksSample from "./re-use-hooks/ReUseHooksSample";
import "./App.css";

function App() {
  const [sample, setSample] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <label onClick={() => setSample(1)} className="item">
          Use Callback
        </label>
        <label onClick={() => setSample(2)} className="item">
          Use Memo
        </label>
        <label onClick={() => setSample(4)} className="item">
          Re use hooks
        </label>
      </div>

      {sample === 1 && <UseCallBackSample />}
      {sample === 2 && <SampleMemo />}
      {sample === 4 && <ReUseHooksSample />}
    </div>
  );
}

export default App;
