import React, { useEffect, useState } from "react";

const apiGetData = (dataOpt) => {
  /* Some data */
  const data = {
    Colors: ["red", "green", "yellow"],
    Fruits: ["Apple", "mango", "Banana"],
  };

  return data[dataOpt];
};

function UseEffectSample() {
  /* Initial states */
  const [currentChoice, setCurrentChoice] = useState("Colors");
  const [items, setItems] = useState([]);

  /* Using useEffect to set the data of currentchoice
	to items and console log the fetching... */
  useEffect(() => {
    setItems(apiGetData(currentChoice));
    console.log("Data is fetched!");
  }, [currentChoice]);

  return (
    <>
      <button onClick={() => setCurrentChoice("Colors")}>Colors</button>
      <button onClick={() => setCurrentChoice("Fruits")}>Fruits</button>
      {items.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </>
  );
}

export default UseEffectSample;
