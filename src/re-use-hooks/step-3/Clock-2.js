import React, { useEffect, useState } from "react";

import useNow from "../use-now";

const Clock = () => {
  const now = useNow();
  const [state, setState] = useState(1);

  useEffect(() => {
    let i = 0;
    while (i < 100000000) {
      i++;
    }
    setState(i);
  }, []);

  return (
    <>
      <h3>Clock</h3>
      <div>{now.toLocaleString()}</div>
      <div></div>
    </>
  );
};

export default Clock;
