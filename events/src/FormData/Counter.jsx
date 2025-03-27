import { useRef, useState } from "react";

const Counter = () => {
  const countRef = useRef(0);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log("Button Clicked", countRef.current);
  };
  return (
    <div>
      <p>{count}</p>
      <p>{}</p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => setCount(count + 1)}>Update State</button>
    </div>
  );
};

export default Counter;
