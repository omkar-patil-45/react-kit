import { useEffect } from "react";
import { useState } from "react";

const Mounting = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "I Clicked" + count + "Times";
  });
  return (
    <div>
      Count:{count}
      <h1>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Increse Count
        </button>
      </h1>
    </div>
  );
};

export default Mounting;
