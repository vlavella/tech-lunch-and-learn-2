import { useState } from "react";

import Memo1 from "./SampleUseMemo1";
import Memo2 from "./SampleUseMemo2";
import Memo3 from "./SampleUseMemo3";

function SampleMemo() {
  const [sample, setSample] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <label onClick={() => setSample(1)} className="item">
          Memo 1
        </label>
        <label onClick={() => setSample(2)} className="item">
          Memo 2
        </label>
        <label onClick={() => setSample(3)} className="item">
          Memo 3
        </label>
      </div>

      {sample === 1 && <Memo1 />}
      {sample === 2 && <Memo2 />}
      {sample === 3 && <Memo3 />}
    </div>
  );
}

export default SampleMemo;
