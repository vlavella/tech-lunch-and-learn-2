import React, { useState, useEffect, useCallback, memo } from "react";

const List = function List({ getItems }) {
  /* Initial state of the items */
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Setting items");
    setItems(getItems());
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

const UseCallBackSample = () => {
  const [input, setInput] = useState(1);

  const [light, setLight] = useState(true);

  /* Style for changing the theme */
  const theme = {
    color: light ? "grey" : "white",
  };

  const getItems = () => {
    return [input + 10, input + 100];
  };

  return (
    <div className="container" style={theme}>
      {/* set the theme in the parent div */}
      <div>
        <input
          type="number"
          value={input}
          /* When we input a number it is stored
			in our stateful variable */
          onChange={(event) => setInput(event.target.value)}
        />

        {/* on click the button the theme is set to the
			opposite mode, light to dark and vice versa*/}
        <button onClick={() => setLight((prevLight) => !prevLight)}>
          {light ? "dark mode" : "light mode"}
        </button>
      </div>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallBackSample;
