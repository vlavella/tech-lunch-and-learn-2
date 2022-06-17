import React, { useState, useEffect, useMemo, useCallback, memo } from "react";

const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

const MessageForFibo = () => <span>Hello from fibo</span>;
const DefaultMessage = () => <span>Hello world</span>;

function UseMemoSample3() {
  const [increments, setIncrements] = useState(0);
  const [word] = useState("world");

  const isFibo = fibo.some((x) => x === increments);
  const isInArray = increments < 35;

  const Message = useMemo(() => {
    const shouldChange = isFibo && isInArray;

    if (shouldChange) {
      return MessageForFibo;
    }
    return DefaultMessage;
  }, [isFibo, isInArray]);

  return (
    <>
      <span>Is it worth it?</span>
      <button onClick={() => setIncrements(increments + 1)}>Increment</button>
      <span>{increments}</span>
      <Message />
    </>
  );
}

export default UseMemoSample3;
