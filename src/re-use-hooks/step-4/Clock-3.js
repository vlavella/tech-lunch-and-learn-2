import React, { useEffect, useState } from "react";

const Clock = ({ now }) => {
  const [state, setState] = useState(1);

  useEffect(() => {
    let i = 0;
    while (i < 100000000) {
      i++;
    }
    setState(i);
  }, []);

  return (
    <div>
      <h3>Clock</h3>
      <div>{now.toLocaleString()}</div>
      <div></div>
    </div>
  );
};

export default Clock;
