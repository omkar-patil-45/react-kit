import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>I am parent and count value{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Incount</button>
      <Child />
    </div>
  );
};

export default Parent;
