import { useState } from "react";
import Child1 from "./Child1";

const Parent1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click{count}</button>
      <Child1 name="Omkar"/>
    </div>
  );
};

export default Parent1;
