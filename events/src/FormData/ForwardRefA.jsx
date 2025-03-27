import { useRef, useState } from "react";
import ForwardRefB from "./ForwardRefB";

const ForwardRefA = () => {
  const [data, setData] = useState("");

  const nameRef = useRef();

  const fnClick = () => {
    setData(nameRef.current.value);
  };

  return (
    <div>
      <ForwardRefB myRef={nameRef} />
      <input type="button" value="submit" onClick={fnClick} />
      <h3>My Data:{data}</h3>
    </div>
  );
};

export default ForwardRefA;
