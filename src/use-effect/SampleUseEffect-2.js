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
  const [fruits, setFruits] = useState([]);
  const [colors, setColors] = useState([]);

  /* Using useEffect to set the data of currentchoice
	to items and console log the fetching... */
  useEffect(() => {
    if (currentChoice === "Fruits" && fruits.length === 0) {
      setFruits(apiGetData(currentChoice));
      console.log("Data is fetched!");
    }

    if (currentChoice === "Colors" && colors.length === 0) {
      setColors(apiGetData(currentChoice));
      console.log("Data is fetched!");
    }
  }, [currentChoice, fruits, colors]);

  return (
    <>
      <button onClick={() => setCurrentChoice("Colors")}>Colors</button>
      <button onClick={() => setCurrentChoice("Fruits")}>Fruits</button>
      {currentChoice === "Fruits" &&
        fruits.map((item) => <div key={item}>{item}</div>)}
      {currentChoice === "Colors" &&
        colors.map((item) => <div key={item}>{item}</div>)}
    </>
  );
}

export default UseEffectSample;
