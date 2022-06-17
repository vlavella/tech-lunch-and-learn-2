import React, { useState, useEffect, useMemo, useCallback, memo } from "react";

const Message = memo(
  ({ text, otherProp1, otherProp2 }) => (
    <span>
      {text}, at {new Date().toLocaleString()}
    </span>
  ),
  (prevProps, nextProps) => prevProps.text === nextProps.text
);
function UseMemoSample2() {
  const [increments, setIncrements] = useState(0);

  const [word] = useState("world");

  const message = useMemo(
    () => ({
      text: `Hello ${word}`,
    }),
    [word]
  );

  useEffect(() => {
    console.log(message.text);
  }, [message]);

  return (
    <div className="container">
      <span>Is it worth it?</span>
      <button onClick={() => setIncrements(increments + 1)}>Increment</button>
      <span>{increments}</span>
      <Message text={message.text} />
    </div>
  );
}

export default UseMemoSample2;
