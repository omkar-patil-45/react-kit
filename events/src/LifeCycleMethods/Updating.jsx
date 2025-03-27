import { useEffect, useState } from "react";

const Updating = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "I Clicked" + count + "Times";
  }, [count]);
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

export default Updating;
