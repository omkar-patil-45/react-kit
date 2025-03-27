import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Rendering = () => {
  const [isload, setIsload] = useState(false);

  const handleClick = () => {
    setIsload(true);
  };
  return (
    <div>
      <button onClick={handleClick}>Button</button>
      {/* {isload && <Child1 />} */}
      {isload ? <Child1 /> : <Child2 />}
    </div>
  );
};

export default Rendering;
