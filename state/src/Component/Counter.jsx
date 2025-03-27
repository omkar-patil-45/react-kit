import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    for (let i = 0; i < 5; i++) {
      setValue((val) => {
        val + 1;
      });
    }
  };
  return (
    <div>
      <button onClick={increment}>button</button>
      <h1>{value}</h1>
    </div>
  );
};

export default Counter;
