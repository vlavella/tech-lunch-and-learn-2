import { useEffect, useState } from "react";

const useNow = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return now;
};

export default useNow;
