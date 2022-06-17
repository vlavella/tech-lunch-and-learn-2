import React, { useEffect, useState } from "react";

const Clock = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(intervalId);
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
