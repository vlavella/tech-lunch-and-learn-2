import React, { useState, useEffect, useMemo, useCallback, memo } from "react";

function verySlowFunction(input) {
  console.log("running verySlowFunction");
  //  900000000, 8 zeros
  while (input < 900000000) {
    input++;
  }
  return input;
}

function SlowComponent() {
  const [data] = useState(0);
  const number = useMemo(() => verySlowFunction(data), [data]);
  return <div>{number}</div>;
}

function UseMemoSample1() {
  const [increments, setIncrements] = useState(0);
  return (
    <div className="container">
      <span>Is it worth it?</span>
      <button onClick={() => setIncrements(increments + 1)}>Increment</button>
      <span>{increments}</span>
      <SlowComponent />
    </div>
  );
}

export default UseMemoSample1;
