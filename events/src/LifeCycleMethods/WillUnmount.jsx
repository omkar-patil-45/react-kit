import { useEffect, useState } from "react";
import ChildUnMount from "./ChildUnMount";

const WillUnmount = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isMount, setIsMount] = useState(true);

  useEffect(() => {
    document.title = "I clicked" + count + "times ";
  });

  useEffect(() => {
    document.title = "I clicked" + count + "times";
  }, [count]);

  const onClick = () => {
    setCount((prev) => prev + 1);
    setIsMount(!isMount);
  };

  const changeName = () => {
    setName((prev) => prev + "a");
  };
  return (
    <div>
      Count:{count}
      <h1>
        <button onClick={onClick}>IncCount</button>
      </h1>
      <h1>
        <button onClick={changeName}>ChangeName</button>
      </h1>
      <p>{name}</p>
      {isMount && <ChildUnMount />}
    </div>
  );
};

export default WillUnmount;
